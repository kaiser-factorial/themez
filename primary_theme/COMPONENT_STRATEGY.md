# Component Strategy: Primary Theme

A decision tree for which components to use when building projects with the Bauhaus/primary theme.

---

## Design Philosophy

The primary theme follows Bauhaus principles:
- **Form follows function** — Every element has a purpose
- **Primary colors** — Red, Blue, Yellow, Black only
- **Geometric purity** — Sharp corners, thick borders, no decoration
- **Monospace typography** — Courier Prime throughout
- **Hard shadows** — Offset drop shadows (no blur)

---

## Decision Tree

```
Need a UI element?
├─ Button-like element?
│  ├─ Primary action → <button class="btn"> (blue)
│  ├─ Danger/destructive → <button class="btn btn-red">
│  ├─ Warning/caution → <button class="btn btn-yellow">
│  ├─ Neutral/structural → <button class="btn btn-black">
│  └─ Subtle/ghost → <button class="btn btn-outline">
│
├─ Label/tag?
│  ├─ Status tag → <span class="badge badge-solid-*">
│  ├─ Category label → <span class="badge badge-*">
│  └─ Removable tag → <span class="badge"> with ✕
│
├─ Notification?
│  ├─ Full alert → <div class="alert alert-default alert-*">
│  ├─ Inline notification → <div class="alert alert-compact">
│  └─ Minimal hint → <div class="alert alert-inline">
│
├─ Loading state?
│  ├─ Spinner → <div class="spinner spinner-ring">
│  ├─ Progress bar → <div class="progress">
│  └─ Page loading → <div class="loading-bar">
│
├─ Data display?
│  ├─ Metric/KPI card → <div class="stat-card">
│  ├─ System diagram → <div class="schematic-grid">
│  └─ Event timeline → <div class="timeline">
│
├─ Navigation?
│  ├─ Breadcrumb trail → <nav class="breadcrumb">
│  └─ Tab bar → [data-tab-target] pattern
│
├─ Conversation?
│  ├─ Chat message → <div class="dialogue-message">
│  └─ Speaker card → <div class="bot-card">
│
├─ Configuration?
│  ├─ Parameter panel → <div class="param-panel">
│  └─ Audit log → <div class="audit-card">
│
└─ Content display?
   ├─ Mission/vision → <div class="mission">
   └─ Memory concept → <div class="memory-card">
```

---

## Color Strategy

### By Purpose
| Purpose | Color | Class |
|---------|-------|-------|
| Primary action | Blue #0045AD | `.btn`, `.badge-blue` |
| Secondary/danger | Red #EB1A26 | `.btn-red`, `.badge-red` |
| Attention/success | Yellow #FFD600 | `.btn-yellow`, `.badge-yellow` |
| Structural/neutral | Black #111111 | `.btn-black`, `border-color` |
| Background | White #FAFAFA | body default |

### Alert Severities
| Severity | Color |
|----------|-------|
| Info | Blue #0045AD |
| Success | Green #1a7a1a |
| Warning | Yellow #FFD600 (darkened to #b89600 for readability) |
| Error | Red #EB1A26 |
| System | Black #111111 |

---

## Spacing Scale

| Name | Value | Usage |
|------|-------|-------|
| xs | 0.25rem (4px) | Tight gaps, dot spacing |
| sm | 0.5rem (8px) | Icon gaps, compact padding |
| md | 1rem (16px) | Standard padding |
| lg | 1.5rem (24px) | Section padding |
| xl | 2rem (32px) | Page margins |
| 2xl | 2.5rem (40px) | Section separators |

---

## Typography

All text uses `Courier Prime` (monospace). No sans-serif fallback unless specified.

| Element | Size | Weight | Transform |
|---------|------|--------|-----------|
| h1 | 2rem | bold | uppercase, -0.02em tracking |
| h2 | 1.3rem | bold | uppercase, 0.05em tracking |
| h3 | 0.95rem | bold | uppercase, 0.1em tracking |
| body | 0.9rem | normal | none |
| code | 0.85rem | normal | none |
| label/small | 0.65–0.75rem | bold | uppercase, 0.1em tracking |

---

## Component Checklist

For each new UI element:
- [ ] Use primary colors only (R/B/Y/K/W)
- [ ] Sharp corners (border-radius: 0)
- [ ] Thick 3px borders on containers
- [ ] Hard offset shadow (no blur)
- [ ] Courier Prime monospace
- [ ] Uppercase + letter-spacing on labels
- [ ] No gradients, no rounded corners, no soft shadows
