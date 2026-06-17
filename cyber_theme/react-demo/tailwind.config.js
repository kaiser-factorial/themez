/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scan the real component library + the demo registry so all utility
  // classes the components use are generated.
  content: [
    './src/**/*.{ts,tsx,html}',
    './index.html',
    '../components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Cyber palette — mapped from the :root tokens in SHOWCASE.html
      colors: {
        background: '#000800',
        foreground: '#00ff41',
        card: { DEFAULT: '#001500', foreground: '#00ff41' },
        border: '#00441b',
        input: '#00441b',
        ring: '#00ff41',
        primary: { DEFAULT: '#00ff41', foreground: '#000800' },
        secondary: { DEFAULT: '#008f11', foreground: '#000800' },
        muted: { DEFAULT: '#008f11', foreground: '#5fae6f' },
        accent: { DEFAULT: '#E63946', foreground: '#000800' },
        destructive: { DEFAULT: '#ff4444', foreground: '#000800' },
        popover: { DEFAULT: '#001500', foreground: '#00ff41' },
        // Brand / persona accents
        mauk: '#03A6A1',
        abaci: '#FF9D23',
        user: '#E63946',
      },
      fontFamily: {
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
}
