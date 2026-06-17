import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/themez/', // GitHub Pages base path
  build: {
    outDir: '../../dist', // output to top-level dist folder
    emptyOutDir: true,
  },
});
