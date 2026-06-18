# Mod Theme — Neutral Component Library

A deliberately neutral, "empty notebook" component canvas. Every element is a design variable waiting to be shaped.

## Design Philosophy

- **No preset aesthetic** — Times New Roman, cream paper, zero decoration
- **Everything is editable** — each component section has scoped CSS variables
- **Live manipulation** — the built-in panel lets you transform the page in real time
- **Export-ready** — generate a custom CSS file from your configuration

## Components (14 sections)

| Section | Description |
|---------|-------------|
| Colors | 7 editable swatches (bg, text, 3 accents, surface, border) |
| Buttons | Radius, border, padding, font, colors |
| Badges | Radius, border, font, colors |
| Alerts | Radius, border, padding, title/message sizes |
| Spinners | Color, size, ring width, speed |
| Progress | Track height, fill color, radius |
| Stats | Border, padding, label/value sizes |
| Timeline | Dot size, line color, card border/padding |
| Dialogue | Bubble radius/border/padding, speaker width |
| Mission | Border, padding, title size, radius |
| Schematic | Grid gap, item padding, border, title/location sizes |
| Memory | Column border/padding, dot size, header size |
| Bot Card | Border, padding, radius, glow, title size |
| Audit Log | Border, dot size, title size, tag border |
| Text Input | Border, radius, font size, padding |

## Usage

Open `components/SHOWCASE.html` in any browser. Click the `⚙ THEME` button on the right edge to open the manipulation panel.

## For AI Agents (Gemini / Claude)

The `theme_manip` skill allows programmatic control of all design tokens. See skill documentation for the token API.

## File Structure

```
mod_theme/
├── components/
│   ├── mod-theme.css    ← design tokens + component styles
│   └── SHOWCASE.html     ← live-editable showcase page
└── README.md
```
