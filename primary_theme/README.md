# Primary Theme — Bauhaus / CatchFall Component Library

A complete, portable design system for the Bauhaus-inspired primary color aesthetic. Built from the geometric patterns and primary colors of the CatchFall game (SKETCH.js).

Every component ships in **two forms**:

- **HTML / CSS** — pure markup + `primary-theme.css`, no framework required.
- **React** — prop-driven components in [`components/PrimaryComponents.tsx`](components/PrimaryComponents.tsx) that render the same `primary-theme.css` classes, so the two are visually identical.

The [showcase](components/SHOWCASE.html) presents both side by side: every component has an **HTML / CSS | React** tab toggle.

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

Each links to its live demo in the showcase (use the **HTML / CSS | React** tabs there). The React export name is the symbol you import from `PrimaryComponents.tsx`.

### Forms & Actions
- [Button](components/SHOWCASE.html#buttons) — Action buttons (8 variants) · React: `Button`
- [Badge](components/SHOWCASE.html#badges) — Tags and labels (outline + solid × 5 colors) · React: `Badge`
- [Text Input](components/SHOWCASE.html#textinput) — **Auto-fit** field: text starts at max size, shrinks to min as the line fills, then wraps to multi-line. Variants (label/helper/error/disabled) + leading/trailing icon slots · React: `TextInput`
- [Breadcrumb](components/SHOWCASE.html#breadcrumb) — Navigation path display · React: `Breadcrumb`

### Feedback & Status
- [Alert](components/SHOWCASE.html#alerts) — System notifications (5 severities × default/compact/inline) · React: `Alert`
- [Spinner](components/SHOWCASE.html#spinners) — Loading indicators (ring/dots × 3 sizes) · React: `Spinner`
- [Progress](components/SHOWCASE.html#progress) — Linear bars (3 sizes + striped) · React: `Progress`
- [Loading Progress](components/SHOWCASE.html#loading) — Page-load bar · React: `LoadingBar`

### Data Display
- [Stats Display](components/SHOWCASE.html#stats) — Metric cards with change indicators · React: `StatsDisplay`
- [Technical Schematic](components/SHOWCASE.html#schematic) — System architecture grid · React: `TechnicalSchematic`
- [Timeline](components/SHOWCASE.html#timeline) — Chronological event display · React: `Timeline`

### Conversation & Content
- [Dialogue Message](components/SHOWCASE.html#dialogue) — Chat/conversation bubbles · React: `DialogueMessage`, `ConversationThread`
- [Mission Statement](components/SHOWCASE.html#mission) — Feature/vision cards · React: `MissionStatement`
- [Memory Card](components/SHOWCASE.html#memory) — Concept archive columns · React: `MemoryColumn`, `MemoryGrid`

### Configuration
- [Bot Name Card](components/SHOWCASE.html#botcard) — Agent/bot profile display · React: `BotNameCard`, `BotNameCardGrid`
- [Parameter Panel](components/SHOWCASE.html#params) — Configuration UI · React: `ParameterPanel`
- [Audit Log Card](components/SHOWCASE.html#audit) — Collapsible event/log entries · React: `AuditLogCard`

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

## Using the React Components

The React components live in [`components/PrimaryComponents.tsx`](components/PrimaryComponents.tsx). They render the same `primary-theme.css` classes as the HTML versions, so **`primary-theme.css` must be loaded** on the page (the components ship no styles of their own).

```tsx
import { Button, Badge, Alert, TextInput } from './PrimaryComponents'

function Example() {
  return (
    <>
      <Button variant="blue">Primary Action</Button>
      <Badge solid color="red">Error</Badge>
      <Alert severity="success" title="Saved" message="All changes applied." />

      {/* Auto-fit text input — shrinks to fit, then wraps */}
      <TextInput
        label="Message"
        placeholder="Type here…"
        width={460}
        height={48}
        minFontSize={13}
        maxFontSize={24}
      />
    </>
  )
}
```

### Auto-fit `TextInput`

The text starts at `maxFontSize` and shrinks toward `minFontSize` as the line fills; once it hits the minimum and still overflows, the field switches to multi-line (wraps and auto-grows its height). Ideal for chat messages or extended responses.

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `width` | `number \| string` | container | Field width (number = px) |
| `height` | `number` | `48` | Initial single-line height (px) |
| `minFontSize` | `number` | `13` | Smallest the text shrinks to (px) |
| `maxFontSize` | `number` | `24` | Starting / largest text size (px) |
| `label` / `helperText` | `string` | — | Optional label above / hint below |
| `error` | `boolean \| string` | — | Error styling; string is shown as the message |
| `disabled` | `boolean` | — | — |
| `leading` / `trailing` | `ReactNode` | — | Icon/button slots (e.g. file-upload left; mic + send right) |
| `onSend` | `(value) => void` | — | Fired on Enter (Shift+Enter inserts a newline) |

> **Build note:** the showcase loads a pre-built bundle, `components/primary-showcase.js` (global `PrimaryDemo`). It's produced from these components by the Vite build in `cyber_theme/react-demo` (`npm run build:primary`). See the repo's build/deploy notes for details.

---

## File Organization

```
primary_theme/
├── README.md                    ← You are here
├── THEME_GUIDE.md               ← Complete design reference
├── COMPONENT_STRATEGY.md        ← Decision tree & examples
├── components/
│   ├── primary-theme.css        ← All component styles (single file)
│   ├── primary-theme.js         ← Interaction scripts (HTML/CSS demos)
│   ├── PrimaryComponents.tsx    ← React counterparts for every component
│   ├── primary-showcase.js      ← Pre-built React bundle (loaded by SHOWCASE)
│   ├── SHOWCASE.html            ← Live demo — HTML/CSS | React tabs
│   ├── Alert.html               ← Standalone Alert demo
│   ├── INDEX.md                 ← Quick class/prop reference
│   └── backgrounds/             ← Animated geometric background demos
```

> All component demos live in `SHOWCASE.html` (one section each). The React source is `PrimaryComponents.tsx`; `primary-showcase.js` is its compiled bundle.

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
A: Yes. For **React**, import the ready-made prop-driven components from [`components/PrimaryComponents.tsx`](components/PrimaryComponents.tsx) (just keep `primary-theme.css` loaded). For other frameworks, the CSS is framework-agnostic — use the class names directly.

**Q: How do the HTML/CSS and React versions stay in sync?**
A: The React components render the exact same `primary-theme.css` class names, so they share one source of truth for styling. The showcase shows both via the HTML / CSS | React tabs.

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
