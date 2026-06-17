// Assembles the full static site into <repo>/dist, mirroring the source layout
// so the relative links between pages resolve identically locally and on
// GitHub Pages. Run AFTER `vite build --config vite.showcase.config.ts`, which
// produces cyber_theme/components/cyber-demo.js.
import { cpSync, rmSync, mkdirSync, existsSync, writeFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '../../..');
const dist = join(repoRoot, 'dist');

// Files copied verbatim (preserving their relative path under dist).
const files = [
  'index.html',
  '.nojekyll',
  'cyber_theme/components/SHOWCASE.html',
  'cyber_theme/components/cyber-demo.js',
  'cyber_theme/components/README.md',
  'cyber_theme/README.md',
  'primary_theme/components/SHOWCASE.html',
  'primary_theme/components/primary-theme.css',
  'primary_theme/components/primary-theme.js',
  'primary_theme/components/Alert.html',
  'primary_theme/README.md',
];

// Directories copied recursively.
const dirs = [
  'primary_theme/components/backgrounds',
];

const bundle = join(repoRoot, 'cyber_theme/components/cyber-demo.js');
if (!existsSync(bundle)) {
  console.error('ERROR: cyber-demo.js not found. Run `npm run build:showcase` first.');
  process.exit(1);
}

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

let copied = 0;
const missing = [];
for (const rel of files) {
  const src = join(repoRoot, rel);
  if (!existsSync(src)) { missing.push(rel); continue; }
  const dest = join(dist, rel);
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(src, dest);
  copied++;
}
for (const rel of dirs) {
  const src = join(repoRoot, rel);
  if (!existsSync(src)) { missing.push(rel + '/'); continue; }
  cpSync(src, join(dist, rel), { recursive: true });
  copied++;
}

// GitHub Pages: ensure Jekyll processing is disabled.
const nojekyll = join(dist, '.nojekyll');
if (!existsSync(nojekyll)) writeFileSync(nojekyll, '');

console.log(`Assembled dist/ — ${copied} entries copied.`);
if (missing.length) console.warn('Skipped (not found): ' + missing.join(', '));
