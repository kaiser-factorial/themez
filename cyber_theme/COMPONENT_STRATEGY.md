# Component Strategy: CCRU + Shadcn + Custom

A decision tree for which components to use when building projects with the brain.vat theme.

---

## 🙏 About CCRU

This strategy relies heavily on the amazing **[CCRU](https://github.com/lumpenspace/ccru)** component library by [@lumpenspace](https://github.com/lumpenspace). CCRU provides pre-built, production-ready cyberpunk-themed components that are the foundation of this design system.

**Why use CCRU first?** Because reinventing components is wasteful. CCRU handles the hard work of cyberpunk styling so you can focus on features. The strategy here is:
1. **Use CCRU components** — They're already themed perfectly
2. **Fall back to shadcn/ui** — For components CCRU doesn't provide
3. **Create custom only when necessary** — For domain-specific logic

This philosophy inspired the creation of custom components (BotParameterPanel, AuditLogCard) that extend CCRU's capabilities for specialized use cases.

**Install CCRU:**
```bash
npm install ccru@github:lumpenspace/ccru
```

**Learn more:** https://github.com/lumpenspace/ccru or https://qliphoth.systems/components

---

## Decision Tree

```
Need a UI component?
├─ Button-like element?
│  ├─ Regular action button → CyberButton (ccru)
│  ├─ Toggle/switch → CyberCheckbox (ccru)
│  ├─ Navigation group → CyberButtonGroup (ccru)
│  └─ Basic button → shadcn Button (fallback)
│
├─ Layout/container?
│  ├─ Card/box → CyberContainer (ccru)
│  ├─ Grid layout → CyberGridGroup (ccru)
│  ├─ Vertical stack → CyberStackGroup (ccru)
│  └─ Basic card → shadcn Card (fallback)
│
├─ Visual decoration?
│  ├─ Horizontal/vertical line → NeonDivider (ccru)
│  ├─ Glitchy text effect → GlitchText (ccru)
│  ├─ Status indicator dot → StatusDot (ccru)
│  └─ Pulsing divider → CSS .vertical-neon-line
│
├─ Text input/form?
│  ├─ Single text input → shadcn Input + theme CSS
│  ├─ Textarea → shadcn Textarea + theme CSS
│  ├─ Select dropdown → shadcn Select + theme CSS
│  └─ Multi-field form → shadcn Form (with react-hook-form)
│
├─ Modal/overlay?
│  ├─ Dialog → shadcn Dialog + theme CSS
│  ├─ Dropdown menu → shadcn DropdownMenu + theme CSS
│  ├─ Popover → shadcn Popover + theme CSS
│  └─ Full-screen overlay → Custom (rare)
│
└─ Something unique to your project?
   └─ Custom component + theme CSS variables
```

---

## Component Map

### Tier 1: Prefer CCRU (Most Themed)

These components from the `ccru` package are already styled for the cyberpunk theme. **Always use these first.**

#### CyberButton
```tsx
import { CyberButton } from 'ccru';

<CyberButton onClick={handleClick}>
  Click me
</CyberButton>

<CyberButton variant="ghost">Subtle</CyberButton>
<CyberButton disabled>Disabled</CyberButton>
```

**When to use:**
- Primary/secondary actions
- Navigation items (especially in header)
- Form submissions
- Any clickable action with visual feedback

**Characteristics:**
- Cyberpunk-themed with neon effects
- Responsive to hover/focus
- Supports variants (primary, secondary, ghost, etc.)

---

#### CyberButtonGroup
```tsx
import { CyberButtonGroup } from 'ccru';

<CyberButtonGroup>
  <CyberButton>Option 1</CyberButton>
  <CyberButton>Option 2</CyberButton>
  <CyberButton>Option 3</CyberButton>
</CyberButtonGroup>
```

**When to use:**
- Navigation tabs in header
- Option selection (mutually exclusive)
- Command palette or menu
- Feature toggles

**Characteristics:**
- Groups buttons with unified styling
- Visually separates choices
- Cleaner than individual buttons

---

#### CyberCheckbox
```tsx
import { CyberCheckbox } from 'ccru';

<CyberCheckbox 
  checked={isEnabled}
  onChange={setIsEnabled}
  label="Voice mode"
/>
```

**When to use:**
- Boolean toggles (on/off switches)
- Feature flags in settings
- Acknowledgment checkboxes
- Filters that can be combined

**Characteristics:**
- Themed checkbox with cyberpunk style
- Supports label prop
- Accessibility built-in

---

#### CyberContainer
```tsx
import { CyberContainer } from 'ccru';

<CyberContainer>
  <h2>My Content</h2>
  <p>Wrapped in a themed box</p>
</CyberContainer>
```

**When to use:**
- Card-like containers
- Modal content
- Section wrappers
- Any bounded content area

**Characteristics:**
- Themed background (dark with border)
- Consistent padding/spacing
- Optional neon glow

---

#### CyberGridGroup
```tsx
import { CyberGridGroup } from 'ccru';

<CyberGridGroup columns={3}>
  <CyberContainer>Item 1</CyberContainer>
  <CyberContainer>Item 2</CyberContainer>
  <CyberContainer>Item 3</CyberContainer>
</CyberGridGroup>
```

**When to use:**
- Multi-column layouts
- Dashboard grids
- Gallery/card layouts
- Option displays

**Characteristics:**
- Responsive grid layout
- Automatic column wrapping
- Built-in gap/spacing

---

#### CyberStackGroup
```tsx
import { CyberStackGroup } from 'ccru';

<CyberStackGroup direction="vertical" gap="lg">
  <CyberButton>Button 1</CyberButton>
  <CyberButton>Button 2</CyberButton>
  <CyberButton>Button 3</CyberButton>
</CyberStackGroup>
```

**When to use:**
- Form layouts (vertical stacking)
- List-like collections
- Menu items
- Any uniform spacing pattern

**Characteristics:**
- Flexbox-based layout
- Directional (vertical/horizontal)
- Customizable gap sizes

---

#### NeonDivider
```tsx
import { NeonDivider } from 'ccru';

<h2>Section Title</h2>
<NeonDivider color="mauk" />
<p>Content below divider</p>
```

**When to use:**
- Section separators
- Visual breaks between content areas
- Header/footer dividers
- Column dividers (with vertical variant)

**Characteristics:**
- Glowing neon line effect
- Color-customizable
- Supports vertical orientation

---

#### GlitchText
```tsx
import { GlitchText } from 'ccru';

<GlitchText intensity={0.5}>
  GLITCHY HEADLINE
</GlitchText>
```

**When to use:**
- Page titles/headings
- Error state text
- Attention-grabbing accents
- Special UI elements

**Characteristics:**
- Animated glitch effect
- Controllable intensity
- Short text works best

---

#### StatusDot
```tsx
import { StatusDot } from 'ccru';

<StatusDot status="online" />  {/* green */}
<StatusDot status="offline" /> {/* red */}
<StatusDot status="idle" />    {/* yellow */}
```

**When to use:**
- Connection status indicators
- Bot/system state
- User presence
- Mode indicators

**Characteristics:**
- Small colored circle
- Status-based coloring
- No text (usually paired with label)

---

### Tier 2: Use Shadcn/UI (Base Primitives)

When ccru doesn't have a component, use shadcn/ui. The theme CSS variables automatically apply.

#### Common Shadcn Components
```tsx
// Text input
import { Input } from '@/components/ui/input';
<Input placeholder="Type here..." />

// Text area
import { Textarea } from '@/components/ui/textarea';
<Textarea placeholder="Longer text..." />

// Select dropdown
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Choose..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="a">Option A</SelectItem>
    <SelectItem value="b">Option B</SelectItem>
  </SelectContent>
</Select>

// Dialog/modal
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Modal Title</DialogTitle>
    </DialogHeader>
    Modal content here
  </DialogContent>
</Dialog>

// Tabs
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>

// Alert/toast
import { useToast } from '@/hooks/use-toast';
const { toast } = useToast();
toast({ title: 'Success', description: 'Operation completed' });
```

**Installation:**
```bash
npx shadcn-ui@latest add input textarea select dialog tabs toast
```

---

### Tier 3: Create Custom Components (Domain-Specific)

Only when the above two don't fit your needs. Document your component clearly.

#### Example: Custom Message Display
```tsx
// components/message-bubble.tsx
interface MessageBubbleProps {
  speaker: 'MAUK' | 'ABACI' | 'USER';
  text: string;
  timestamp?: Date;
}

export function MessageBubble({ speaker, text, timestamp }: MessageBubbleProps) {
  const glowClass = {
    MAUK: 'mauk-glow text-mauk',
    ABACI: 'abaci-glow text-abaci',
    USER: 'user-glow text-user-color',
  }[speaker];

  return (
    <div className={`message-enter p-4 rounded bg-card border border-border`}>
      <div className={glowClass}>
        <strong>[{speaker}]</strong> {text}
      </div>
      {timestamp && (
        <small className="text-muted-foreground">{timestamp.toLocaleTimeString()}</small>
      )}
    </div>
  );
}
```

**When to create custom:**
- Component has project-specific logic (API calls, state management)
- Displays domain-specific data (messages, memory concepts, etc.)
- Combines multiple themed elements in a specific way
- No ccru/shadcn equivalent exists

**Guidelines:**
- Use CSS variables for colors (e.g., `text-mauk` instead of hardcoding `#03A6A1`)
- Use animation classes (`.message-enter`, `.scan-in`, etc.) for effects
- Favor composition (using ccru/shadcn internally) over reinventing

---

## Real-World Examples

### Example 1: Header Navigation
```tsx
import { CyberButton, CyberButtonGroup, NeonDivider } from 'ccru';

export function Header() {
  return (
    <header className="bg-card border-b border-border p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-user-color">My App</h1>
        
        <CyberButtonGroup>
          <CyberButton onClick={() => navigate('/')}>Home</CyberButton>
          <CyberButton onClick={() => navigate('/about')}>About</CyberButton>
          <CyberButton onClick={() => navigate('/settings')}>Settings</CyberButton>
        </CyberButtonGroup>

        <CyberButton variant="ghost">Profile</CyberButton>
      </div>
      
      <NeonDivider color="primary" className="mt-4" />
    </header>
  );
}
```

### Example 2: Settings Panel
```tsx
import { CyberCheckbox, CyberContainer, CyberStackGroup } from 'ccru';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function SettingsPanel() {
  return (
    <CyberContainer>
      <h2 className="text-xl font-bold text-primary mb-4">Settings</h2>
      
      <CyberStackGroup gap="lg">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <Input placeholder="Enter your name" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Theme</label>
          <Select defaultValue="dark">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="light">Light</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <CyberCheckbox label="Enable notifications" />
        <CyberCheckbox label="Dark mode" defaultChecked />
      </CyberStackGroup>
    </CyberContainer>
  );
}
```

### Example 3: Modal with Form
```tsx
import { CyberButton, CyberContainer } from 'ccru';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export function CreateItemModal({ open, onOpenChange }) {
  const [name, setName] = useState('');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent asChild>
        <CyberContainer className="space-y-4">
          <DialogHeader>
            <DialogTitle>Create New Item</DialogTitle>
          </DialogHeader>
          
          <Input 
            placeholder="Item name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
          
          <div className="flex gap-2 justify-end">
            <CyberButton variant="ghost" onClick={() => onOpenChange(false)}>
              Cancel
            </CyberButton>
            <CyberButton onClick={() => handleCreate(name)}>
              Create
            </CyberButton>
          </div>
        </CyberContainer>
      </DialogContent>
    </Dialog>
  );
}
```

---

## Component Checklist

**For each new component, ask:**

- [ ] Is there a ccru component for this? → Use it
- [ ] Is there a shadcn component for this? → Use it
- [ ] Does my component use theme colors? → Use CSS variables
- [ ] Does my component use animations? → Use animation classes from globals.css
- [ ] Am I duplicating ccru/shadcn logic? → Refactor to use them instead
- [ ] Is this specific to my project? → It's okay to be custom, just document it

---

## Migrating Existing Code

If you're migrating a component to use ccru:

**Before:**
```tsx
export function Button({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80"
    >
      {children}
    </button>
  );
}
```

**After:**
```tsx
import { CyberButton } from 'ccru';

export function Button(props) {
  return <CyberButton {...props} />;
}
// Or just use <CyberButton> directly in your components
```

**Why:** ccru handles all the theming, hover states, focus states, and accessibility.

---

## Troubleshooting Component Choices

**Q: Should I create a custom button variant?**
A: Check if CyberButton supports it via props. If not, use shadcn Button instead of creating custom.

**Q: I need a component with custom styling. What do I do?**
A: Use the base ccru/shadcn component and wrap with `<div className="my-custom-class">` for additional styling. Only create a wrapper component if the customization is reused.

**Q: Can I mix ccru and shadcn components?**
A: Yes! They use the same CSS variable system, so they'll look cohesive. ccru is more themed, shadcn is more flexible.

**Q: What if ccru doesn't support a feature I need?**
A: Open an issue with your friend. In the meantime, use shadcn/ui and add custom CSS to match the theme.
