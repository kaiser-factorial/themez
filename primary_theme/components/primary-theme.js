/* ============================================
   PRIMARY THEME — Component Interaction Scripts
   ============================================ */

// ===== ALERT DISMISS =====
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('alert-dismiss')) {
    const alert = e.target.closest('.alert');
    if (alert) {
      alert.style.transition = 'opacity 0.3s, transform 0.3s';
      alert.style.opacity = '0';
      alert.style.transform = 'translateX(20px)';
      setTimeout(() => alert.remove(), 300);
    }
  }
});

// ===== COLLAPSIBLE PANELS (Audit Log, Parameter Panel) =====
document.addEventListener('click', function(e) {
  const header = e.target.closest('.audit-header, .param-header');
  if (header) {
    const panel = header.parentElement;
    const sections = panel.querySelector('.audit-sections, .param-sections');
    if (sections) {
      sections.style.display = sections.style.display === 'none' ? '' : 'none';
    }
  }
});

// ===== LOADING BAR SIMULATION =====
function simulateLoadingBar() {
  const bar = document.getElementById('demo-loading-bar');
  if (!bar) return;
  const fill = bar.querySelector('.loading-bar-fill');
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => { fill.style.width = '0%'; bar.style.opacity = '0'; }, 400);
    }
    fill.style.width = progress + '%';
  }, 200);
}

// Attach to any element with data-loading-trigger
document.addEventListener('click', function(e) {
  if (e.target.hasAttribute('data-loading-trigger')) {
    const bar = document.getElementById('demo-loading-bar');
    if (bar) {
      bar.style.opacity = '1';
      simulateLoadingBar();
    }
  }
});

// ===== TABBED SECTIONS =====
document.addEventListener('click', function(e) {
  const tab = e.target.closest('[data-tab-target]');
  if (!tab) return;
  const targetId = tab.getAttribute('data-tab-target');
  const container = tab.parentElement.parentElement;
  
  // Update tab styles
  container.querySelectorAll('[data-tab-target]').forEach(t => {
    t.style.borderBottom = '3px solid transparent';
    t.style.color = '#888';
  });
  tab.style.borderBottom = '3px solid var(--p-black)';
  tab.style.color = 'var(--p-black)';
  
  // Show/hide content
  container.querySelectorAll('[data-tab-content]').forEach(c => {
    c.style.display = c.getAttribute('data-tab-content') === targetId ? '' : 'none';
  });
});

// ===== THEME SWITCHER =====
function switchTheme(themeName) {
  document.body.className = themeName === 'primary' ? 'theme-primary' : 
                            themeName === 'cyber' ? 'theme-cyber' : '';
}
