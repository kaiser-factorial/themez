import { useState, type ReactElement, type ReactNode } from 'react'
import { Paperclip, Mic, Send } from 'lucide-react'
import { TextInput } from '@/components/TextInput'
import { Button } from '@/components/Button'
import { Badge, BadgeGroup } from '@/components/Badge'
import { Spinner } from '@/components/Spinner'
import { LoadingProgress } from '@/components/LoadingProgress'
import { ProgressIndicator } from '@/components/ProgressIndicator'
import { Alert } from '@/components/Alert'
import { StatsDisplay } from '@/components/StatsDisplay'
import { ConversationThread } from '@/components/DialogueMessage'
import { Timeline } from '@/components/Timeline'
import { MemoryColumn } from '@/components/MemoryCard'
import { BotNameCardGrid } from '@/components/BotNameCard'
import { MissionStatement } from '@/components/MissionStatement'
import { TechnicalSchematic } from '@/components/TechnicalSchematic'
import { BotParameterPanel } from '@/components/BotParameterPanel'
import { AuditLogCard } from '@/components/AuditLogCard'

/**
 * One entry per showcase section. Each renders the *real* React component(s),
 * mirroring the hand-written CSS demo in SHOWCASE.html so the HTML | React tabs
 * show the same thing built two ways.
 */

function BadgesDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-muted-foreground mb-3 uppercase">Single Badge</p>
        <Badge color="success">Active</Badge>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-3 uppercase">Variants</p>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="default" color="primary">Default</Badge>
          <Badge variant="outline" color="warning">Outline</Badge>
          <Badge variant="solid" color="error">Solid</Badge>
          <Badge variant="glow" color="success">Glow</Badge>
        </div>
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-3 uppercase">Badge Group</p>
        <BadgeGroup
          badges={[
            { label: 'python', color: '#3776ab' },
            { label: 'typescript', color: '#2b7a0b' },
            { label: 'react', color: '#00d8ff' },
            { label: 'tailwind', color: '#06b6d4' },
          ]}
        />
      </div>
    </div>
  )
}

function AlertsDemo() {
  return (
    <div className="space-y-4">
      <Alert title="Success" message="Operation completed successfully" severity="success" dismissible />
      <Alert title="Warning" message="This action may have side effects" severity="warning" actionLabel="Learn more" />
      <Alert title="Error" message="An error occurred while processing your request" severity="error" dismissible />
      <Alert title="Info" message="Check out our new features" severity="info" variant="compact" />
      <Alert title="System" message="System maintenance scheduled for tonight" severity="system" variant="inline" />
    </div>
  )
}

function ButtonsDemo() {
  return (
    <div className="flex gap-3 flex-wrap items-center">
      <Button>Primary</Button>
      <Button variant="accent">Accent</Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}

function SpinnersDemo() {
  return (
    <div className="flex gap-12">
      <Spinner variant="dots" label="Loading" accentColor="#00ff41" />
      <Spinner variant="pulse" label="Error" accentColor="#E63946" />
      <Spinner variant="ring" label="Syncing" accentColor="#00ccff" />
    </div>
  )
}

function ProgressDemo() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs text-muted-foreground mb-3 uppercase">Loading Bar</p>
        <LoadingProgress isLoading={isLoading} position="inline" />
        <button
          type="button"
          onClick={() => {
            setIsLoading(true)
            setTimeout(() => setIsLoading(false), 3000)
          }}
          className="mt-3 px-4 py-2 text-xs font-mono border border-mauk text-mauk hover:bg-mauk hover:text-black transition-colors">
          Trigger Loading
        </button>
      </div>
      <div className="space-y-6">
        <ProgressIndicator value={65} label="Linear" accentColor="#00ff41" variant="linear" />
        <div className="flex gap-8">
          <div>
            <p className="text-[10px] text-muted-foreground mb-4">Circular</p>
            <ProgressIndicator value={72} label="Progress" accentColor="#FF9D23" variant="circular" size="md" />
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground mb-4">Gauge</p>
            <ProgressIndicator value={58} label="Status" accentColor="#00ccff" variant="gauge" size="md" />
          </div>
        </div>
      </div>
    </div>
  )
}

function StatsDemo() {
  return (
    <StatsDisplay
      stats={[
        { label: 'Conversations', value: '1,247', change: '-12', changeType: 'negative', icon: '◉', color: '#03A6A1' },
        { label: 'Concepts', value: '5,847', change: '234', changeType: 'positive', icon: '▮', color: '#FF9D23' },
        { label: 'Memory', value: '2.3GB', change: '+0.1GB', changeType: 'neutral', icon: '💾', color: '#00ff41' },
        { label: 'Uptime', value: '47d 3h', change: 'stable', changeType: 'neutral', icon: '⏱', color: '#E63946' },
      ]}
      columns={4}
    />
  )
}

function TimelineDemo() {
  return (
    <Timeline
      events={[
        { id: '1', title: 'System initialized', icon: '▶', timestamp: '14:22:30' },
        { id: '2', title: 'Models loaded', icon: '✓', timestamp: '14:22:35' },
        { id: '3', title: 'Memory indexed', icon: '◆', timestamp: '14:22:40' },
        { id: '4', title: 'Ready for dialogue', icon: '●', timestamp: '14:22:42' },
      ]}
      direction="vertical"
    />
  )
}

function DialogueDemo() {
  return (
    <ConversationThread
      messages={[
        { speaker: 'USER', content: 'What can you tell me about memory architectures?', align: 'right' },
        { speaker: 'MAUK', content: 'Memory architectures in AI systems typically involve vector embeddings and retrieval mechanisms...', align: 'left' },
        { speaker: 'ABACI', content: 'Building on that, transformers use attention mechanisms to weight different memory locations.', align: 'left' },
      ]}
    />
  )
}

function MissionDemo() {
  return (
    <MissionStatement
      title="[RESEARCH_OBJECTIVE]"
      content="Investigate the emergence of personality and communication patterns in autonomous agent systems through continuous dialogue in a structured memory-augmented workspace."
      version="v1.2.1"
      actionLabel="[VIEW_FULL_DOCUMENTATION]"
      actionHref="/"
      accentColor="#E63946"
    />
  )
}

function SchematicDemo() {
  return (
    <TechnicalSchematic
      title="[SYSTEM_TOPOLOGY]"
      items={[
        { component: 'MAUK', role: 'Inference', location: 'GPU-0', icon: '🧠' },
        { component: 'ABACI', role: 'Inference', location: 'GPU-1', icon: '🧠' },
        { component: 'Memory', role: 'Storage', location: 'Vector DB', icon: '💾' },
        { component: 'Controller', role: 'Orchestration', location: 'CPU', icon: '⚙' },
      ]}
      columns={4}
      accentColor="#00ff41"
    />
  )
}

function MemoryDemo() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <MemoryColumn
        title="MAUK"
        accentColor="#03A6A1"
        align="left"
        items={['Transformer architecture', 'Context windows', 'Attention mechanisms', 'Gradient flow']}
        animationType="pulse"
        dotAnimation="pulse"
      />
      <MemoryColumn
        title="Shared"
        accentColor="#00ff41"
        align="center"
        items={['Dialogue protocols', 'Memory encoding', 'Concept linking', 'Inference patterns']}
        animationType="pulse"
        dotAnimation="pulse"
      />
      <MemoryColumn
        title="ABACI"
        accentColor="#FF9D23"
        align="right"
        items={['Training dynamics', 'Loss landscapes', 'Optimization routes', 'Convergence states']}
        animationType="pulse"
        dotAnimation="ping"
      />
    </div>
  )
}

function BotCardDemo() {
  return (
    <BotNameCardGrid
      bots={[
        { name: 'MAUK_v2.1', description: 'Left-brain processor specializing in logical analysis and structured reasoning', accentColor: '#03A6A1' },
        { name: 'ABACI_v2.1', description: 'Right-brain processor focused on creative synthesis and pattern recognition', accentColor: '#FF9D23' },
      ]}
      columns={2}
    />
  )
}

function ParamsDemo() {
  const [values, setValues] = useState<Record<string, unknown>>({
    temperature: 0.7,
    maxTokens: 2048,
    model: 'gpt-4',
    systemPrompt: 'You are a helpful assistant.',
  })
  return (
    <BotParameterPanel
      botName="MAUK_v2.1"
      parameters={[
        { key: 'temperature', label: 'Temperature', type: 'range', min: 0, max: 2, step: 0.1, group: 'Generation' },
        { key: 'maxTokens', label: 'Max Tokens', type: 'number', min: 1, max: 8192, group: 'Generation' },
        { key: 'model', label: 'Model', type: 'text', group: 'Model Selection' },
        { key: 'systemPrompt', label: 'System Prompt', type: 'textarea', rows: 4, group: 'Behavior' },
      ]}
      values={values}
      onUpdate={(key, value) => setValues(prev => ({ ...prev, [key]: value }))}
      onSave={async () => {
        await new Promise(r => setTimeout(r, 500))
      }}
      accentColor="#03A6A1"
      labelColor="#008f11"
      loopActive
      nodeLabel="NODE_MAUK"
      groupedView
    />
  )
}

function AuditDemo() {
  return (
    <AuditLogCard
      title="Dialogue Session #1247"
      botColor="cyan"
      customBotLabel="MAUK_v2.1"
      timestamp="2026-06-16 20:01:49"
      badge="ACTIVE"
      badgeColor="#00ff41"
      sections={[
        { key: 'summary', title: 'Summary', type: 'text', content: 'Two autonomous agents engaged in extended dialogue about memory architecture and emergence phenomena.' },
        { key: 'parameters', title: 'Model Config', type: 'grid', content: { Temperature: '0.7', 'Max Tokens': '2048', 'Context Window': '8k' } },
        { key: 'topics', title: 'Topics Discussed', type: 'tags', content: ['Memory', 'Emergence', 'Dialogue', 'Architecture', 'Learning'] },
        { key: 'stats', title: 'Statistics', type: 'stats', content: { 'Total Exchanges': '24', 'Avg Turn Length': '342 tokens', Duration: '18m 43s' } },
      ]}
      metadata={{ 'Session ID': '1247', 'Model Versions': 'MAUK-v2.1 / ABACI-v2.1', Environment: 'Production' }}
    />
  )
}

function TIcon({ children, label }: { children: ReactNode; label: string }) {
  return <button type="button" className="ti-icon-btn" aria-label={label}>{children}</button>
}

function TextInputDemo() {
  return (
    <div className="space-y-6" style={{ maxWidth: 480 }}>
      <div>
        <p className="text-xs text-muted-foreground mb-3 uppercase">Default — type to watch it shrink, then wrap</p>
        <TextInput label="Display Name" placeholder="Type a long name to see it auto-fit…" width={360} />
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-3 uppercase">With helper text</p>
        <TextInput label="Callsign" placeholder="e.g. MAUK_v2.1" helperText="Shown to other operators on the mesh." width={360} />
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-3 uppercase">Error state</p>
        <TextInput label="Access Key" defaultValue="invalid-key-0000" error="Key not recognized by the gateway." width={360} />
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-3 uppercase">Disabled</p>
        <TextInput label="Locked Field" defaultValue="read only" disabled width={360} />
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-3 uppercase">Chatroom — attach · mic · send (min 12 / max 24)</p>
        <TextInput
          placeholder="Message the swarm…" width={460} height={48} minFontSize={12} maxFontSize={24}
          leading={<TIcon label="Attach file"><Paperclip size={16} /></TIcon>}
          trailing={<><TIcon label="Dictate"><Mic size={16} /></TIcon><TIcon label="Send"><Send size={16} /></TIcon></>}
          onSend={() => {}}
        />
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-3 uppercase">Extended response — taller field (min 13 / max 20)</p>
        <TextInput label="Mission Log" placeholder="Compose an extended response…" width={460} height={64} minFontSize={13} maxFontSize={20} />
      </div>
    </div>
  )
}

export const demos: Record<string, () => ReactElement> = {
  badges: BadgesDemo,
  buttons: ButtonsDemo,
  spinners: SpinnersDemo,
  textinput: TextInputDemo,
  progress: ProgressDemo,
  alerts: AlertsDemo,
  stats: StatsDemo,
  timeline: TimelineDemo,
  dialogue: DialogueDemo,
  mission: MissionDemo,
  schematic: SchematicDemo,
  botcard: BotCardDemo,
  memory: MemoryDemo,
  params: ParamsDemo,
  audit: AuditDemo,
}
