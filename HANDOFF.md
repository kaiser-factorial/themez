# HANDOFF.md — Themez Repository

**Repo:** `kaiser-factorial/themez` (renamed from `cyber-theme`)
**Live site:** https://kaiser-factorial.github.io/themez/
**Branch:** `main`
**Last commit:** `0c81708` — Fix geometric backgrounds visibility

---

## What This Repo Is

A GitHub Pages site at the repo root (`/`) hosting two pure-HTML/CSS component library showcases:

1. **Primary Theme** (`primary_theme/`) — Bauhaus/CatchFall aesthetic
2. **Cyber Theme** (`cyber_theme/`) — Terminal/brain.vat aesthetic

Both are zero-dependency (no npm, no build step). GH Pages serves static files directly.

---

## Current State — What Works

### Site Structure (all live at kaiser-factorial.github.io/themez/)

```
index.html                          ← Landing page, two theme cards
├── primary_theme/components/SHOWCASE.html   ← Primary theme component showcase
├── cyber_theme/components/SHOWCASE.html      ← Cyber theme component showcase
├── primary_theme/components/primary-theme.css ← All primary theme styles (22KB)
├── primary_theme/components/primary-theme.js  ← Optional interactions (3KB)
├── README.md                         ← Root README with GH Pages link
└── .nojekyll                         ← Tells GH Pages to skip Jekyll
```

### What's Rendering Correctly
- Landing page works ✅
- Cyber theme showcase works ✅ (self-contained, all inline CSS)
- Primary theme showcase partially works ✅ (components render)

### Known Issues / In Progress

1. **Primary theme CSS/JS paths** — Fixed in commit `8e554e5`. The SHOWCASE.html was referencing `components/primary-theme.css` (double-nested) instead of `primary-theme.css`. Fixed to correct relative paths. May need hard refresh to clear browser cache.

2. **Geometric backgrounds** — Static versions exist in `primary-theme.css` as `.bg-mod-stripes`, `.bg-primary-grid`, `.bg-halftone`, `.bg-wave`. Opacity was increased in `0c81708` for visibility.

3. **Animated backgrounds (IN PROGRESS)** — A `primary_theme/components/backgrounds/` folder was started with:
   - `backgrounds.css` — CSS-only animated versions of all 6 level themes
   - `index.html` — Demo page showing each animated background
   
   **Status:** Files exist on disk but NOT yet committed/pushed. The `backgrounds.css` was written via `execute_code` and needs review. The demo page links back to the showcase.

---

## What Needs to Happen Next

### Immediate (finish current work)

1. **Review and commit animated backgrounds**
   - Check `primary_theme/components/backgrounds/backgrounds.css` for correctness
   - Check `primary_theme/components/backgrounds/index.html` for correctness
   - Update `primary_theme/components/SHOWCASE.html` backgrounds section to link to the animated demo
   - Use the new animated background classes instead of (or alongside) the old static ones

2. **Add screenshots to .gitignore**
   - `screenshots/` folder exists locally with 5 `.png` files
   - Not currently tracked by git, but should be explicitly ignored

3. **Copy animated backgrounds into the main `primary-theme.css`**
   - The animated classes (`.bg-mod-stripes`, `.bg-bezier-clock`, `.bg-cantor-field`, `.bg-halftone-rings`, `.bg-wave-marks`, `.bg-primary-grid-animated`) should be in the main CSS file so they work without an extra stylesheet import

4. **Commit and push everything**
   - Backgrounds CSS + HTML
   - Updated `.gitignore`
   - Any SHOWCASE.html updates

### Backlog / Nice-to-Have

- **Background fidelity to game** — The animated backgrounds are CSS approximations of the SKETCH.js canvas animations. The originals use:
  - `frameCount * 0.06` for mod stripe scrolling
  - `noise()` for halftone ring size variation  
  - `sin()`/`cos()` for wave mark positions
  - Cantor set recursion (pure CSS can't do true recursion — use repeating gradients as approximation)
  - Bezier curves (impossible in pure CSS — use concentric circles as visual stand-in)
  - Canvas-rendered shapes (squares, circles, diamonds) scattered on grid
  
  **The SKETCH.js code is in `primary_theme/reference/SKETCH.js`** for reference. A `<canvas>`-based implementation would be more faithful but requires JS.

- **Per-component HTML docs for primary theme** — Only `Alert.html` exists. The cyber theme has individual guide files for each component (e.g., `BADGE_GUIDE.md`, `TIMELINE_GUIDE.md`). The primary theme has `INDEX.md` with code snippets but no full HTML demos per component.

- **Dark mode variant of primary theme** — Currently light-only (white bg, dark text). Could add a `body.theme-primary-dark` with inverted colors.

- **Cyber theme individual HTML demos** — Same as above but for cyber theme components.

---

## File Map

### Root
| File | Purpose |
|------|---------|
| `index.html` | Landing page with two theme cards |
| `README.md` | Root readme with GH Pages link |
| `.nojekyll` | Disables Jekyll processing on GH Pages |
| `.gitignore` | Ignores node_modules, .next, dist, build, logs, .env, .DS_Store |
| `IMPLEMENTATION_INDEX.md` | Root-level orientation guide |

### Primary Theme (`primary_theme/`)
| File | Purpose |
|------|---------|
| `README.md` | Quick start guide |
| `THEME_GUIDE.md` | Complete design reference |
| `COMPONENT_STRATEGY.md` | Decision tree + Bauhaus rules |
| `reference/SKETCH.js` | Original CatchFall game code (source of truth for backgrounds) |
| `reference/design_system.css` | Original CSS variables from the joint-session project |
| `reference/App.tsx` | Reference React implementation |
| `reference/index.css` | Reference CSS from the joint-session project |
| `components/primary-theme.css` | All 16 component styles + 4 static bg patterns (22KB) |
| `components/primary-theme.js` | Interaction scripts (dismiss, collapse, loading) (3KB) |
| `components/SHOWCASE.html` | Live demo of all components (36KB) |
| `components/Alert.html` | Standalone Alert component demo |
| `components/INDEX.md` | Quick reference card |
| `components/backgrounds/backgrounds.css` | 6 animated background styles (NOT YET COMMITTED) |
| `components/backgrounds/index.html` | Animated backgrounds demo page (NOT YET COMMITTED) |

### Cyber Theme (`cyber_theme/`)
| File | Purpose |
|------|---------|
| `README.md` | Theme overview |
| `THEME_GUIDE.md` | Complete design reference |
| `COMPONENT_STRATEGY.md` | Decision tree |
| `IMPLEMENTATION_INDEX.md` | Orientation guide |
| `CCRU_CREDITS.md` | Attribution for CCRU library |
| `AGENTS.md` | AI agent integration guide |
| `SETUP_SKILL.md` | Claude Code skill |
| `AUDIT_COMPONENTS_SUMMARY.md` | Audit log component summary |
| `CUSTOM_COMPONENTS_SUMMARY.md` | Custom component summary |
| `MEMORY_CARD_GUIDE.md` | MemoryCard component guide |
| `components/SHOWCASE.html` | Pure HTML/CSS showcase (40KB, all inline styles) |
| `components/SHOWCASE.tsx` | Original React showcase |
| `components/*.tsx` | 14 React component files |
| `components/*_GUIDE.md` | 14 component guide markdown files |
| `components/EXAMPLE_USAGE.tsx` | React usage examples |
| `components/PARAMETER_PRESETS.ts` | Parameter preset configs |

---

## Design Reference

### Primary Theme Colors
```
Red:    #EB1A26  (235, 26, 38)
Blue:   #0045AD  (0, 69, 173)
Yellow: #FFD600  (255, 214, 0)
Black:  #111111  (17, 17, 17)
White:  #FAFAFA  (250, 250, 250)
```
Font: Courier Prime (monospace)
Style: Sharp corners (0 radius), 3px borders, hard shadows `6px 6px 0px #111111`

### Cyber Theme Colors
```
Green:  #00ff41  (primary)
Red:    #E63946  (accent)
Cyan:   #03A6A1  (MAUK)
Orange: #FF9D23  (ABACI)
BG:     #000800  (deep black)
```
Font: ui-monospace / SFMono-Regular / Menlo / Monaco / Consolas
Style: Dark bg, neon glow, monospace, CRT scanlines

### Level Backgrounds (from SKETCH.js)
| Level | Name | Key Visual |
|-------|------|-----------|
| 1 | Mod Stripes | Animated color stripes + grid lines |
| 2 | Bezier Clock | Concentric circles with chord connections |
| 3 | Cantor Field | Recursive horizontal lines, symmetric |
| 4 | Halftone Rings | Concentric dot grid patterns |
| 5 | Wave Marks | Sinusoidal rows of dots and dashes |
| 6 | Primary Grid | Grid with colored rectangles + shapes |

---

## Commands

```bash
# View status
git status

# Stage all and commit
git add -A && git commit -m "message" && git push

# Check live URLs
curl -sI https://kaiser-factorial.github.io/themez/
curl -sI https://kaiser-factorial.github.io/themez/primary_theme/components/SHOWCASE.html
curl -sI https://kaiser-factorial.github.io/themez/cyber_theme/components/SHOWCASE.html
```

---

## Constraints

- **No npm/build step** — Pure HTML/CSS/JS only
- **gh-pages from root** — All paths relative to `/`
- **No Jekyll** — `.nojekyll` file present
- **Large files** — Keep individual file writes moderate in size
- **Browser caching** — GH Pages deploys within ~1 minute; hard refresh needed after pushes
