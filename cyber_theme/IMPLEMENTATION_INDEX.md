# Brain.vat Theme Implementation Index

Welcome! You now have a complete, reusable design system for the brain.vat dark cyberpunk aesthetic. This index explains what you have and how to use it.

---

## 📚 What You Have

### 1. **BRAIN_VAT_THEME_GUIDE.md** 
**Comprehensive design documentation**

- Complete color palette with hex/oklch values
- All CSS variables needed for the theme
- Detailed animation and effect definitions
- Typography standards (monospace fonts)
- Component library overview (ccru, shadcn/ui, custom)
- Tailwind configuration guide
- Quick implementation checklist
- Troubleshooting section

**Use this when:**
- Setting up a new project
- You need to verify a color code
- You want to understand the animation system
- You're creating a custom component and need to know what CSS classes are available

---

### 2. **COMPONENT_STRATEGY.md**
**Decision tree for component selection**

- Decision flowchart: "What component should I use?"
- Detailed reference for each ccru component (CyberButton, NeonDivider, etc.)
- When to use shadcn/ui vs ccru
- When to create custom components
- Real-world examples (header, settings panel, modal with form)
- Component checklist
- Migration guide (converting custom code to use ccru)

**Use this when:**
- You're building a new feature and unsure which component to use
- You want to understand how to use ccru properly
- You're reviewing someone else's component and want to suggest ccru alternatives
- You want to understand the balance between reusability and customization

---

### 3. **/brain-vat-theme Skill**
**Interactive setup and guidance**

Invoke with: `/brain-vat-theme setup` or `/brain-vat-theme guide`

- Bootstraps new projects with all theme files
- Installs dependencies automatically
- Configures Tailwind, PostCSS, ccru, shadcn/ui
- Provides copy-paste-ready code examples
- Answers specific setup questions

**Use this when:**
- Starting a brand new Next.js project and want the theme applied instantly
- You want to quickly set up a project without manually copying files
- You need help choosing which shadcn/ui components to install
- You want an example component to see the theme in action

---

### 4. **Custom Component Guides**
**Pre-built, reusable components for specialized UI needs**

Three domain-specific components with complete documentation:

#### **BotParameterPanel** — Hyperparameter Configuration UI
`BOT_PARAMETER_PANEL_GUIDE.md`
- Collapsible parameter control panels
- Support for range, text, number, and textarea inputs
- Parameter grouping and organization
- Status indicators and sync feedback
- Brain.vat bot colors (cyan/orange) or custom colors
- Real-world examples: LLM tuning, game server settings, database configuration

#### **AuditLogCard** — Event/Log Display Component
`AUDIT_LOG_CARD_GUIDE.md`
- Collapsible audit log cards with multiple section types
- Support for text, code, grid, tags, stats, and custom sections
- Status indicators, badges, and timestamps
- Metadata and full-featured styling
- Real-world examples: API logs, error traces, admin actions, activity logs

#### **MemoryCard & MemoryColumn** — Memory Concept Display
`MEMORY_CARD_GUIDE.md`
- Individual memory concept cards with animations and tooltips
- Column layout containers for multi-column memory archives
- Left/center/right text alignment
- Pulse and ping animations with optional indicator dots
- Source attribution via hover tooltips
- Real-world examples: 3-column memory archive (MAUK/Shared/ABACI)

#### **BotNameCard & BotNameCardGrid** — Bot Profile Display
`components/BOT_NAME_CARD_GUIDE.md`
- Individual bot profile cards with glow effects
- Grid container for multiple bot cards
- Customizable colors and hover animations
- Small/medium/large sizing options
- Brain.vat bot examples (MAUK, ABACI)
- Team and agent showcase patterns

#### **TechnicalSchematic** — System Architecture Display
`components/TECHNICAL_SCHEMATIC_GUIDE.md`
- Grid-based infrastructure component display
- Shows component names, roles, and implementation locations
- Terminal green default color with custom color support
- 2/3/4-column grid and row layout options
- Brain.vat system architecture (BRAIN, SPINE, MEMORY, INTERFACE)
- Custom microservices and pipeline diagrams

#### **MissionStatement** — Mission & Vision Cards
`components/MISSION_STATEMENT_GUIDE.md`
- Content cards with optional metadata and action buttons
- Support for string or React component content
- Multi-paragraph statements with automatic spacing
- Version tracking and status display
- Brain.vat mission statement preset
- Small/medium/large sizing options

#### **DialogueMessage & ConversationThread** — Conversation Display
`components/DIALOGUE_MESSAGE_GUIDE.md`
- Individual message display with speaker identification
- Auto-color support for MAUK/ABACI/USER/SYSTEM
- Message variants (default, highlight, system)
- Timestamps and metadata display
- Full conversation thread container
- Perfect for chatbots and dialogue transcripts

#### **Timeline** — Chronological Event Display
`components/TIMELINE_GUIDE.md`
- Vertical and horizontal timeline layouts
- Event titles, content, timestamps, and icons
- Custom colors per event or default color
- Connecting lines and interactive dots
- Perfect for process flows and event histories

#### **Alert** — System Notifications
`components/ALERT_GUIDE.md`
- Multiple severity levels (success, warning, error, info, system)
- Three layout variants (default, compact, inline)
- Optional action buttons and dismissal
- Auto-dismiss and alert queue patterns
- Perfect for user feedback and system notifications

#### **ProgressIndicator** — Progress & Metrics
`components/PROGRESS_INDICATOR_GUIDE.md`
- Linear, circular, and gauge progress variants
- Customizable sizes (sm/md/lg) and colors
- Labels, percentages, and custom formatting
- Striped and animated progress options
- Perfect for status, metrics, and task completion

#### **StatsDisplay** — Metric Cards
`components/STATS_DISPLAY_GUIDE.md`
- Stat cards with labels, values, and change indicators
- Support for positive/negative/neutral changes
- Optional icons and custom colors
- Grid and row layouts with multiple columns
- Perfect for dashboards and KPI displays

#### **Spinner** — Loading Indicators
`components/SPINNER_GUIDE.md`
- Ring, dots, and pulse animation variants
- Customizable sizes (sm/md/lg)
- Colored labels and glow effects
- Perfect for async operation feedback

#### **LoadingProgress** — Page Loading Bar
`components/LOADING_PROGRESS_GUIDE.md`
- Top/bottom fixed progress bar
- Auto-simulates progress while loading
- Smooth animations and completion callbacks
- Perfect for page transitions

#### **Breadcrumb** — Navigation Path
`components/BREADCRUMB_GUIDE.md`
- Navigation path with clickable items
- Optional icons and custom separators
- Link and callback support
- Shows current location in hierarchy

#### **Badge** — Tags & Labels
`components/BADGE_GUIDE.md`
- Multiple variants (default, outline, solid, glow)
- Color options for categories and statuses
- Removable tags with callbacks
- BadgeGroup for batch display

**Use these when:**
- You need a configuration/settings UI (BotParameterPanel)
- You're displaying activity logs, errors, or events (AuditLogCard)
- You're building memory/concept displays or archives (MemoryCard)
- You're creating bot or agent profiles (BotNameCard)
- You're visualizing system architecture (TechnicalSchematic)
- You're displaying missions or project statements (MissionStatement)
- You're building conversations or chatbots (DialogueMessage)
- You're showing process flows or event histories (Timeline)
- You're displaying notifications or alerts (Alert)
- You're showing completion or system metrics (ProgressIndicator)
- You want pre-built, themed components you can reuse across projects

---

## 🎯 Common Use Cases

### "I'm starting a new Next.js project with this theme"
1. Run `/brain-vat-theme setup`
2. Answer the prompts (project name, dependencies, etc.)
3. Refer to **COMPONENT_STRATEGY.md** when building features
4. Use **BRAIN_VAT_THEME_GUIDE.md** as a reference for colors/animations

### "I'm building a specific component and don't know what to use"
1. Open **COMPONENT_STRATEGY.md**
2. Find your component type in the decision tree
3. Use the recommended ccru or shadcn component
4. Reference the examples at the bottom

### "I want to understand the color system"
1. Open **BRAIN_VAT_THEME_GUIDE.md**
2. Go to "Color Palette" section
3. Copy the CSS variable you need
4. Apply it to your component (e.g., `className="text-mauk"`)

### "I'm adding animations to a component"
1. Open **BRAIN_VAT_THEME_GUIDE.md**
2. Find the animation you need in "Animations & Effects"
3. Apply the CSS class to your element (e.g., `.message-enter`)
4. Adjust duration/intensity if needed

### "I want to apply this theme to a project that already exists"
1. Read the "Quick Implementation Checklist" in **BRAIN_VAT_THEME_GUIDE.md**
2. Copy the CSS variables and animations to `globals.css`
3. Update `tailwind.config.ts` with the theme colors
4. Install ccru and next-themes
5. Reference **COMPONENT_STRATEGY.md** to convert existing components

### "I'm sharing this theme with a teammate or AI model"
1. Share **BRAIN_VAT_THEME_GUIDE.md** for reference
2. Share **COMPONENT_STRATEGY.md** for implementation guidance
3. Have them run `/brain-vat-theme setup` in their Claude Code session
4. Point them to this index for context

### "I need to build a configuration/admin panel"
1. Reference **BOT_PARAMETER_PANEL_GUIDE.md** for the BotParameterPanel component
2. Copy the component and customize colors/parameters for your use case
3. See "Real-world examples" for LLM tuning, game servers, or database config

### "I need to display audit logs or activity feeds"
1. Reference **AUDIT_LOG_CARD_GUIDE.md** for the AuditLogCard component
2. Choose your section types (text, code, grid, tags, stats, custom)
3. See "Real-world examples" for API logs, errors, or admin actions

### "I need to display memory/concept archives"
1. Reference **MEMORY_CARD_GUIDE.md** for MemoryCard and MemoryColumn components
2. Choose alignment (left/center/right) and animations (pulse/ping)
3. Implement the 3-column layout pattern or single column list
4. See "Real-world examples" for brain.vat-style archives

### "I need to display bot or agent profiles"
1. Reference **BOT_NAME_CARD_GUIDE.md** for BotNameCard and BotNameCardGrid components
2. Customize colors for each bot (use theme colors or custom hex)
3. Choose grid layout (1/2/3/4 columns)
4. See "Real-world examples" for brain.vat bots (MAUK/ABACI) and team displays

### "I need to visualize system architecture"
1. Reference **TECHNICAL_SCHEMATIC_GUIDE.md** for TechnicalSchematic component
2. Define your components with name, role, and location
3. Choose grid (2/3/4 columns) or row layout
4. Use pre-built BrainVatSystemArchitecture preset or customize colors
5. See "Real-world examples" for microservices and infrastructure diagrams

### "I need to display missions, visions, or experiment statements"
1. Reference **MISSION_STATEMENT_GUIDE.md** for MissionStatement component
2. Choose content format (string, multi-paragraph, or React component)
3. Optionally add version, metadata, and action button
4. Use BrainVatMission preset or customize title and content
5. See "Real-world examples" for about pages and vision statements

---

## 🎨 Theme at a Glance

**Color Scheme:**
- Primary: Blood red (`#E63946`)
- MAUK (Left bot): Cyan (`#03A6A1`)
- ABACI (Right bot): Orange (`#FF9D23`)
- Background: Deep black (`oklch(0.08 0 0)`)
- Foreground: Light gray (`oklch(0.75 0.01 80)`)

**Typography:**
- Font: JetBrains Mono, Geist Mono, Courier New (monospace)
- All text is monospace for hacker/terminal aesthetic

**Visual Effects:**
- CRT scanlines (static and animated)
- Neon glow on text
- Glitch animations
- Text fade-in-up on appearance
- Pulsing dividers and branding elements
- Subtle noise texture overlay

**Component Library:**
- **CCRU:** Pre-themed cyberpunk UI (buttons, checkboxes, containers, dividers, glitch text, status dots)
- **Shadcn/ui:** Base primitives (inputs, dialogs, selects, tabs, cards)
- **Custom:** Domain-specific components (message feed, sidebars, etc.)

---

## 🚀 Quick Reference

### Install the theme in a new project
```bash
/brain-vat-theme setup
```

### Reference the color palette
Open **BRAIN_VAT_THEME_GUIDE.md** → "Color Palette" section

### Find the right component
Open **COMPONENT_STRATEGY.md** → Decision Tree

### Copy animation code
Open **BRAIN_VAT_THEME_GUIDE.md** → "Animations & Effects" section

### Customize colors
Edit `app/globals.css` CSS variables

### Apply theme to existing project
Follow "Quick Implementation Checklist" in **BRAIN_VAT_THEME_GUIDE.md**

---

## 📋 File Locations

| File | Path | Purpose |
|------|------|---------|
| Theme Guide | `THEME_GUIDE.md` | Complete reference (colors, animations, components, setup) |
| Component Strategy | `COMPONENT_STRATEGY.md` | Decision tree and component examples |
| CCRU Credits | `CCRU_CREDITS.md` | Attribution and integration guide for ccru library |
| MemoryCard Guide | `MEMORY_CARD_GUIDE.md` | Memory/concept display component documentation |
| BotParameterPanel Guide | `components/BOT_PARAMETER_PANEL_GUIDE.md` | Config UI component documentation |
| AuditLogCard Guide | `components/AUDIT_LOG_CARD_GUIDE.md` | Log/event display component documentation |
| BotNameCard Guide | `components/BOT_NAME_CARD_GUIDE.md` | Bot profile display component documentation |
| TechnicalSchematic Guide | `components/TECHNICAL_SCHEMATIC_GUIDE.md` | System architecture display component documentation |
| MissionStatement Guide | `components/MISSION_STATEMENT_GUIDE.md` | Mission/vision statement component documentation |
| DialogueMessage Guide | `components/DIALOGUE_MESSAGE_GUIDE.md` | Conversation/chat message component documentation |
| Timeline Guide | `components/TIMELINE_GUIDE.md` | Event timeline component documentation |
| Alert Guide | `components/ALERT_GUIDE.md` | Alert/notification component documentation |
| ProgressIndicator Guide | `components/PROGRESS_INDICATOR_GUIDE.md` | Progress/metrics component documentation |
| StatsDisplay Guide | `components/STATS_DISPLAY_GUIDE.md` | Metric cards component documentation |
| Spinner Guide | `components/SPINNER_GUIDE.md` | Loading spinners component documentation |
| LoadingProgress Guide | `components/LOADING_PROGRESS_GUIDE.md` | Page loading bar component documentation |
| Breadcrumb Guide | `components/BREADCRUMB_GUIDE.md` | Navigation breadcrumb component documentation |
| Badge Guide | `components/BADGE_GUIDE.md` | Tags and badges component documentation |
| Component Examples | `components/EXAMPLE_USAGE.tsx` | Working examples of all 30+ components |
| Parameter Presets | `components/PARAMETER_PRESETS.ts` | Pre-configured parameter sets for BotParameterPanel |
| Components Directory | `components/` | All custom components and their guides |
| Theme Skill | `.claude/skills/brain-vat-theme-setup.md` | Bootstrap new projects |
| This Index | `IMPLEMENTATION_INDEX.md` | Orientation guide (you are here) |

All files are located in the `cyber_theme/` directory of your gh_repo.

---

## 💡 Tips for Success

1. **Prefer ccru components** — They're already themed for this aesthetic. Use them before shadcn/ui.

2. **Use CSS variables** — Never hardcode colors. Use `--mauk`, `--abaci`, `--user-color` instead of hex values. This makes customization easy.

3. **Leverage animations** — The theme includes many effects. Look for `.moving-scanlines`, `.message-enter`, `.glitch`, `.neon-pulse`, etc.

4. **Keep monospace font** — It's central to the aesthetic. Don't switch to sans-serif unless you have a specific reason.

5. **Maintain contrast** — The dark background relies on bright text. Ensure readability with `.foreground` or `.mauk`/`.abaci`/`.user-color` colors.

6. **Test speaker identification** — Messages from MAUK, ABACI, and USER should be visually distinct using their respective glow classes and colors.

7. **Document customizations** — If you create variations, save them in a separate CSS file or config so they're easy to maintain.

---

## 🔄 Workflow Example

**Scenario:** You're building a new project with a conversation interface (3 speakers like brain.vat).

**Step 1: Set up the project**
```bash
/brain-vat-theme setup
# Answer prompts, let it install everything
```

**Step 2: Create the layout structure**
```tsx
// components/conversation-layout.tsx
import { CyberButton, NeonDivider } from 'ccru';

export function ConversationLayout() {
  return (
    <div className="flex h-screen w-screen bg-background">
      <aside className="w-64 border-r border-border">
        {/* Left sidebar - Bot A */}
      </aside>
      <main className="flex-1 flex flex-col">
        {/* Center - Messages */}
      </main>
      <aside className="w-64 border-l border-border">
        {/* Right sidebar - Bot B */}
      </aside>
    </div>
  );
}
```

**Step 3: Create message component**
Check **COMPONENT_STRATEGY.md** → "Example 1: Custom Message Display" for reference, or use the `.mauk-glow`, `.abaci-glow`, `.user-glow` classes.

**Step 4: Add animations**
Open **BRAIN_VAT_THEME_GUIDE.md** → "Animations & Effects" and copy the `.message-enter` animation.

**Step 5: Test**
```bash
npm run dev
# Visit http://localhost:3000 and verify colors, fonts, animations
```

**Step 6: Reference docs as needed**
- New component? Check **COMPONENT_STRATEGY.md**
- Need a color? Check **BRAIN_VAT_THEME_GUIDE.md** "Color Palette"
- Animation stuttering? Check Tailwind config in **BRAIN_VAT_THEME_GUIDE.md**

---

## 🎓 Learning Path

**If you're new to this theme:**
1. Read the "Color Palette" and "Animations & Effects" sections in **THEME_GUIDE.md** (10 min)
2. Skim the "Component Strategy" section in **COMPONENT_STRATEGY.md** (10 min)
3. Run `/brain-vat-theme setup` on a test project (5 min)
4. Build a simple component using CyberButton + NeonDivider (15 min)
5. Refer back to the guides as questions come up

**If you're building configuration/admin UIs:**
1. Open **BOT_PARAMETER_PANEL_GUIDE.md**
2. Copy the component files (BotParameterPanel.tsx, PARAMETER_PRESETS.ts)
3. Review the real-world examples section
4. Customize colors and parameters for your use case

**If you're building activity logs or event displays:**
1. Open **AUDIT_LOG_CARD_GUIDE.md**
2. Copy the component file (AuditLogCard.tsx)
3. Choose your section types and customize styling
4. Reference the real-world examples for your use case

**If you're building memory or concept displays:**
1. Open **MEMORY_CARD_GUIDE.md**
2. Copy the component file (MemoryCard.tsx) — includes both MemoryCard and MemoryColumn
3. Choose alignment and animation options
4. Reference the 3-column archive example for your layout

**If you're building bot or agent profiles:**
1. Open **BOT_NAME_CARD_GUIDE.md** in components/
2. Copy the component file (BotNameCard.tsx) — includes both BotNameCard and BotNameCardGrid
3. Customize colors and sizes for your use case
4. Reference real-world examples for team displays

**If you're visualizing system architecture:**
1. Open **TECHNICAL_SCHEMATIC_GUIDE.md** in components/
2. Copy the component file (TechnicalSchematic.tsx)
3. Define your system components or use the BrainVatSystemArchitecture preset
4. Choose grid layout and custom colors

**If you're creating mission or vision statements:**
1. Open **MISSION_STATEMENT_GUIDE.md** in components/
2. Copy the component file (MissionStatement.tsx)
3. Choose content format and optional metadata/actions
4. Use BrainVatMission preset or create custom statements

**If you're helping a teammate:**
1. Share the theme guide with them
2. Have them run `/brain-vat-theme setup`
3. Point them to **COMPONENT_STRATEGY.md** when they ask "what should I use for X?"
4. Point them to specific custom component guides if they need config/log/memory UIs
5. Keep **THEME_GUIDE.md** as your reference to answer their questions

**If you're training an AI model:**
1. Provide **THEME_GUIDE.md** as foundational context
2. Provide **COMPONENT_STRATEGY.md** for component selection guidance
3. Provide relevant custom component guides if the task requires them
4. Use this index as an orientation guide
5. Reference CCRU_CREDITS.md for proper attribution

---

## 🆘 Troubleshooting

**"I don't remember which component to use"**
→ Open **COMPONENT_STRATEGY.md** and use the decision tree

**"Colors look wrong"**
→ Check **BRAIN_VAT_THEME_GUIDE.md** "CSS Variables" section and ensure variables are copied correctly

**"ccru components not showing"**
→ Run `npm install ccru@github:lumpenspace/ccru` and restart dev server

**"Animations are choppy"**
→ See **BRAIN_VAT_THEME_GUIDE.md** "Troubleshooting" section

**"I want to customize colors for my project"**
→ Edit CSS variables in `app/globals.css` (no need to modify the docs)

---

## 📞 Questions?

- **Color codes?** → THEME_GUIDE.md → Color Palette
- **Component choice?** → COMPONENT_STRATEGY.md → Decision Tree
- **Need a config UI?** → components/BOT_PARAMETER_PANEL_GUIDE.md
- **Need a log/event display?** → components/AUDIT_LOG_CARD_GUIDE.md
- **Need a memory/concept display?** → MEMORY_CARD_GUIDE.md
- **Need bot profiles?** → components/BOT_NAME_CARD_GUIDE.md
- **Need system architecture display?** → components/TECHNICAL_SCHEMATIC_GUIDE.md
- **Need mission/vision statements?** → components/MISSION_STATEMENT_GUIDE.md
- **Need conversation/chat display?** → components/DIALOGUE_MESSAGE_GUIDE.md
- **Need timeline or event display?** → components/TIMELINE_GUIDE.md
- **Need alerts or notifications?** → components/ALERT_GUIDE.md
- **Need progress or metrics display?** → components/PROGRESS_INDICATOR_GUIDE.md
- **Need metric/stats cards?** → components/STATS_DISPLAY_GUIDE.md
- **Need loading spinner?** → components/SPINNER_GUIDE.md
- **Need page loading bar?** → components/LOADING_PROGRESS_GUIDE.md
- **Need breadcrumb navigation?** → components/BREADCRUMB_GUIDE.md
- **Need tags/badges?** → components/BADGE_GUIDE.md
- **Setup help?** → /brain-vat-theme skill
- **Specific animation?** → THEME_GUIDE.md → Animations & Effects
- **Working examples?** → components/EXAMPLE_USAGE.tsx (30+ examples)
- **Troubleshooting?** → THEME_GUIDE.md → Troubleshooting
- **Need to attribute ccru?** → CCRU_CREDITS.md

---

## ✨ Summary

You now have:
- ✅ A complete design system documented across multiple guides
- ✅ A reusable component strategy combining ccru + shadcn/ui + custom
- ✅ **Fifteen production-ready custom components:**
  - BotParameterPanel — Hyperparameter configuration UI
  - AuditLogCard — Activity/event log display
  - MemoryCard & MemoryColumn — Memory concept archives
  - BotNameCard & BotNameCardGrid — Bot profile display
  - TechnicalSchematic — System architecture visualization
  - MissionStatement — Mission/vision statement cards
  - DialogueMessage & ConversationThread — Conversation/chat display
  - Timeline — Chronological event display
  - Alert — System notifications & alerts
  - ProgressIndicator — Progress bars, gauges, metrics
  - StatsDisplay — Metric/KPI cards
  - Spinner — Loading animations
  - LoadingProgress — Page loading bar
  - Breadcrumb — Navigation paths
  - Badge — Tags, labels, status badges
- ✅ **17 comprehensive guides** with real-world examples and API documentation
- ✅ **30+ working examples** in components/EXAMPLE_USAGE.tsx covering all components
- ✅ Parameter presets for quick configuration
- ✅ An automated setup skill for new projects
- ✅ Proper attribution for the ccru library
- ✅ Clear guidance on customization, patterns, and maintenance
- ✅ Complete design system for dashboards, admin panels, about pages, conversations, and more

**Next step?** Start a new project with `/brain-vat-theme setup` or copy any custom component to your project!
