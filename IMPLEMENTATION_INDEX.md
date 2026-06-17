# Primary Theme Implementation Index

Welcome! You now have two complete, reusable design systems. This index explains how everything fits together.

---

## What You Have

### Themes

| Theme | Inspiration | Location | Showcase |
|-------|------------|----------|----------|
| **Primary** | CatchFall game (SKETCH.js), Bauhaus | `primary_theme/` | [SHOWCASE](primary_theme/components/SHOWCASE.html) |
| **Cyber** | brain.vat, CCRU, terminal aesthetic | `cyber_theme/` | [SHOWCASE](cyber_theme/components/SHOWCASE.html) |

### Primary Theme Files

#### `primary_theme/README.md`
Quick start guide, color reference, design principles, and FAQ.

**Use this when:** You're new to the primary theme and want context.

#### `primary_theme/THEME_GUIDE.md`
Complete design reference with all CSS variables, patterns, and customization.

**Use this when:** You need to verify a color, understand the geometric patterns, or customize.

#### `primary_theme/COMPONENT_STRATEGY.md`
Decision tree for component selection and Bauhaus design rules.

**Use this when:** Building new features, choosing which component to use.

#### `primary_theme/components/primary-theme.css`
All component styles in a single CSS file.

**Use this when:** You want to include the theme in your project.

```html
<link rel="stylesheet" href="primary_theme/components/primary-theme.css">
```

#### `primary_theme/components/primary-theme.js`
Optional interaction scripts (dismiss, collapse, loading simulation).

**Use this when:** You want interactive behavior without writing JS.

#### `primary_theme/components/SHOWCASE.html`
Live demo of all 14 components.

**Use this when:** You want to see what's available.

---

## Component Reference

### Core Components
| Component | Description | CSS Classes |
|-----------|------------|-------------|
| **Alert** | System notifications | `.alert`, `.alert-default`, `.alert-compact`, `.alert-inline` |
| **Badge** | Tags and labels | `.badge`, `.badge-red`, `.badge-blue`, `.badge-yellow`, `.badge-solid-*` |
| **Breadcrumb** | Navigation path | `.breadcrumb` |
| **Button** | Action buttons | `.btn`, `.btn-red`, `.btn-yellow`, `.btn-black`, `.btn-outline` |
| **Spinner** | Loading indicators | `.spinner`, `.spinner-ring`, `.spinner-dots` |
| **Progress** | Progress bars | `.progress`, `.progress-track`, `.progress-fill` |

### Data Display
| Component | Description | CSS Classes |
|-----------|------------|-------------|
| **Stats Display** | Metric cards | `.stat-card`, `.stat-value`, `.stat-change` |
| **Technical Schematic** | System architecture | `.schematic-grid`, `.schematic-item` |
| **Timeline** | Event timeline | `.timeline`, `.timeline-event`, `.timeline-dot` |

### Conversation & Content
| Component | Description | CSS Classes |
|-----------|------------|-------------|
| **Dialogue Message** | Chat bubbles | `.dialogue-message`, `.dialogue-bubble` |
| **Mission Statement** | Vision cards | `.mission`, `.mission-title`, `.mission-content` |
| **Memory Card** | Concept archives | `.memory-card`, `.memory-column` |

### Configuration
| Component | Description | CSS Classes |
|-----------|------------|-------------|
| **Bot Name Card** | Agent profiles | `.bot-card`, `.bot-name`, `.bot-desc` |
| **Parameter Panel** | Config interface | `.param-panel`, `.param-header`, `.param-field` |
| **Audit Log Card** | Event entries | `.audit-card`, `.audit-header`, `.audit-sections` |
| **Loading Progress** | Page loading bar | `.loading-bar`, `.loading-bar-fill` |

---

## Geometric Background Classes

Inspired by the 6 CatchFall level themes:

| Class | Pattern | Level |
|-------|---------|-------|
| `.bg-mod-stripes` | Color stripes + grid lines | Level 1 |
| `.bg-primary-grid` | Colored grid rectangles | Level 6 |
| `.bg-halftone` | Concentric dot grid | Level 4 |
| `.bg-wave` | Sinusoidal marks | Level 5 |

---

## Quick Start

### In a new HTML file:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="primary_theme/components/primary-theme.css">
</head>
<body class="theme-primary">
  <div class="container">
    <h1>My Bauhaus App</h1>
    <button class="btn">Primary Action</button>
    <button class="btn btn-red">Danger</button>
    <span class="badge badge-solid-blue">Active</span>
  </div>
  <script src="primary_theme/components/primary-theme.js"></script>
</body>
</html>
```

---

## Customization

All colors are CSS custom properties:

```css
:root {
  --p-red: #YourRed;
  --p-blue: #YourBlue;
  --p-yellow: #YourYellow;
  --p-shadow: 8px 8px 0px #000;  /* Bigger shadow */
  --p-border-w: 4px;              /* Thicker borders */
}
```

---

## Learning Path

**5 min:** Read `primary_theme/README.md` color palette
**10 min:** Open `primary_theme/components/SHOWCASE.html` in your browser
**10 min:** Read `primary_theme/COMPONENT_STRATEGY.md` decision tree
**15 min:** Build a simple page using `.btn`, `.badge`, `.alert`
**Ongoing:** Reference component guides as questions come up

---

## Tips for Success

1. **Primary colors only** — Never use colors outside the R/B/Y/K/W palette
2. **Sharp corners always** — border-radius: 0 everywhere
3. **Hard shadows only** — No blur, only offset
4. **Monospace throughout** — Courier Prime for all text
5. **Uppercase labels** — With letter-spacing for tags and headings
6. **3px borders** — Standard border width for containers
7. **Press-down buttons** — Shadow disappears on active state

---

**Inspired by:** CatchFall (SKETCH.js) · Bauhaus design · Primary colors
**Font:** Courier Prime (Google Fonts)
**License:** MIT
