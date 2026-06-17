# CCRU Library Credits & Integration

This design system is built on and deeply appreciates the **[CCRU](https://github.com/lumpenspace/ccru)** component library by [@lumpenspace](https://github.com/lumpenspace).

---

## 🙏 Why We Use CCRU

When building brain.vat, discovering CCRU was a game-changer. It provided pre-built, production-ready cyberpunk-themed React components that elevated the entire UI without requiring custom styling for every element.

Rather than reinventing the wheel, this design system leverages CCRU's excellent work as a foundation and builds additional custom components for specialized needs.

**The philosophy:** Use what exists and works, customize where you need to, create new only when necessary.

---

## 📦 CCRU Components Used

### Core UI Components

| Component | Purpose | Used In |
|-----------|---------|---------|
| **CyberButton** | Styled action buttons with neon effects | Navigation, submissions, CTAs |
| **CyberCheckbox** | Styled toggle checkboxes | Settings, filters, switches |
| **CyberContainer** | Themed layout container | Cards, modals, panels |
| **CyberButtonGroup** | Grouped button navigation | Header nav, option selectors |
| **CyberGridGroup** | Responsive grid layout | Dashboards, option displays |
| **CyberStackGroup** | Flex stack layout | Form layouts, lists |
| **NeonDivider** | Glowing separator line | Section dividers, visual breaks |
| **GlitchText** | Text with glitch animation | Headers, accents, effects |
| **StatusDot** | Status indicator dot | Connection status, mode indicators |

### Visual Style

CCRU components are pre-themed with:
- Dark terminal/hacker aesthetic
- Neon glow effects and color schemes
- Smooth transitions and animations
- Responsive design patterns
- Accessibility features built-in

This consistent styling is exactly what brain.vat needed to achieve its cyberpunk look.

---

## 🔗 Installation & Usage

### Install CCRU
```bash
npm install ccru@github:lumpenspace/ccru
```

### Import Components
```tsx
import { 
  CyberButton, 
  CyberCheckbox, 
  CyberContainer,
  NeonDivider,
  // ... other components
} from 'ccru'

export function MyComponent() {
  return (
    <CyberContainer>
      <CyberButton onClick={handleClick}>Click me</CyberButton>
      <NeonDivider />
    </CyberContainer>
  )
}
```

### Styling
CCRU components work with this theme's CSS variables automatically:
```css
--primary: #E63946
--mauk: #03A6A1
--abaci: #FF9D23
```

---

## 🎨 How CCRU + This Theme Work Together

```
CCRU Components (Pre-Themed)
         ↓
Theme CSS Variables & Animations
         ↓
Shadcn/UI (Base Primitives)
         ↓
Custom Components (Domain-Specific)
         ↓
Complete Design System
```

### Layer 1: CCRU Foundation
CCRU provides styled buttons, checkboxes, containers, and visual elements that are instantly usable with the cyberpunk aesthetic.

### Layer 2: Theme Variables & Animations
This theme adds color variables, animations (scanlines, glitch, glow), and design tokens that work with both CCRU and shadcn/ui components.

### Layer 3: Shadcn/UI Fallback
For components CCRU doesn't provide (inputs, dialogs, tabs), shadcn/ui components are themed to match using the same CSS variables.

### Layer 4: Custom Components
For specialized needs (parameter panels, audit logs), custom components are built using CCRU components as a base and theme variables for consistency.

---

## 🌟 Examples Using CCRU

### Simple Button Usage
```tsx
import { CyberButton } from 'ccru'

export function MyButton() {
  return (
    <CyberButton onClick={() => console.log('clicked')}>
      Click Me
    </CyberButton>
  )
}
```

### Navigation with CyberButtonGroup
```tsx
import { CyberButton, CyberButtonGroup } from 'ccru'

export function Navigation() {
  return (
    <CyberButtonGroup>
      <CyberButton>Home</CyberButton>
      <CyberButton>About</CyberButton>
      <CyberButton>Settings</CyberButton>
    </CyberButtonGroup>
  )
}
```

### Settings Panel
```tsx
import { CyberContainer, CyberCheckbox, CyberStackGroup } from 'ccru'

export function SettingsPanel() {
  return (
    <CyberContainer>
      <h2>Settings</h2>
      <CyberStackGroup gap="lg">
        <CyberCheckbox label="Dark Mode" defaultChecked />
        <CyberCheckbox label="Notifications" defaultChecked />
      </CyberStackGroup>
    </CyberContainer>
  )
}
```

### Header with Divider
```tsx
import { CyberButton, NeonDivider } from 'ccru'

export function Header() {
  return (
    <>
      <h1>My App</h1>
      <CyberButton>Login</CyberButton>
      <NeonDivider />
    </>
  )
}
```

---

## 📚 CCRU Documentation

For complete CCRU documentation, props, and advanced usage:

- **GitHub:** https://github.com/lumpenspace/ccru
- **Components Showcase:** https://qliphoth.systems/components
- **GitHub Issues:** Report bugs or request features

---

## 🚀 Component Strategy

This design system recommends using components in this order:

1. **CCRU Components First** ✅
   - Already perfectly themed
   - Production-ready
   - Consistent look & feel

2. **Shadcn/UI Second** ✅
   - For components CCRU doesn't provide
   - Auto-themed with CSS variables
   - Extensive customization

3. **Custom Components Last** ✅
   - Only for domain-specific needs
   - Built using CCRU/shadcn as a base
   - Uses theme variables for consistency

See [COMPONENT_STRATEGY.md](./COMPONENT_STRATEGY.md) for the complete decision tree.

---

## 🎯 Integration Examples

### With BotParameterPanel (Custom Component)
```tsx
import { BotParameterPanel } from '@/components/BotParameterPanel'
import { CyberButton } from 'ccru'

export function AdminPanel() {
  return (
    <>
      <header>
        <h1>Admin Controls</h1>
        <CyberButton onClick={() => router.push('/')}>Exit</CyberButton>
      </header>
      
      <BotParameterPanel
        botName="MAUK"
        parameters={[...]}
        accentColor="#03A6A1"
      />
    </>
  )
}
```

### With AuditLogCard (Custom Component)
```tsx
import { AuditLogCard } from '@/components/AuditLogCard'
import { CyberButton, NeonDivider } from 'ccru'

export function AuditPage() {
  return (
    <>
      <h1>Audit Trail</h1>
      <NeonDivider />
      
      {logs.map(log => (
        <AuditLogCard
          key={log.id}
          title={log.title}
          sections={buildSections(log)}
          accentColor="#00ccff"
        />
      ))}
    </>
  )
}
```

---

## 💝 Why This Matters

Building a consistent design system from scratch is hard. CCRU solved that problem for the cyberpunk aesthetic. By giving proper credit and building on it thoughtfully, we:

1. **Respect the original creator's work**
2. **Avoid reinventing solutions that already exist**
3. **Create a better product faster**
4. **Establish a clear component hierarchy**
5. **Enable others to learn from both CCRU and this system**

---

## 📖 Learn More

### CCRU
- Explore components: https://qliphoth.systems/components
- GitHub repo: https://github.com/lumpenspace/ccru
- Follow [@lumpenspace](https://github.com/lumpenspace)

### This Design System
- **THEME_GUIDE.md** — Colors, animations, CSS variables
- **COMPONENT_STRATEGY.md** — When to use which component
- **components/README.md** — Custom component documentation
- **IMPLEMENTATION_INDEX.md** — How everything fits together

---

## 🙌 Thank You

A huge thank you to [@lumpenspace](https://github.com/lumpenspace) for creating CCRU. It's an excellent library that proves you don't have to reinvent the wheel to have great design. Building on existing excellent work, with proper credit and thoughtful integration, is how great systems are built.

---

**Attribution:** This design system uses and extends components from the [CCRU](https://github.com/lumpenspace/ccru) library by [@lumpenspace](https://github.com/lumpenspace).
