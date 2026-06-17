# AI Agents & Claude Code Integration

This guide explains how to use the cyber-theme component library with AI agents and Claude Code.

## Using with Claude Code

### Installation via Claude Code Skill

You can easily integrate cyber-theme into your projects using the Claude Code setup skill:

```bash
npx skills add cyber-theme
```

This will install the latest version of the component library and set up path aliases automatically.

### Manual Installation

If you prefer manual setup:

1. **Copy components to your project:**
   ```bash
   cp -r cyber-theme/components ./src/components/cyber-theme
   ```

2. **Install dependencies:**
   ```bash
   npm install @radix-ui/* lucide-react clsx tailwind-merge
   ```

3. **Configure Tailwind (if needed):**
   Add custom colors to your `tailwind.config.ts`:
   ```ts
   theme: {
     colors: {
       mauk: '#03A6A1',
       abaci: '#FF9D23',
       primary: '#E63946',
       // Add more as needed
     }
   }
   ```

## Integration Patterns

### Component Import Patterns

**From the cyber-theme package:**
```tsx
import { MemoryCard, MemoryColumn } from 'cyber-theme/components'
import { Badge, BadgeGroup } from 'cyber-theme/components'
import { Spinner } from 'cyber-theme/components'
```

**Using path aliases (recommended):**
```tsx
// In tsconfig.json
{
  "paths": {
    "@/cyber-theme/*": ["cyber-theme/components/*"]
  }
}

// In your code
import { ComponentShowcase } from '@/cyber-theme/SHOWCASE'
```

## Component Categories

### Layout & Structure
- **MemoryCard / MemoryColumn** - Organized data display with alignment options
- **Timeline** - Chronological event visualization
- **BotNameCard / BotNameCardGrid** - Agent/bot profile displays

### Visual Feedback
- **Spinner** - Loading indicators (ring, dots, pulse variants)
- **ProgressIndicator** - Linear, circular, and gauge progress displays
- **LoadingProgress** - Horizontal progress bar
- **Alert** - Dismissible notifications (success, warning, error, info, system)

### Data Display
- **StatsDisplay** - Metrics with delta indicators and color coding
- **Badge / BadgeGroup** - Tags and labels
- **AuditLogCard** - Collapsible log entries with sections
- **DialogueMessage / ConversationThread** - Chat interfaces

### Navigation & Info
- **Breadcrumb** - Navigation path display
- **MissionStatement** - Feature/objective cards
- **TechnicalSchematic** - System architecture visualization

## Working with Agents

### Prompt Patterns for Component Customization

When working with Claude or other AI agents to customize components:

**For styling changes:**
```
Update the {ComponentName} to use {color} as the accent color 
and add {effect} on hover. Keep all other functionality intact.
```

**For content changes:**
```
Modify the {ComponentName} to display {new_data} instead of {old_data}.
The structure should remain the same with {specific_layout_requirement}.
```

**For animation changes:**
```
Update the {ComponentName} animation from {current_animation} to {new_animation}
with {duration} duration and {easing} easing function.
```

### Component Props Reference

All components support:
- `accentColor?: string` - Primary brand color (default: #00ff41)
- `className?: string` - Additional Tailwind classes
- `interactive?: boolean` - Enable hover/interactive effects

See individual component files for full prop documentation.

## Best Practices

1. **Consistency**: Use consistent accent colors throughout your app
2. **Theming**: Define colors in a central theme file and pass as props
3. **Accessibility**: Always provide labels and semantic HTML
4. **Performance**: Use React.memo for frequently-rendered components
5. **Testing**: Test components with different color/content combinations

## Examples

See the `SHOWCASE.tsx` component for complete working examples of all components in context, including:
- Proper spacing and layout
- Color variations
- Interactive states
- Animation triggers

## Support

For issues or feature requests, please open an issue on GitHub at:
https://github.com/kaiser-factorial/cyber-theme

## License

MIT - See LICENSE file for details
