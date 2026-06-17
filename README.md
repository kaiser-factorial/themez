# 🌐 Cyber Theme System

A complete, portable design system for the dark cyberpunk/terminal aesthetic used in brain.vat. Apply this theme to any Next.js project for instant styling consistency.

---

## 🙏 Credits & Dependencies

### **CCRU Component Library** ⭐
A huge thanks to [@lumpenspace](https://github.com/lumpenspace) for the incredible **[ccru](https://github.com/lumpenspace/ccru)** component library! 

This entire design system is built on CCRU's pre-built, production-ready cyberpunk-styled components. Rather than reinventing the wheel, we leverage CCRU as a foundation and extend it with custom components for specialized needs.

**Key CCRU Components Used:**
- **CyberButton** — Action buttons with neon effects
- **CyberCheckbox** — Toggles and checkboxes
- **CyberContainer** — Layout containers
- **CyberButtonGroup** — Button navigation
- **CyberGridGroup** & **CyberStackGroup** — Layout helpers
- **NeonDivider** — Glowing separators
- **GlitchText** — Glitch animations
- **StatusDot** — Status indicators

**Learn More:**
- **Full CCRU credits & integration guide:** → See **[CCRU_CREDITS.md](./CCRU_CREDITS.md)**
- **GitHub:** https://github.com/lumpenspace/ccru
- **Component showcase:** https://qliphoth.systems/components

**Install in your project:**
```bash
npm install ccru@github:lumpenspace/ccru
```

### **Other Dependencies**
- [shadcn/ui](https://ui.shadcn.com/) — Base UI component library
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Lucide React](https://lucide.dev/) — Icon library
- [next-themes](https://github.com/pacocoursey/next-themes) — Dark mode support

---

## 📚 Documentation

### **[THEME_GUIDE.md](./THEME_GUIDE.md)** — Complete Design Reference
- Color palette (hex and oklch values)
- CSS variables ready to copy-paste
- All animations and effects with code
- Tailwind configuration
- Component overview (ccru, shadcn/ui, custom)
- Quick implementation checklist
- Troubleshooting guide

**Use this when:** Setting up a new project, verifying a color code, understanding the animation system, creating custom components.

---

### **[COMPONENT_STRATEGY.md](./COMPONENT_STRATEGY.md)** — Component Decision Tree
- Decision flowchart: "What component should I use?"
- Detailed reference for each ccru component
- When to use shadcn/ui vs ccru vs custom
- Real-world examples (header, settings, modals)
- Migration guide for converting custom code
- Component checklist

**Use this when:** Building a new feature, choosing which component to use, reviewing component code, creating custom components.

---

### **Custom Component Guides**

#### **[BOT_PARAMETER_PANEL_GUIDE.md](./components/BOT_PARAMETER_PANEL_GUIDE.md)** — Parameter Configuration Component
- Complete props reference and interface definitions
- All parameter types with examples (range, text, number, textarea)
- Parameter grouping and organization
- Brain.vat and custom color schemes
- Real-world examples (LLM tuner, admin panel, game server)
- Common patterns and troubleshooting

**Use this when:** Building admin panels, configuration UIs, or hyperparameter control interfaces.

---

#### **[AUDIT_LOG_CARD_GUIDE.md](./components/AUDIT_LOG_CARD_GUIDE.md)** — Audit Log Display Component
- Complete props and section type reference
- All 6 section types with examples (text, code, grid, tags, stats, custom)
- Status indicators, badges, and timestamps
- Brain.vat audit log implementation
- Real-world use cases (API logs, error logs, admin actions)
- Collapsible sections and custom rendering

**Use this when:** Building audit trails, activity logs, or event displays.

---

#### **[MEMORY_CARD_GUIDE.md](./MEMORY_CARD_GUIDE.md)** — Memory Concept Display Components
- MemoryCard and MemoryColumn component reference
- All alignment, animation, and styling options
- Tooltip and source attribution system
- Three-column archive layout patterns
- Custom color variations
- Interactive hover state management

**Use this when:** Building memory archives, concept displays, or columnar knowledge bases.

---

#### **[BOT_NAME_CARD_GUIDE.md](./components/BOT_NAME_CARD_GUIDE.md)** — Bot Profile Display
- BotNameCard and BotNameCardGrid components
- Customizable colors, sizes, and glow effects
- Hover animations and interactive states
- Grid layout with responsive columns
- Brain.vat bot profile examples
- Team and agent showcase displays

**Use this when:** Displaying bot profiles, agent information, or team showcases on about pages.

---

#### **[TECHNICAL_SCHEMATIC_GUIDE.md](./components/TECHNICAL_SCHEMATIC_GUIDE.md)** — System Architecture Display
- TechnicalSchematic component for infrastructure visualization
- Grid and row layout options
- Component, role, and location display
- Custom icons and terminal colors
- Brain.vat system architecture preset
- Microservices and pipeline diagrams

**Use this when:** Building system architecture diagrams, technical documentation, or infrastructure visualizations.

---

#### **[MISSION_STATEMENT_GUIDE.md](./components/MISSION_STATEMENT_GUIDE.md)** — Mission & Vision Statements
- MissionStatement and preset components
- Content cards with metadata and action buttons
- Multiple paragraph support with formatting
- Version tracking and status display
- Brain.vat mission preset
- Multi-statement display patterns

**Use this when:** Creating mission/vision statements, project descriptions, or experiment hypotheses on about pages.

---

#### **[DIALOGUE_MESSAGE_GUIDE.md](./components/DIALOGUE_MESSAGE_GUIDE.md)** — Conversation & Chat Messages
- DialogueMessage and ConversationThread components
- Support for MAUK, ABACI, USER, SYSTEM speakers
- Auto-coloring and glow effects for brain.vat bots
- Message variants (default, highlight, system)
- Timestamps and metadata display
- Full conversation thread display

**Use this when:** Building chatbot interfaces, displaying conversations, showing dialogue transcripts, or interaction logs.

---

#### **[TIMELINE_GUIDE.md](./components/TIMELINE_GUIDE.md)** — Event Timeline Display
- Timeline component for chronological events
- Vertical and horizontal layout options
- Event icons, colors, and metadata
- Connecting lines and interactive dots
- Timeline event structure and customization

**Use this when:** Showing process flows, event histories, conversation timelines, or sequential operations.

---

#### **[ALERT_GUIDE.md](./components/ALERT_GUIDE.md)** — System Alerts & Notifications
- Alert component with severity levels
- Success, warning, error, info, system variants
- Default, compact, and inline layout options
- Optional action buttons and dismissal
- Auto-dismiss and alert queue patterns

**Use this when:** Displaying notifications, errors, warnings, confirmations, or system messages.

---

#### **[PROGRESS_INDICATOR_GUIDE.md](./components/PROGRESS_INDICATOR_GUIDE.md)** — Progress & Metrics Display
- ProgressIndicator with multiple variants
- Linear progress bars, circular progress, gauge display
- Customizable sizes and colors
- Labels, percentages, and custom formatting
- Striped and animated progress options

**Use this when:** Showing task completion, system metrics, data loading, or operational status.

---

#### **[STATS_DISPLAY_GUIDE.md](./components/STATS_DISPLAY_GUIDE.md)** — Metric Cards
- StatsDisplay component for KPI and metric cards
- Individual stat cards with labels and values
- Change indicators (positive/negative/neutral)
- Custom icons and colors per stat
- Grid and row layout options

**Use this when:** Building dashboards, displaying system metrics, or showing performance indicators.

---

#### **[SPINNER_GUIDE.md](./components/SPINNER_GUIDE.md)** — Loading Spinners
- Spinner component with multiple variants
- Ring, dots, and pulse animation styles
- Small/medium/large sizing options
- Customizable colors and labels
- Perfect for indicating async operations

**Use this when:** Showing loading states, indicating async operations, or displaying "please wait" messages.

---

#### **[LOADING_PROGRESS_GUIDE.md](./components/LOADING_PROGRESS_GUIDE.md)** — Page Loading Progress
- LoadingProgress component for top/bottom progress bars
- Auto-simulates progress while loading
- Fixed positioning for app-wide use
- Completion callbacks
- Perfect for page transitions

**Use this when:** Showing page navigation progress, long-running operations, or app-wide loading states.

---

#### **[BREADCRUMB_GUIDE.md](./components/BREADCRUMB_GUIDE.md)** — Navigation Breadcrumbs
- Breadcrumb component for navigation paths
- Clickable items with optional icons
- Customizable separators
- Support for links and callbacks
- Show current location in hierarchy

**Use this when:** Building navigation trails, showing current page location, or creating hierarchical navigation.

---

#### **[BADGE_GUIDE.md](./components/BADGE_GUIDE.md)** — Tags & Badges
- Badge component for labels and tags
- Multiple variants (default, outline, solid, glow)
- Colors for different categories and statuses
- Optional removable tags with callbacks
- BadgeGroup for displaying multiple badges

**Use this when:** Displaying tags, showing status indicators, labeling content, or creating removable filters.

---

### **[IMPLEMENTATION_INDEX.md](./IMPLEMENTATION_INDEX.md)** — Orientation Guide
- Overview of all three resources
- Common use cases with workflows
- Quick reference cheat sheet
- File locations and learning path
- Success tips and Q&A

**Use this when:** You're new to the theme and want context on how everything fits together.

---

### **[SETUP_SKILL.md](./SETUP_SKILL.md)** — Claude Code Skill
Interactive setup and bootstrapping guide for new projects.

**Invoke with:** `/brain-vat-theme setup` (in Claude Code)

**Use this when:** Starting a brand new Next.js project and want the theme applied instantly.

---

## 🎨 Quick Color Reference

| Name | Color | Usage |
|------|-------|-------|
| **MAUK** | `#03A6A1` | Left bot / sidebar |
| **ABACI** | `#FF9D23` | Right bot / sidebar |
| **User/Primary** | `#E63946` | User messages & accents |
| **Background** | `oklch(0.08 0 0)` | Main background (deep black) |
| **Foreground** | `oklch(0.75 0.01 80)` | Text color (light gray) |

---

## ⚡ Quick Start

### Apply to a new Next.js project:
1. Copy the CSS variables from **THEME_GUIDE.md** → "CSS Variables Setup"
2. Copy the animation definitions from **THEME_GUIDE.md** → "Animations & Effects"
3. Install dependencies: `npm install ccru@github:lumpenspace/ccru next-themes`
4. Update `tailwind.config.ts` (see **THEME_GUIDE.md**)
5. Reference **COMPONENT_STRATEGY.md** when building components

### Or use automation:
```bash
/brain-vat-theme setup
```

---

## 🧩 Component Ecosystem

**CCRU Components** (pre-themed cyberpunk UI)
- CyberButton, CyberCheckbox, CyberContainer
- NeonDivider, GlitchText, StatusDot
- CyberButtonGroup, CyberGridGroup, CyberStackGroup

**Shadcn/ui** (base primitives)
- Input, Dialog, Select, Tabs, Card
- Automatically themed with CSS variables

**Custom** (domain-specific)
- Build with theme CSS variables and animation classes

**Strategy:** Use ccru first → fallback to shadcn → create custom only when needed.

---

## 🎯 Common Workflows

**"I'm starting a new project"**
1. Run `/brain-vat-theme setup`
2. Read **COMPONENT_STRATEGY.md** "Decision Tree"
3. Use **THEME_GUIDE.md** as reference for colors/animations

**"I need to choose a component"**
1. Open **COMPONENT_STRATEGY.md**
2. Find your component type in the decision tree
3. Use recommended ccru or shadcn component
4. See examples at the bottom

**"I need a specific color or animation"**
1. Open **THEME_GUIDE.md**
2. Find "Color Palette" or "Animations & Effects"
3. Copy the CSS variable or code

**"I'm creating a custom component"**
1. Open **COMPONENT_STRATEGY.md** "Custom Components" section
2. Use CSS variables for colors (e.g., `text-mauk`)
3. Use animation classes (e.g., `.message-enter`)
4. Reference **THEME_GUIDE.md** for available animations

---

## 📋 File Organization

```
cyber_theme/
├── README.md                    ← You are here
├── THEME_GUIDE.md              ← Complete design reference
├── COMPONENT_STRATEGY.md       ← Decision tree & examples
├── IMPLEMENTATION_INDEX.md     ← Orientation guide
└── SETUP_SKILL.md              ← Claude Code skill
```

All files are self-contained and can be shared independently.

---

## 🎓 Learning Path

**5 minutes:** Read "Color Palette" in **THEME_GUIDE.md**

**10 minutes:** Skim "Component Strategy" in **COMPONENT_STRATEGY.md**

**5 minutes:** Run `/brain-vat-theme setup` on a test project

**15 minutes:** Build a simple component using CyberButton + NeonDivider

**Ongoing:** Refer back to guides as questions come up

---

## 💡 Key Features

✅ **Complete color system** with oklch and hex values  
✅ **Copy-paste-ready CSS** variables and animations  
✅ **Clear component strategy** (ccru > shadcn > custom)  
✅ **Reuses your friend's ccru package** instead of reinventing  
✅ **Real-world examples** for common UI patterns  
✅ **Automated setup skill** for new projects  
✅ **Portable & customizable** for any Next.js project  

---

## 🚀 Next Steps

1. **New project?** → Run `/brain-vat-theme setup`
2. **Existing project?** → Follow checklist in **THEME_GUIDE.md**
3. **Need guidance?** → Check **COMPONENT_STRATEGY.md** decision tree
4. **Want details?** → Reference **IMPLEMENTATION_INDEX.md**

---

## ❓ FAQ

**Q: Can I use this with other projects?**  
A: Yes! The theme is fully portable. Copy the CSS variables into any Next.js project.

**Q: Do I need to use ccru components?**  
A: You can use shadcn/ui or custom components instead, but ccru gives you pre-themed, cyberpunk-styled UI.

**Q: Can I customize the colors?**  
A: Yes! All colors are CSS variables. Override them per-project in your `globals.css`.

**Q: What if I don't like monospace fonts?**  
A: Change `--font-sans` in the CSS variables. The theme will work with any typeface.

**Q: Where's the skill file?**  
A: It's included here as **SETUP_SKILL.md**. To use it, copy it to `.claude/skills/` in your Claude Code session.

---

## 📞 Questions?

- **Color codes?** → THEME_GUIDE.md → Color Palette
- **Component choice?** → COMPONENT_STRATEGY.md → Decision Tree
- **Setup help?** → SETUP_SKILL.md or /brain-vat-theme skill
- **Specific animation?** → THEME_GUIDE.md → Animations & Effects
- **Troubleshooting?** → THEME_GUIDE.md → Troubleshooting section

---

**Built from:** [brain.vat](../brain.vat/) project  
**Components:** CCRU package + shadcn/ui + custom  
**Theme:** Dark cyberpunk/terminal aesthetic  
**Ready to use:** ✨
