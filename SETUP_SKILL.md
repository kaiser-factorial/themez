# Brain.vat Theme Setup Skill

**Trigger:** `/brain-vat-theme` or `/brain-vat` 

**Purpose:** Bootstrap a new Next.js project with the brain.vat dark cyberpunk theme, including CSS variables, animations, ccru components, and shadcn/ui setup.

---

## Quick Usage

```
/brain-vat-theme setup
/brain-vat-theme guide
/brain-vat-theme copy-css
/brain-vat-theme install-deps
```

---

## How It Works

This skill helps you quickly apply the brain.vat theme to a new project by:

1. **Initializing** the project structure (Next.js, TypeScript, Tailwind)
2. **Installing** required dependencies (ccru, shadcn/ui, next-themes)
3. **Copying** theme CSS variables and animations
4. **Configuring** Tailwind and PostCSS
5. **Providing** component examples and best practices

---

## What Gets Set Up

### Files Created/Modified

- `app/globals.css` — Theme variables, animations, effects
- `tailwind.config.ts` — Color and font extensions
- `postcss.config.mjs` — Tailwind CSS 4.2 setup
- `components/ui/` — Shadcn/ui components (button, input, dialog, etc.)
- `lib/theme.ts` — Theme utility exports
- `.claude/memory/` — Theme reference for future conversations

### Dependencies Installed

```json
{
  "dependencies": {
    "ccru": "github:lumpenspace/ccru",
    "next": "^16.2.0",
    "react": "^19.0.0",
    "next-themes": "^0.3.0",
    "lucide-react": "^0.344.0",
    "@radix-ui/*": "latest"
  },
  "devDependencies": {
    "tailwindcss": "^4.2.0",
    "postcss": "^8.4.0",
    "typescript": "^5.7.0"
  }
}
```

---

## Example Invocation

When you have a new Next.js project, run:

```bash
/brain-vat-theme setup
```

Then answer these questions:
- Project name? (used for folder/package.json)
- Install dependencies now? (y/n)
- Which shadcn/ui components to install? (button, input, dialog, etc.)

The skill will:
1. ✅ Copy `globals.css` with all theme variables and animations
2. ✅ Update `tailwind.config.ts` with theme colors and fonts
3. ✅ Create `postcss.config.mjs` for Tailwind 4.2
4. ✅ Install ccru from GitHub
5. ✅ Set up shadcn/ui
6. ✅ Create example component using the theme
7. ✅ Print next steps

---

## Components You Get

After setup, you can immediately use:

```tsx
// CCRU components
import { CyberButton, NeonDivider, CyberCheckbox } from 'ccru';

// Shadcn components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Theme utilities
import { colors, animations } from '@/lib/theme';
```

---

## What to Do After Setup

1. **Read the theme guide:**
   - Color palette usage
   - Animation reference
   - Component strategy (ccru vs shadcn vs custom)

2. **Start building components:**
   - Use `CyberButton` from ccru for actions
   - Use `NeonDivider` from ccru for visual breaks
   - Use shadcn/ui `Input`, `Dialog`, etc. for forms
   - Apply `.mauk-glow`, `.abaci-glow`, `.user-glow` classes for speaker identification

3. **Run the dev server:**
   ```bash
   npm run dev
   ```

4. **Test the theme:**
   - Check that colors load correctly
   - Test CRT scanlines overlay (if you add `.moving-scanlines` to a full-screen element)
   - Verify animations work smoothly

---

## Troubleshooting

**"ccru not found after install"**
- Run: `npm install ccru@github:lumpenspace/ccru`
- This installs directly from GitHub

**"Tailwind colors not applying"**
- Ensure `@import 'tailwindcss';` is at the top of `globals.css`
- Check that theme colors in `tailwind.config.ts` match CSS variable names
- Restart the dev server after config changes

**"GlitchText component not available from ccru"**
- Check your ccru version: `npm list ccru`
- If outdated, run: `npm install ccru@github:lumpenspace/ccru --latest`

**"Animations look choppy"**
- Use `will-change: opacity, transform` on animated elements for performance
- Test in production build: `npm run build && npm run start`

---

## Advanced Customization

Once set up, you can customize:

### Change the Primary Color
Edit `app/globals.css`:
```css
--primary: #FF6B6B;  /* Change from #E63946 */
--accent: #FF6B6B;
```

### Add More Speaker Colors
```css
--speaker-c: #A78BFA;  /* Purple for a third bot */
```

Then use in components:
```tsx
<div className="text-[var(--speaker-c)]">Third speaker text</div>
```

### Disable Animations
Add to component:
```tsx
<div className="motion-reduce:animate-none">
  Content
</div>
```

### Create a Light Mode Variant
Extend the `.dark` selector in globals.css with lighter oklch values.

---

## Integration with Other Projects

**Apply theme to existing project:**

1. Copy `globals.css` (lines 6–97 for CSS variables)
2. Copy animation definitions (lines 109–324)
3. Update `tailwind.config.ts` with theme extensions
4. Install: `npm install ccru next-themes`
5. Wrap app in `<ThemeProvider>` (from next-themes)

**Use theme guide in other projects:**
Reference `/Users/corinakaiser/.claude/projects/-Users-corinakaiser-Projects-VAT-gh-repo/BRAIN_VAT_THEME_GUIDE.md` for component strategy, color codes, and animation examples.

---

## For Claude Code Conversations

When working with models on projects using this theme:

1. **Share the theme guide** with the model:
   ```
   "I'm using the brain.vat theme. Here's the guide: [BRAIN_VAT_THEME_GUIDE.md]"
   ```

2. **Share the component strategy:**
   ```
   "Use CyberButton from ccru for buttons, NeonDivider for separators, and apply 
   .mauk-glow / .abaci-glow / .user-glow classes for speaker identification."
   ```

3. **Reference the skill** when setting up new projects:
   ```
   "Use /brain-vat-theme to bootstrap this project"
   ```

---

## FAQ

**Q: Can I use this theme with other projects?**
A: Yes! The theme is fully portable. Copy the CSS variables and import ccru in any Next.js project.

**Q: Do I need to use ccru components?**
A: You can use shadcn/ui or custom components instead, but ccru gives you pre-themed, cyberpunk-styled components.

**Q: Can I customize the colors?**
A: Yes. All colors are CSS variables, so you can override them per-project.

**Q: What if I don't like monospace fonts?**
A: Change `--font-sans` in globals.css to a different font family. The theme will work with any typeface.

**Q: Can I share my customizations?**
A: Absolutely! The theme is modular—your variations can be stored as separate CSS files or Tailwind config overrides.
