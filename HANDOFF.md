# HANDOFF.md — Themez Repository

**Repository:** `kaiser-factorial/themez`  
**Live Site:** https://kaiser-factorial.github.io/themez/  
**Default Branch:** `main`  
**Last Pushed Commit:** `e993e0e` — feat(cyber): showcase refinements (buttons React, alerts, spinners, progress, stats, timeline)

---

## What This Repository Is

A zero-dependency design system library and showcase hosted on GitHub Pages, presenting two distinct aesthetics:
1. **Primary Theme** (`primary_theme/`) — Bauhaus-inspired CatchFall game aesthetic (monospaced Courier Prime, primary color palette, hard borders, zero border-radius).
2. **Cyber Theme** (`cyber_theme/`) — Dark terminal "brain.vat" CCRU aesthetic (monospace, CRT scanlines, neon glows, custom accenting).

Both themes support a dual-showcase implementation:
- **Pure HTML/CSS components** (for lightweight, zero-build usage).
- **React components** (fully interactive, prop-driven, and bundled via Vite).

---

## File Map & Directory Structure

```
.github/workflows/
└── deploy.yml                       # CI/CD deployment pipeline to GitHub Pages
cyber_theme/
├── assets/
│   └── react-loader.js              # Loader to bootstrap React bundle in showcase
├── components/                      # Cyber React components
│   ├── Alert.tsx
│   ├── Button.tsx
│   ├── ProgressIndicator.tsx
│   ├── StatsDisplay.tsx
│   ├── TextInput.tsx                # Auto-fit input component
│   ├── Timeline.tsx
│   ├── SHOWCASE.html                # Interactive cyber showcase containing HTML/React comparisons
│   └── cyber-showcase.js            # Compiled bundle checked into git to avoid negative CDN cache hits
├── react-demo/                      # React-Vite project containing bundle tooling
│   ├── package.json
│   ├── vite.showcase.config.ts      # Vite config for Cyber theme bundle
│   ├── vite.primary.config.ts       # Vite config for Primary theme bundle
│   └── src/
│       ├── index.css
│       └── showcase/
│           ├── registry.tsx         # Cyber React registry mapping
│           └── primary-registry.tsx # Primary React registry mapping
└── [documentation files]            # CCRU credits, agents guidelines, audit summary guides, etc.
primary_theme/
├── components/
│   ├── Alert.html                   # HTML-only alerts reference
│   ├── INDEX.md                     # Component reference card
│   ├── PrimaryComponents.tsx        # React implementations of all primary components
│   ├── SHOWCASE.html                # Interactive primary showcase containing HTML/React comparisons
│   ├── primary-theme.css            # Stylesheets with 16 core components + bg patterns (22KB)
│   ├── primary-theme.js             # Optional HTML interactions (3KB)
│   └── primary-showcase.js          # Compiled React bundle for Primary components
├── reference/                       # Bauhaus rules, Sketch.js references, and design system variables
└── [documentation files]            # Theme guide, design rules, component strategy, etc.
dist/                                # Output directory for site build (ignored locally)
index.html                           # Multi-theme entrance page (index dashboard)
```

---

## Key Features & Recent Work

### 1. Dual HTML/CSS & React Showcase (Tabs)
Each showcase has been updated with side-by-side **HTML/CSS | React** comparative tabs. 
- In the **Primary Theme**, React components are defined in `PrimaryComponents.tsx` and map directly to `primary-theme.css` class names.
- In the **Cyber Theme**, React components are located inside `cyber_theme/components/` and are built into `cyber-showcase.js` using Vite.

### 2. Auto-Fit Text Input Component
Added to **both** themes (HTML/CSS & React):
- **Responsive Font Scaling**: Text starts at `maxFontSize` and shrinks down to `minFontSize` dynamically as character counts increase, preventing clipping.
- **Dynamic Multi-Line Wrap & Auto-Growth**: Once the minimum font threshold is reached, text wraps to multi-line, auto-growing container heights.
- **Rich States**: Supports custom widths/heights, labels, helper text, error messages, and disabled configurations.
- **Icon Slots**: Built-in slots for leading/trailing interactive elements (e.g., upload, mic, send buttons for chat rooms).

### 3. Cyber Showcase Refinements (Commit `e993e0e`)
- **Buttons**: Introduced React Button components alongside the standard HTML elements.
- **Alerts**: Alerts are color-coded relative to severity (red for error, orange for warning, green for success, blue for info). Added underlined alert actions.
- **Spinners**: Configured using `--spin-color` matching state status (Green for loading/dots, Red for error/pulse, Blue for syncing/ring).
- **Progress**: Added circular and gauge components that feature mounting count-up animations.
- **Stats Cards**: Color-coded borders and backgrounds dynamically updating based on value; negative deltas show red text.
- **Timeline**: Aligned title and content colors to event accents.

### 4. Build System & CI/CD Pipeline
- **Vite Bundler**: The Vite projects in `cyber_theme/react-demo` contain configuration configurations for both Cyber (`vite.showcase.config.ts`) and Primary (`vite.primary.config.ts`) packages.
- **Bundle Cache Mitigation**: Due to GitHub Pages CDN caching issues (which negative-cached missing `cyber-demo.js` paths during early deployment phases), React showcase bundles are built to `cyber-showcase.js` and `primary-showcase.js` and tracked in `main`.
- **GitHub Actions**: Configured via `.github/workflows/deploy.yml` using Node 24 and NPM to run `npm run build:site` and publish the output `dist` to the `gh-pages` branch.

---

## Active & Next Steps

### 1. Address Pending Local Changes
There are currently uncommitted edits in the workspace:
- **`cyber_theme/components/SHOWCASE.html`**: Additional refinements to alert action hover states.
- **`cyber_theme/components/Timeline.tsx`**: Styling improvements to ensure timeline title and text body inherit the corresponding status colors (MAUK cyan, ABACI orange, Conflict red).

*Recommendation: Review these changes and commit them to keep the local workspace clean.*

### 2. Primary Theme Animated Backgrounds
- The `primary_theme/components/backgrounds/` folder contains approximations of the original CatchFall canvas sketches. 
- These styles and their demo page (`index.html`) need final validation, staging, and integration into the core `primary-theme.css`.

### 3. Build Setup inside `react-demo`
To modify or rebuild the React bundles locally:
1. Navigate to `/Users/corinakaiser/Projects/Themes/cyber_theme/react-demo`
2. Run `npm install`
3. Make changes, and execute `npm run build:site` to regenerate `/dist` contents and rebuild the checked-in bundle assets.
