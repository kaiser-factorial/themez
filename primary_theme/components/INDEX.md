# Primary Theme Components

Each component is available two ways: as pure **HTML/CSS** (class names below) and as a **React** component in [`PrimaryComponents.tsx`](PrimaryComponents.tsx). Both render the same `primary-theme.css` classes. See the [showcase](SHOWCASE.html) for live HTML/CSS | React tabs.

---

## Quick Reference

### Buttons
```html
<button class="btn">Primary</button>
<button class="btn btn-red">Danger</button>
<button class="btn btn-yellow">Warning</button>
<button class="btn btn-black">Neutral</button>
<button class="btn btn-outline">Outline</button>
```

### Badges
```html
<span class="badge">Default</span>
<span class="badge badge-red">Red</span>
<span class="badge badge-solid-blue">Solid Blue</span>
```

### Alerts
```html
<div class="alert alert-info">
  <div class="alert-header">
    <div style="display:flex;gap:0.75rem;align-items:flex-start;">
      <span class="alert-icon">ℹ</span>
      <div>
        <div class="alert-title">Title</div>
        <div class="alert-message">Message</div>
      </div>
    </div>
    <button class="alert-dismiss">✕</button>
  </div>
</div>
```

### Spinners
```html
<div class="spinner spinner-md">
  <div class="spinner-ring"></div>
  <span class="spinner-label">Loading</span>
</div>
```

### Progress
```html
<div class="progress progress-md">
  <div class="progress-label-row">
    <span class="progress-label">Progress</span>
    <span class="progress-value">75%</span>
  </div>
  <div class="progress-track">
    <div class="progress-fill" style="width:75%;background:var(--p-blue);"></div>
  </div>
</div>
```

### Timeline
```html
<div class="timeline">
  <div class="timeline-line"></div>
  <div class="timeline-event">
    <div class="timeline-dot">1</div>
    <div class="timeline-content">
      <div class="timeline-title">Event Title</div>
      <div class="timeline-text">Event description</div>
      <div class="timeline-time">Timestamp</div>
    </div>
  </div>
</div>
```

### Stats
```html
<div class="stat-card">
  <div class="stat-header">
    <span class="stat-icon">◉</span>
    <span class="stat-label">Metric</span>
  </div>
  <div class="stat-value" style="color:var(--p-blue);">1,247</div>
  <div class="stat-change positive">+12</div>
</div>
```

### Dialogue
```html
<div class="dialogue-message">
  <div class="dialogue-speaker" style="color:var(--p-blue);">SPEAKER</div>
  <div class="dialogue-bubble">
    Message content
    <div class="dialogue-time">14:23:07</div>
  </div>
</div>
```

### Mission
```html
<div class="mission">
  <div class="mission-title">[MISSION]</div>
  <div class="mission-content">Content here</div>
  <div class="mission-footer">
    <span class="mission-version">v1.0</span>
    <button class="mission-action">Action →</button>
  </div>
</div>
```

### Text Input (auto-fit)
```html
<!-- Static look (the React version adds auto-resize) -->
<label class="ti-label">Message</label>
<div class="ti-field">
  <div class="ti-adornment"><button class="ti-icon-btn">📎</button></div>
  <textarea class="ti-input" rows="1" wrap="off" placeholder="Type here…"></textarea>
  <div class="ti-adornment"><button class="ti-icon-btn">➤</button></div>
</div>
```

---

## React Usage

Import from [`PrimaryComponents.tsx`](PrimaryComponents.tsx) (keep `primary-theme.css` loaded):

```tsx
import { Button, Alert, TextInput } from './PrimaryComponents'

<Button variant="blue">Save</Button>
<Alert severity="error" title="Failed" message="Try again." />

// Auto-fit: starts at maxFontSize, shrinks to minFontSize, then wraps to multi-line
<TextInput label="Message" placeholder="Type…" width={460} minFontSize={13} maxFontSize={24} />
```

Exported components: `Button`, `Badge`, `Alert`, `Spinner`, `Progress`, `StatsDisplay`, `Breadcrumb`, `Timeline`, `DialogueMessage`, `ConversationThread`, `MissionStatement`, `TechnicalSchematic`, `MemoryColumn`, `MemoryGrid`, `BotNameCard`, `BotNameCardGrid`, `ParameterPanel`, `AuditLogCard`, `LoadingBar`, `TextInput`.

---

## Full Component List

| # | Component | CSS Classes | Variants |
|---|-----------|------------|----------|
| 1 | Alert | `.alert` | default, compact, inline × 5 severities |
| 2 | Badge | `.badge` | outline, solid × 5 colors |
| 3 | Breadcrumb | `.breadcrumb` | — |
| 4 | Button | `.btn` | red, yellow, black, outline |
| 5 | Spinner | `.spinner` | ring, dots × 3 sizes |
| 6 | Progress | `.progress` | linear × 3 sizes + striped |
| 7 | Stats Display | `.stat-card` | — |
| 8 | Technical Schematic | `.schematic-grid` | 2/3/4 columns |
| 9 | Timeline | `.timeline` | vertical |
| 10 | Dialogue Message | `.dialogue-message` | left/right align |
| 11 | Mission Statement | `.mission` | sm/md/lg |
| 12 | Memory Card | `.memory-card` | left/center/right align |
| 13 | Bot Name Card | `.bot-card` | sm/md/lg |
| 14 | Loading Progress | `.loading-bar` | top/bottom |
| 15 | Parameter Panel | `.param-panel` | collapsible |
| 16 | Audit Log Card | `.audit-card` | collapsible, 6 section types |
| 17 | Text Input | `.ti-field` | auto-fit (shrink→wrap), label/helper/error/disabled, leading/trailing icons |

---

## File Reference

| File | Purpose |
|------|---------|
| `primary-theme.css` | All component styles (single file) |
| `primary-theme.js` | Interactions for the HTML/CSS demos (optional) |
| `PrimaryComponents.tsx` | React counterparts for every component |
| `primary-showcase.js` | Pre-built React bundle loaded by `SHOWCASE.html` |
| `SHOWCASE.html` | Live demo — HTML/CSS \| React tabs |

---

## Import Order

```html
<!-- 1. Font (optional, for Courier Prime) -->
<link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet">

<!-- 2. Theme CSS -->
<link rel="stylesheet" href="primary-theme.css">

<!-- 3. Your overrides (optional) -->
<link rel="stylesheet" href="your-styles.css">

<!-- 4. Theme JS (optional) -->
<script src="primary-theme.js"></script>
```
