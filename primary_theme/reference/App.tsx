import { useState, useEffect } from 'react';
import './index.css';
import IsingBackground from './IsingBackground';
import ChatRoom from './components/ChatRoom';
import Login from './components/Login';
import Account from './components/Account';
import Notifications from './components/Notifications';
import SessionManager from './components/SessionManager';
import { AuthProvider, useAuth } from './lib/auth-context';
import { auth, db } from './lib/firebase';
import { telemetryDb } from './lib/firebase_telemetry';
import { doc, onSnapshot, collection, addDoc, query, orderBy, getDocs, where, updateDoc, arrayUnion } from 'firebase/firestore';
import { useAgentTelemetry } from './hooks/useAgentTelemetry';
import { useSandboxTitles } from './hooks/useSandboxTitles';
import AdminDashboard from './components/AdminDashboard';
import VoiceSettings from './components/VoiceSettings';
import { groupConsecutiveSandboxes } from './utils/groupSandboxes';
import type { ChatDocument, PythonOutputDocument, SandboxDocument, BotConfig } from './lib/firestore-schema';
import { getTimestampMillis } from './lib/firestore-schema';

function AppContent() {
  const [theme, setTheme] = useState(() => localStorage.getItem('user_theme') || 'theme-primary');
  const [view, setView] = useState<'chat' | 'account' | 'admin'>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#account')) return 'account';
    if (hash.startsWith('#admin')) return 'admin';
    return 'chat';
  });
  const [activeChatId, setActiveChatId] = useState<string | undefined>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#chat/') && hash.length > 6) {
      return hash.replace('#chat/', '');
    }
    return undefined;
  });
  const [activeChatCode, setActiveChatCode] = useState<string>('');
  const [activeChatName, setActiveChatName] = useState<string>('');
  const [activeChatBots, setActiveChatBots] = useState<BotConfig[]>([]);
  const [pythonOutputs, setPythonOutputs] = useState<PythonOutputDocument[]>([]);
  const [activePythonOutput, setActivePythonOutput] = useState<PythonOutputDocument | null>(null);
  const [showSessionManager, setShowSessionManager] = useState(false);
  const [showThemes, setShowThemes] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showVoiceMenu, setShowVoiceMenu] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(0.85);
  const [voiceModeEnabled, setVoiceModeEnabled] = useState(false);
  const [isingPlaying, setIsingPlaying] = useState(true);
  const [isingSpeed, setIsingSpeed] = useState(5);
  const [isingT, setIsingT] = useState(2.27);
  const [isingVibrance, setIsingVibrance] = useState(0.8);
  const [searchQuery, setSearchQuery] = useState('');
  const [chatSandboxes, setChatSandboxes] = useState<SandboxDocument[]>([]);
  const sandboxTitles = useSandboxTitles(chatSandboxes);
  const [expandedSidebarGroups, setExpandedSidebarGroups] = useState<Record<string, boolean>>({});
  const { user, loading } = useAuth();

  // --- Telemetry Logger ---
  const { flushTrajectory } = useAgentTelemetry(async (trajectory) => {
    if (!trajectory || trajectory.length === 0) return;
    try {
      await addDoc(collection(telemetryDb, "trajectories"), {
        app_name: "group-chat",
        timestamp: Date.now(),
        data: trajectory
      });
      console.log("[Telemetry] Flushed to Firestore");
    } catch (e) {
      console.error("[Telemetry] Error saving: ", e);
    }
  });

  // Auto-flush telemetry every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      flushTrajectory();
    }, 30000);
    return () => clearInterval(interval);
  }, [flushTrajectory]);

  // Listen for Telemetry coming OUT of the Playground iframes!
  useEffect(() => {
    const handleSandboxMessage = async (e: MessageEvent) => {
      if (e.data && e.data.type === 'GEMINI_SANDBOX_TELEMETRY') {
        console.log("Intercepted Sandbox Action: ", e.data);
        try {
          await addDoc(collection(telemetryDb, "sandbox_trajectories"), {
            app_name: "group-chat-playground",
            timestamp: Date.now(),
            action: e.data.action,
            dom: e.data.domState
          });
        } catch (err) {
          console.error("Error saving sandbox trajectory:", err);
        }
      }
    };
    window.addEventListener('message', handleSandboxMessage);
    return () => window.removeEventListener('message', handleSandboxMessage);
  }, []);

  // Broadcast theme to all Sandboxes
  const broadcastThemeToSandboxes = () => {
    const bodyStyles = getComputedStyle(document.body);
    const variables = {
      '--bg-color': bodyStyles.getPropertyValue('--bg-color').trim(),
      '--text-color': bodyStyles.getPropertyValue('--text-color').trim(),
      '--primary-color': bodyStyles.getPropertyValue('--primary-color').trim(),
      '--secondary-color': bodyStyles.getPropertyValue('--secondary-color').trim(),
      '--accent-color': bodyStyles.getPropertyValue('--accent-color').trim(),
      '--surface-color': bodyStyles.getPropertyValue('--surface-color').trim(),
      '--border-color': bodyStyles.getPropertyValue('--border-color').trim(),
      '--font-main': bodyStyles.getPropertyValue('--font-main').trim(),
      '--font-heading': bodyStyles.getPropertyValue('--font-heading').trim(),
    };
    document.querySelectorAll('iframe').forEach(iframe => {
      if (iframe.contentWindow) {
        iframe.contentWindow.postMessage({ type: 'GEMINI_SANDBOX_THEME_UPDATE', variables }, '*');
      }
    });
  };

  useEffect(() => {
    const handleThemeRequest = (e: MessageEvent) => {
      if (e.data && e.data.type === 'GEMINI_SANDBOX_THEME_REQUEST') {
        broadcastThemeToSandboxes();
      }
    };
    window.addEventListener('message', handleThemeRequest);
    return () => window.removeEventListener('message', handleThemeRequest);
  }, []);
  // -------------------------
  // Listen for chat updates (name, code, bots)
  useEffect(() => {
    if (!activeChatId) return;
    const unsub = onSnapshot(doc(db, 'chats', activeChatId), (docSnap) => {
      if (docSnap.exists()) {
        const chatData = docSnap.data() as ChatDocument;
        setActiveChatCode(chatData.inviteCode || '');
        setActiveChatName(chatData.name || 'Global Chat');
        setActiveChatBots(chatData.bots || []);
      } else {
        setActiveChatCode('');
        setActiveChatName('');
        setActiveChatBots([]);
      }
    });
    return () => unsub();
  }, [activeChatId]);

  // Handle post-auth room join intent (room code entered in Login)
  useEffect(() => {
    const intentCode = localStorage.getItem('intent_join_room');
    if (!intentCode || !user) return;
    
    const handleIntentJoin = async () => {
      try {
        const q = query(collection(db, 'chats'), where('inviteCode', '==', intentCode));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const chatDoc = snapshot.docs[0];
          if (!chatDoc.data().participants.includes(user.uid)) {
            await updateDoc(doc(db, 'chats', chatDoc.id), {
              participants: arrayUnion(user.uid)
            });
          }
          setActiveChatId(chatDoc.id);
        }
        localStorage.removeItem('intent_join_room');
      } catch (err) {
        console.error('Failed to join room via intent:', err);
        localStorage.removeItem('intent_join_room');
      }
    };
    
    handleIntentJoin();
  }, [user]);

  useEffect(() => {
    if (!user || !activeChatId) return;
    const unsubOutputs = onSnapshot(collection(db, 'users', user.uid, 'python_outputs'), (snap) => {
      const outputs = snap.docs.map(d => ({ id: d.id, ...(d.data() as Omit<PythonOutputDocument, 'id'>) }));
      setPythonOutputs(
        outputs
          .filter((output) => output.chatId === activeChatId)
          .sort((a, b) => getTimestampMillis(b.createdAt) - getTimestampMillis(a.createdAt))
      );
    });
    return () => unsubOutputs();
  }, [user, activeChatId]);

  // Real-time listener for playgrounds stored in Firestore (per-chat)
  useEffect(() => {
    if (!activeChatId) {
      Promise.resolve().then(() => setChatSandboxes([]));
      return;
    }
    const sandboxesRef = collection(db, "chats", activeChatId, "sandboxes");
    const q = query(sandboxesRef, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      const sandboxes = snapshot.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<SandboxDocument, "id">) }));
      setChatSandboxes(sandboxes);
    });
    return () => unsub();
  }, [activeChatId]);


  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('user_theme', theme);
    // Give browser a moment to apply the class styles, then broadcast them
    setTimeout(broadcastThemeToSandboxes, 50);
  }, [theme]);

  // Sync state to URL hash
  useEffect(() => {
    if (view === 'account') {
      window.history.replaceState(null, '', '#account');
    } else if (view === 'admin') {
      window.history.replaceState(null, '', '#admin');
    } else {
      if (activeChatId) {
        window.history.replaceState(null, '', `#chat/${activeChatId}`);
      } else {
        window.history.replaceState(null, '', '#chat');
      }
    }
  }, [view, activeChatId]);

  // Sync URL hash to state (handle back/forward browser buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#account')) {
        setView('account');
      } else if (hash.startsWith('#admin')) {
        setView('admin');
      } else if (hash.startsWith('#chat/')) {
        setView('chat');
        setActiveChatId(hash.replace('#chat/', ''));
      } else {
        setView('chat');
        setActiveChatId(undefined);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (loading) return null; // Avoid flashing the login screen while checking auth

  // Admin dashboard renders full-page, bypassing the header/sidebar chat layout
  // so it has the entire viewport for data tables and metrics.
  if (view === 'admin') {
    if (user?.email === 'kaiser.factorial@gmail.com') {
      return <AdminDashboard />;
    }
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        boxSizing: 'border-box',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        color: '#ff3333',
        border: '3px solid #ff3333',
        padding: '2rem',
        backgroundColor: 'rgba(0,0,0,0.85)',
        boxShadow: '6px 6px 0px 0px #000',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>ACCESS DENIED</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', letterSpacing: '1px' }}>
          {user ? 'UNAUTHORIZED_CREDENTIALS_DETECTED' : 'PLEASE LOGIN WITH ADMIN PRIVILEGES'}
        </p>
        <button
          className="btn"
          onClick={() => setView('chat')}
          style={{
            padding: '0.5rem 1.5rem',
            color: '#ff3333',
            border: '2px solid #ff3333',
            background: 'transparent',
            cursor: 'pointer',
            fontFamily: 'inherit',
            textTransform: 'uppercase',
            fontWeight: 'bold'
          }}
        >
          {user ? 'RETURN TO SAFETY' : 'GO TO LOGIN'}
        </button>
      </div>
    );
  }

  return (
    <>
      <Notifications onOpenChat={(id) => { setActiveChatId(id); setView('chat'); }} />
      {showSessionManager && (
        <SessionManager 
          onClose={() => setShowSessionManager(false)} 
          onOpenChat={(id) => { setActiveChatId(id); setView('chat'); }} 
        />
      )}
      {theme === 'theme-portfolio' && (
        <IsingBackground 
          isPlaying={isingPlaying} 
          speed={isingSpeed}
          temperature={isingT} 
          vibrance={isingVibrance} 
        />
      )}
      <div style={{ padding: '0.5rem 2rem 1rem 2rem', maxWidth: '1400px', margin: '0 auto', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <header className="header-title" style={{ marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--divider-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <h2 
              className="no-glow-text" 
              style={{ 
                color: 'var(--primary-color)', 
                margin: 0, 
                fontSize: '1.8rem', 
                letterSpacing: '-1px',
                cursor: 'pointer',
                userSelect: 'none',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                opacity: activeChatId ? 0.8 : 1,
                transition: 'opacity 0.2s'
              }}
              onClick={() => {
                setActiveChatId(undefined);
                setView('chat');
              }}
              title="Return to Global Chat"
            >
              JOINT_SESSION
            </h2>
            {user && (
              <button className="btn btn-rooms" style={{ padding: '0.3rem 1rem', fontSize: '1rem' }} onClick={() => setShowSessionManager(true)}>
                Rooms
              </button>
            )}
            {user && user.email === 'kaiser.factorial@gmail.com' && (
              <button className="btn btn-admin" style={{ padding: '0.3rem 1rem', fontSize: '1rem' }} onClick={() => setView('admin')}>
                Admin
              </button>
            )}
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            {view === 'chat' && user && (
              <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                <span className="zoom-text" style={{ color: 'var(--text-color)', fontSize: '0.9rem', fontFamily: 'var(--font-main)', opacity: 0.8, fontWeight: 'bold' }}>ZOOM:</span>
                <button className="btn" onClick={() => setZoomLevel(z => Math.max(0.6, z - 0.2))} style={{ padding: '0.15rem 0.5rem', fontSize: '0.9rem' }}>-</button>
                <button className="btn" onClick={() => setZoomLevel(z => Math.min(2.0, z + 0.2))} style={{ padding: '0.15rem 0.5rem', fontSize: '0.9rem' }}>+</button>

                {/* Voice Mode Toggle */}
                <button
                  onClick={() => setVoiceModeEnabled(v => !v)}
                  className={`px-3 py-1 text-sm rounded border transition-colors ${
                    voiceModeEnabled
                      ? 'bg-[var(--accent-color)] text-black border-[var(--accent-color)]'
                      : 'border-[var(--border-color)] hover:bg-white/5'
                  }`}
                  title={voiceModeEnabled ? "Voice mode on — Gemini will speak" : "Enable voice mode"}
                >
                  {voiceModeEnabled ? '🔊 Voice' : '🔇 Voice'}
                </button>

                {/* AUDIO toggle + gear */}
                <span className="zoom-text" style={{ color: 'var(--text-color)', fontSize: '0.9rem', fontFamily: 'var(--font-main)', opacity: 0.8, fontWeight: 'bold', marginLeft: '0.6rem' }}>AUDIO:</span>
                <button
                  className="btn"
                  onClick={() => {
                    const current = localStorage.getItem('voice_tts_enabled');
                    const next = current === 'false' ? 'true' : 'false';
                    localStorage.setItem('voice_tts_enabled', next);
                  }}
                  style={{ padding: '0.15rem 0.45rem', fontSize: '0.9rem', minWidth: 'auto' }}
                >
                  {localStorage.getItem('voice_tts_enabled') === 'false' ? 'OFF' : 'ON'}
                </button>
                <button
                  className="btn"
                  onClick={() => setShowVoiceMenu(!showVoiceMenu)}
                  style={{ padding: '0.15rem 0.35rem', fontSize: '0.75rem' }}
                  title="Voice settings & cloning"
                >
                  ⚙
                </button>
              </div>
            )}

            <div style={{ display: 'flex', gap: '0.5rem', position: 'relative' }}>
              {showThemes ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', animation: 'fadeIn 0.2s', background: 'var(--surface-color)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1rem', position: 'absolute', right: 0, top: '100%', marginTop: '0.5rem', zIndex: 100, minWidth: '200px', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <button className="btn-persistent primary" onClick={() => { setTheme('theme-primary'); setShowThemes(false); }}>Primary</button>
                  {/* <button className="btn-persistent glass" onClick={() => setTheme('theme-portfolio')}>Ising</button> */}
                  <button className="btn-persistent cyber" onClick={() => { setTheme('theme-cyber'); setShowThemes(false); }}>Terminal</button>
                  <button className="btn" onClick={() => setShowThemes(false)} style={{ padding: '0 0.5rem', background: 'transparent', color: 'inherit', boxShadow: 'none' }}>✕</button>
                </div>
                {theme === 'theme-portfolio' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', borderTop: '1px solid var(--border-color)', paddingTop: '0.8rem', marginTop: '0.3rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 'bold', opacity: 0.7, letterSpacing: '1px' }}>ISING SIM</span>
                    <button className="btn btn-accent" onClick={() => setIsingPlaying(p => !p)} style={{ padding: '0.3rem', fontSize: '0.8rem', width: '100%' }}>{isingPlaying ? '⏸ PAUSE' : '▶ PLAY'}</button>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>SPEED: {isingSpeed}</span>
                      <input type="range" min="1" max="10" step="1" value={isingSpeed} onChange={(e) => setIsingSpeed(parseInt(e.target.value))} style={{ width: '100%' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>TEMP: {isingT.toFixed(1)}</span>
                      <input type="range" min="1.0" max="4.0" step="0.1" value={isingT} onChange={(e) => setIsingT(parseFloat(e.target.value))} style={{ width: '100%' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>VIBRANCE: {isingVibrance.toFixed(1)}</span>
                      <input type="range" min="0.1" max="1.0" step="0.1" value={isingVibrance} onChange={(e) => setIsingVibrance(parseFloat(e.target.value))} style={{ width: '100%' }} />
                    </div>
                  </div>
                )}
              </div>
              ) : (
                <button 
                  className={`btn-persistent ${theme === 'theme-portfolio' ? 'glass' : theme === 'theme-cyber' ? 'cyber' : 'primary'}`} 
                  onClick={() => setShowThemes(true)} 
                  style={{ padding: '0.3rem 0.9rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', border: 'none' }}
                >
                  THEMES <span style={{ fontSize: '0.8em' }}>▼</span>
                </button>
              )}
            </div>

            <div style={{ display: 'flex', position: 'relative' }}>
              {user ? (
                <div style={{ position: 'relative' }}>
                  <button className="btn btn-camera" style={{ padding: '0.3rem 0.9rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => setShowUserMenu(!showUserMenu)}>
                    {user.displayName || (user.email ? user.email.split('@')[0] : 'Guest')} <span style={{ fontSize: '0.8em' }}>▼</span>
                  </button>
                  {showUserMenu && (
                    <div className="surface-panel" style={{ position: 'absolute', top: '100%', right: 0, marginTop: '0.5rem', display: 'flex', flexDirection: 'column', minWidth: '150px', zIndex: 100 }}>
                      {!user.isAnonymous && (
                        <button className="btn" style={{ background: 'transparent', color: 'var(--text-color)', textAlign: 'left', padding: '0.5rem 1rem', border: 'none', borderBottom: '1px solid var(--divider-color)', borderRadius: 0, boxShadow: 'none' }} onClick={() => { setView('account'); setShowUserMenu(false); }}>
                          Account
                        </button>
                      )}
                      {user.isAnonymous ? (
                        <>
                          <button className="btn" style={{ background: 'transparent', color: 'var(--text-color)', textAlign: 'left', padding: '0.5rem 1rem', border: 'none', borderBottom: '1px solid var(--divider-color)', borderRadius: 0, boxShadow: 'none' }} onClick={() => { auth.signOut(); }}>
                            Login
                          </button>
                          <button className="btn" style={{ background: 'transparent', color: 'var(--user1-color)', textAlign: 'left', padding: '0.5rem 1rem', border: 'none', borderRadius: 0, boxShadow: 'none' }} onClick={() => { localStorage.setItem('intent_register', 'true'); auth.signOut(); }}>
                            Register
                          </button>
                        </>
                      ) : (
                        <button className="btn" style={{ background: 'transparent', color: 'var(--user2-color)', textAlign: 'left', padding: '0.5rem 1rem', border: 'none', borderRadius: 0, boxShadow: 'none' }} onClick={() => auth.signOut()}>
                          Logout
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <button className="btn" style={{ padding: '0.3rem 0.9rem', fontSize: '0.9rem', opacity: 0.5 }} disabled>Login</button>
              )}
            </div>
          </div>
        </header>

        <div style={{ display: 'flex', flex: 1, gap: '1.5rem', overflow: 'hidden' }}>
          
          {/* Left Sidebar */}
          <aside style={{ width: '220px', display: 'flex', flexDirection: 'column', gap: '1.5rem', flexShrink: 0, overflowY: 'auto', paddingBottom: '1rem' }}>
            {view === 'chat' && user && (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span className="room-name" style={{ color: 'var(--text-color)', fontFamily: 'var(--font-main)', fontSize: '0.9rem', opacity: 0.7, letterSpacing: '1px' }}>
                    ROOM:<br/><strong style={{ fontSize: '1.1rem', color: 'var(--text-color)', opacity: 1 }}>{activeChatName || 'GLOBAL'}</strong>
                  </span>
                  {activeChatId && activeChatCode && (
                    <span style={{ color: 'var(--primary-color)', fontFamily: 'var(--font-main)', fontSize: '0.8rem', opacity: 0.9, letterSpacing: '1px' }}>
                      CODE:<br/><strong style={{ fontSize: '1.1rem' }}>{activeChatCode}</strong>
                    </span>
                  )}
                  
                  {/* Active Models Indicator */}
                  {activeChatId && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <span style={{ color: 'var(--primary-color)', fontFamily: 'var(--font-main)', fontSize: '0.8rem', opacity: 0.9, fontWeight: 'bold' }}>
                        ACTIVE MODELS:
                      </span>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {/* Always show Gemini as Head Model */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#68d053', boxShadow: `0 0 4px #68d053` }}></div>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-color)', textTransform: 'capitalize' }}>
                            Gemini
                          </span>
                        </div>
                        
                        {/* Show additionally configured bots (like Claude) */}
                        {activeChatBots.map((bot, index) => (
                          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: bot.color, boxShadow: `0 0 4px ${bot.color}` }}></div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-color)', textTransform: 'capitalize' }}>
                              {bot.provider === 'claude' ? 'Claude' : bot.provider}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Model Skills (directly under Active Models) */}
                  {activeChatId && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                      <div
                        style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', alignItems: 'center' }}
                        onClick={() => {
                          const el = document.getElementById('skills-drawer');
                          if (el) el.style.display = el.style.display === 'none' ? 'flex' : 'none';
                        }}
                      >
                        <span style={{ color: 'var(--primary-color)', fontSize: '0.8rem', opacity: 0.9, fontWeight: 'bold' }}>MODEL SKILLS (6)</span>
                        <span style={{ color: 'var(--primary-color)', fontSize: '0.8rem' }}>▼</span>
                      </div>
                      <div id="skills-drawer" style={{ display: 'none', flexDirection: 'column', gap: '0.5rem' }}>
                        {[
                          { name: "Image Generation", desc: "Create images from a text prompt — Gemini & Claude" },
                          { name: "Interactive Playgrounds", desc: "Live HTML sandboxes rendered in-chat — Gemini & Claude" },
                          { name: "Python Execution", desc: "Run Python in the browser via Pyodide — Gemini & Claude" },
                          { name: "Presentations", desc: "Markdown slideshows from a slides block — Gemini & Claude" },
                          { name: "User Memory", desc: "Remember facts about you across sessions, tagged by source — Gemini & Claude read/write" },
                          { name: "Global Memory", desc: "Shared knowledge base with vector search — Gemini writes, both read" }
                        ].map(skill => (
                          <div key={skill.name} style={{ padding: '0.4rem 0.6rem', fontSize: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '4px' }}>
                            <strong style={{ color: 'var(--text-color)' }}>{skill.name}</strong><br/>
                            <span style={{ opacity: 0.7, fontSize: '0.75rem' }}>{skill.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--text-color)', fontSize: '0.8rem', opacity: 0.7, fontWeight: 'bold' }}>SEARCH</span>
                  <input 
                    type="text" 
                    placeholder={`Search messages...`}
                    className="input-box" 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ padding: '0.4rem 0.6rem', width: '100%', fontSize: '0.9rem' }}
                  />
                </div>
                
                {(activeChatId ? chatSandboxes : []).length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                    <span style={{ color: 'var(--primary-color)', fontSize: '0.8rem', opacity: 0.9, fontWeight: 'bold' }}>PLAYGROUNDS ({activeChatId ? chatSandboxes.length : 0})</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {groupConsecutiveSandboxes(
                        [...(activeChatId ? chatSandboxes : [])].reverse(),
                        (sb) => sandboxTitles[sb.id] || 'UI Component'
                      ).map((row, rowIdx) => {
                        if (row.type === 'single') {
                          const sb = row.sandbox;
                          return (
                            <button
                              key={sb.id}
                              className="btn btn-playground"
                              onClick={() => {
                                                              }}
                              style={{ padding: '0.4rem 0.6rem', fontSize: '0.8rem', textAlign: 'left', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between' }}
                            >
                              <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '100px' }}>
                                {sandboxTitles[sb.id] || 'UI Component'}
                              </span>
                              <span style={{ opacity: 0.5 }}>→</span>
                            </button>
                          );
                        } else {
                          // Group of consecutive same-titled sandboxes
                          const groupKey = `sidebar-group-${rowIdx}`;
                          const isOpen = expandedSidebarGroups[groupKey];
                          return (
                            <div key={groupKey} style={{ border: '1px solid var(--border-color)', borderRadius: '6px', overflow: 'hidden' }}>
                              <button
                                className="btn"
                                onClick={() => setExpandedSidebarGroups(prev => ({ ...prev, [groupKey]: !prev[groupKey] }))}
                                style={{ width: '100%', padding: '0.4rem 0.6rem', fontSize: '0.8rem', textAlign: 'left', background: 'rgba(255,255,255,0.08)', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                              >
                                <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '90px' }}>
                                  {row.title}
                                </span>
                                <span style={{ opacity: 0.6, fontSize: '0.75rem', whiteSpace: 'nowrap' }}>{row.sandboxes.length} {isOpen ? '▾' : '▸'}</span>
                              </button>
                              {isOpen && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '0.3rem', background: 'rgba(0,0,0,0.15)' }}>
                                  {row.sandboxes.map((sb, vIdx) => (
                                    <button
                                      key={sb.id}
                                      className="btn btn-playground"
                                      onClick={() => {
                                                                              }}
                                      style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem', textAlign: 'left', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between' }}
                                    >
                                      <span style={{ opacity: 0.8 }}>v{row.sandboxes.length - vIdx}</span>
                                      <span style={{ opacity: 0.4 }}>→</span>
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                )}
                
                {(activeChatId ? pythonOutputs : []).length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                    <span style={{ color: '#4ade80', fontSize: '0.8rem', opacity: 0.9, fontWeight: 'bold' }}>PYTHON OUTPUTS ({activeChatId ? pythonOutputs.length : 0})</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {[...(activeChatId ? pythonOutputs : [])].reverse().map(po => (
                        <button 
                          key={po.id}
                          className="btn"
                          onClick={() => setActivePythonOutput(po)}
                          style={{ 
                            padding: '0.4rem 0.6rem', 
                            fontSize: '0.8rem', 
                            textAlign: 'left', 
                            background: 'rgba(255,255,255,0.05)', 
                            border: '1px solid #4ade80',
                            display: 'flex',
                            justifyContent: 'space-between',
                            color: '#4ade80'
                          }}
                        >
                          <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '100px' }}>
                            {po.isGraphical ? 'Graphical Plot' : 'Text Output'}
                          </span>
                          <span style={{ opacity: 0.5 }}>→</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}


          </aside>

          {/* Main Chat Area */}
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative', borderRadius: 'var(--border-radius)', minWidth: 0 }}>
            {user ? (
              view === 'chat' ? (
                <ChatRoom chatId={activeChatId} chatName={activeChatName} zoomLevel={zoomLevel} searchQuery={searchQuery} onSandboxesChange={setChatSandboxes} voiceModeEnabled={voiceModeEnabled} onToggleVoiceMode={() => setVoiceModeEnabled(v => !v)} />
              ) : (
                <Account onOpenChat={(id) => { setActiveChatId(id); setView('chat'); }} />
              )
            ) : (
              <Login />
            )}
          </main>
        </div>
      </div>
      
      {activePythonOutput && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '90%', height: '90%', display: 'flex', flexDirection: 'column', background: 'var(--bg-color)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid var(--border-color)', background: 'var(--surface-color)' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--text-color)' }}>
                  {activePythonOutput.isGraphical ? 'Graphical Output' : 'Text Output'}
                </span>
                <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>{activePythonOutput.chatName || 'Global Chat'}</span>
              </div>
              <button className="btn" onClick={() => setActivePythonOutput(null)} style={{ padding: '0.5rem 1rem' }}>
                Close
              </button>
            </div>
            <div style={{ flex: 1, backgroundColor: '#fff', position: 'relative' }}>
              {activePythonOutput.isGraphical ? (
                <iframe 
                  srcDoc={`<style>body { font-family: monospace; white-space: pre-wrap; color: #333; padding: 2rem; margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; box-sizing: border-box; } svg { display: block; max-width: 100%; height: auto; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }</style>${activePythonOutput.output}`}
                  title="Graphical Output"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  sandbox="allow-scripts"
                />
              ) : (
                <pre style={{ margin: 0, padding: '2rem', height: '100%', overflow: 'auto', boxSizing: 'border-box', color: '#333', whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontFamily: 'monospace', fontSize: '1.1rem' }}>
                  {activePythonOutput.output}
                </pre>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Voice settings dropdown (anchored to AUDIO controls) */}
      {showVoiceMenu && (
        <div style={{ position: 'absolute', top: '4.8rem', right: '3rem', zIndex: 200 }}>
          <VoiceSettings compact />
        </div>
      )}

    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
