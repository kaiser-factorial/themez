# Primary Theme — Bauhaus / CatchFall Component Library

A complete, portable design system for the Bauhaus-inspired primary color aesthetic. Built from the geometric patterns and primary colors of the CatchFall game (SKETCH.js). Pure HTML/CSS/JS — no frameworks required.

---

## Quick Color Reference

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Red** | `#EB1A26` | 235, 26, 38 | Secondary accent, errors, warnings |
| **Blue** | `#0045AD` | 0, 69, 173 | Primary actions, links, info |
| **Yellow** | `#FFD600` | 255, 214, 0 | Accent, highlights, success |
| **Black** | `#111111` | 17, 17, 17 | Text, borders, structural |
| **White** | `#FAFAFA` | 250, 250, 250 | Background |

---

## Bauhaus Design Principles

1. **Primary Colors Only** — Red, Blue, Yellow (plus Black/White)
2. **Geometric Shapes** — Circles, rectangles, grids — inspired by level backgrounds
3. **Sharp Corners** — Zero border-radius everywhere
4. **Hard Shadows** — Offset `6px 6px 0px #111111` (no blur)
5. **Thick Borders** — 3px solid black
6. **Monospace Typography** — Courier Prime throughout
7. **Functional Minimalism** — No decoration without purpose

---

## Level Themes (from SKETCH.js)

The CatchFall game has 6 rotating background patterns — these inspire the theme's visual motifs:

| Level | Pattern | Motif |
|-------|---------|-------|
| 1 | Mod Stripes | Animated color stripes with grid lines |
| 2 | Bezier Clock | Concentric circles with chord connections |
| 3 | Cantor Field | Recursive fractal horizontal lines |
| 4 | Halftone Rings | Concentric dot patterns in grids |
| 5 | Wave Marks | Sinusoidal dots and dashes |
| 6 | Primary Grid | Grid with colored rectangles + geometric shapes |

---

## Components

### Core Components
- [Alert](components/Alert.html) — System notifications (5 severities × 3 variants)
- [Badge](components/Badge.html) — Tags and labels (4 variants)
- [Breadcrumb](components/Breadcrumb.html) — Navigation path display
- [Button](components/Button.html) — Action buttons (5 variants)
- [Spinner](components/Spinner.html) — Loading indicators (3 variants)
- [Progress Indicator](components/ProgressIndicator.html) — Progress bars (linear/circular/gauge)

### Data Display
- [Stats Display](components/StatsDisplay.html) — Metric cards with change indicators
- [Technical Schematic](components/TechnicalSchematic.html) — System architecture grid
- [Timeline](components/Timeline.html) — Chronological event display

### Conversation & Content
- [Dialogue Message](components/DialogueMessage.html) — Chat/conversation bubbles
- [Mission Statement](components/MissionStatement.html) — Feature/vision cards
- [Memory Card](components/MemoryCard.html) — Concept archive cards

### Configuration
- [Bot Name Card](components/BotNameCard.html) — Agent/bot profile display
- [Bot Parameter Panel](components/BotParameterPanel.html) — Hyperparameter configuration UI
- [Audit Log Card](components/AuditLogCard.html) — Collapsible event/log entries
- [Loading Progress](components/LoadingProgress.html) — Page loading bar

---

## Quick Start

### 1. Include the CSS

```html
<link rel="stylesheet" href="components/primary-theme.css">
```

### 2. Add the body class

```html
<body class="theme-primary">
```

### 3. Use components

```html
<button class="btn">Primary Action</button>
<button class="btn btn-red">Danger</button>
<button class="btn btn-yellow">Warning</button>
```

### 4. Optional: Include JS for interactions

```html
<script src="components/primary-theme.js"></script>
```

---

## File Organization

```
primary_theme/
├── README.md                    ← You are here
├── THEME_GUIDE.md               ← Complete design reference
├── COMPONENT_STRATEGY.md        ← Decision tree & examples
├── IMPLEMENTATION_INDEX.md      ← Orientation guide
├── components/
│   ├── primary-theme.css        ← All component styles (single file)
│   ├── primary-theme.js         ← Interaction scripts
│   ├── Alert.html               ← Component demo + docs
│   ├── Badge.html
│   ├── Breadcrumb.html
│   ├── Button.html
│   ├── Spinner.html
│   ├── ProgressIndicator.html
│   ├── StatsDisplay.html
│   ├── TechnicalSchematic.html
│   ├── Timeline.html
│   ├── DialogueMessage.html
│   ├── MissionStatement.html
│   ├── MemoryCard.html
│   ├── BotNameCard.html
│   ├── BotParameterPanel.html
│   ├── AuditLogCard.html
│   ├── LoadingProgress.html
│   ├── INDEX.md
│   └── EXAMPLE_USAGE.html       ← All components in one page
```

---

## Customization

All colors are CSS custom properties. Override in your own stylesheet:

```css
:root {
  --p-red: #YourRed;
  --p-blue: #YourBlue;
  --p-yellow: #YourYellow;
  --p-shadow: 8px 8px 0px #000000;  /* Bigger shadow */
  --p-border-w: 4px;                  /* Thicker borders */
}
```

---

## FAQ

**Q: Can I use this with React/Vue/Angular?**
A: Yes. The CSS is framework-agnostic. Include `primary-theme.css` and use the class names.

**Q: Is there a dark mode?**
A: The primary theme is light by default (white bg, dark text). For dark mode, override `--p-bg`, `--p-surface`, `--p-black` to swap.

**Q: Can I use only specific components?**
A: The CSS file contains everything, but you can extract individual component styles if needed.

**Q: What about the geometric backgrounds?**
A: Four CSS classes are provided: `.bg-mod-stripes`, `.bg-primary-grid`, `.bg-halftone`, `.bg-wave`.

---

**Inspired by:** CatchFall (SKETCH.js) — Bauhaus geometry, primary colors, functional design
**Font:** Courier Prime (Google Fonts)
**License:** MIT — Original theme, original work
