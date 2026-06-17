import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Builds the Primary (Bauhaus) components into a self-contained IIFE bundle
// (`primary-showcase.js`, global `PrimaryDemo`) that primary SHOWCASE.html
// loads with a classic <script> and mounts via `PrimaryDemo.mountAll()`.
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  resolve: {
    alias: {
      '@primary': resolve(__dirname, '../../primary_theme'),
      react: resolve(__dirname, 'node_modules/react'),
      'react-dom': resolve(__dirname, 'node_modules/react-dom'),
      'lucide-react': resolve(__dirname, 'node_modules/lucide-react'),
    },
    dedupe: ['react', 'react-dom'],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/showcase/primary-mount.tsx'),
      name: 'PrimaryDemo',
      formats: ['iife'],
      fileName: () => 'primary-showcase.js',
    },
    outDir: resolve(__dirname, '../../primary_theme/components'),
    emptyOutDir: false,
    cssCodeSplit: false,
  },
});
