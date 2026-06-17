import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Builds the cyber components into a single self-contained IIFE bundle
// (`cyber-showcase.js`) that the static SHOWCASE.html loads with a classic
// <script> tag and mounts via `CyberDemo.mountAll()`.
export default defineConfig({
  plugins: [react()],
  // React's bundled build reads process.env.NODE_ENV; lib mode doesn't replace
  // it automatically, so define it (otherwise: "process is not defined").
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  resolve: {
    // `@` → the cyber_theme root, so the real components resolve their
    // `@/lib/utils` and `@/components/ui/tooltip` imports.
    // The component .tsx files live OUTSIDE this Vite root, so their bare
    // imports can't find react-demo/node_modules via normal node resolution —
    // alias the shared deps to absolute paths so they resolve from here.
    alias: {
      '@': resolve(__dirname, '..'),
      react: resolve(__dirname, 'node_modules/react'),
      'react-dom': resolve(__dirname, 'node_modules/react-dom'),
      'lucide-react': resolve(__dirname, 'node_modules/lucide-react'),
      clsx: resolve(__dirname, 'node_modules/clsx'),
      'tailwind-merge': resolve(__dirname, 'node_modules/tailwind-merge'),
    },
    dedupe: ['react', 'react-dom'],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/showcase/mount.tsx'),
      name: 'CyberDemo',
      formats: ['iife'],
      fileName: () => 'cyber-showcase.js',
    },
    // Emit next to SHOWCASE.html. emptyOutDir:false so we never wipe the
    // hand-written component library.
    outDir: resolve(__dirname, '../components'),
    emptyOutDir: false,
    cssCodeSplit: false,
  },
});
