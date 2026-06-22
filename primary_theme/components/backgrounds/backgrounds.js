/* ==========================================================================
   PRIMARY THEME — High-Fidelity Canvas Backgrounds
   Replicates the exact p5.js/canvas visual algorithms from reference/SKETCH.js
   ========================================================================== */

// ===== PRIMARY COLORS MAP =====
const primaryColors = [
  [235, 26, 38],  // Red
  [0, 69, 173],   // Blue
  [255, 214, 0]   // Yellow
];

function getPrimaryColor(i, alpha = 1.0) {
  const c = primaryColors[i % 3];
  return `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${alpha})`;
}

// ===== PERLIN NOISE IMPLEMENTATION (Matches p5.js noise) =====
const p = new Uint8Array(512);
const permutation = [
  151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
  190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,
  125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,
  105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,
  135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,
  82,85,212,207,206,59,227,47,162,119,170,30,87,253,223,188,244,192,58,37,252,24,161,251,90,47,47,57,
  224,14,94,228,219,10,191,96,16,127,110,228,233,210,186,59,221,114,42,191,26,248,156,246,57,224,30,84,
  206,108,18,52,253,125,250,250,252,54,69,198,171,225,29,142,224,244,71,134,139,48,27,166,77,146,158,
  231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,
  73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,
  226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,162,119,170,30,87,253,223,188,
  244,192,58,37,252,24,161,251,90,47,47,57
];
for (let i = 0; i < 512; i++) {
  p[i] = permutation[i % 256];
}

function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
function lerp(t, a, b) { return a + t * (b - a); }
function grad(hash, x, y, z) {
  const h = hash & 15;
  const u = h < 8 ? x : y;
  const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
  return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
}
function noise(x, y, z = 0) {
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;
  const Z = Math.floor(z) & 255;
  x -= Math.floor(x);
  y -= Math.floor(y);
  z -= Math.floor(z);
  const u = fade(x);
  const v = fade(y);
  const w = fade(z);
  const A = p[X] + Y;
  const AA = p[A % 256] + Z;
  const AB = p[(A + 1) % 256] + Z;
  const B = p[(X + 1) % 256] + Y;
  const BA = p[B % 256] + Z;
  const BB = p[(B + 1) % 256] + Z;
  return lerp(w, lerp(v, lerp(u, grad(p[AA % 256], x, y, z),
                               grad(p[BA % 256], x - 1, y, z)),
                         lerp(u, grad(p[AB % 256], x, y - 1, z),
                               grad(p[BB % 256], x - 1, y - 1, z))),
                 lerp(v, lerp(u, grad(p[(AA + 1) % 256], x, y, z - 1),
                               grad(p[(BA + 1) % 256], x - 1, y, z - 1)),
                         lerp(u, grad(p[(AB + 1) % 256], x, y - 1, z - 1),
                               grad(p[(BB + 1) % 256], x - 1, y - 1, z - 1))));
}
function p5Noise(x, y, z = 0) {
  return (noise(x, y, z) + 1) * 0.5;
}

// ===== STAR GENERATOR FOR PRIMARY GRID =====
function getPrimaryGridStars(w, h) {
  const starsList = [];
  const count = Math.floor(Math.max(24, Math.min(80, (w * h) / 26000)));
  let seed = 42;
  function rand() {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }
  for (let i = 0; i < count; i++) {
    starsList.push({
      x: rand() * w,
      y: rand() * h,
      s: rand() * 36 + 10,
      kind: Math.floor(rand() * 3),
      col: Math.floor(rand() * 3)
    });
  }
  return starsList;
}

// ===== BACKGROUND DRAWING FUNCTIONS =====

function drawModStripes(ctx, w, h, frameCount, level) {
  ctx.fillStyle = '#FAFAFA';
  ctx.fillRect(0, 0, w, h);

  const cols = 38;
  const rows = 28;
  const cellW = w / cols;
  const cellH = h / rows;
  const mod = 7 + (level % 6);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const idx = (r * cols + c + Math.floor(frameCount * 0.06)) % mod;
      if (idx < 3) {
        ctx.fillStyle = getPrimaryColor(idx, 36 / 255);
        ctx.fillRect(c * cellW, r * cellH, cellW + 1, cellH + 1);
      }
    }
  }

  ctx.strokeStyle = 'rgba(17, 17, 17, 0.13)'; // 34/255
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let c = 0; c <= cols; c += 2) {
    ctx.moveTo(c * cellW, 0);
    ctx.lineTo(c * cellW, h);
  }
  ctx.stroke();
}

function drawBezierClock(ctx, w, h, frameCount, level) {
  ctx.fillStyle = '#FAFAFA';
  ctx.fillRect(0, 0, w, h);

  ctx.save();
  ctx.translate(w * 0.5, h * 0.5);
  const rad = Math.min(w, h) * 0.34;
  const n = 54;
  const mult = 2 + (level % 7);

  // Outer circle
  ctx.strokeStyle = '#111111';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(0, 0, rad, 0, Math.PI * 2);
  ctx.stroke();

  // Slow rotation so the static game asset feels alive as an animated bg preview
  ctx.rotate(frameCount * 0.003);

  const HALF_PI = Math.PI / 2;
  const TWO_PI = Math.PI * 2;

  ctx.lineWidth = 1.6;
  for (let k = 0; k < n; k++) {
    const target = (mult * k) % n;
    const a1 = -HALF_PI + TWO_PI * (k / n);
    const a2 = -HALF_PI + TWO_PI * (target / n);
    const x1 = rad * Math.cos(a1);
    const y1 = rad * Math.sin(a1);
    const x2 = rad * Math.cos(a2);
    const y2 = rad * Math.sin(a2);
    const cp1x = rad * 0.35 * Math.cos(a1);
    const cp1y = rad * 0.35 * Math.sin(a1);
    const cp2x = rad * 0.35 * Math.cos(a2);
    const cp2y = rad * 0.35 * Math.sin(a2);

    ctx.strokeStyle = getPrimaryColor(k, 82 / 255);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x2, y2);
    ctx.stroke();
  }
  ctx.restore();
}

function drawCantorField(ctx, w, h, frameCount, level) {
  ctx.fillStyle = '#FAFAFA';
  ctx.fillRect(0, 0, w, h);

  ctx.save();
  ctx.translate(w * 0.5, h * 0.5);
  const span = Math.min(w * 0.82, (h - 120) * 1.42);

  // Add gentle vertical drift like the CSS animation
  const drift = Math.sin(frameCount * 0.02) * 8;

  function drawCantorCluster(x, y, len, depth, gap) {
    if (len < 10 || Math.abs(y) > h * 0.42) return;

    ctx.strokeStyle = getPrimaryColor(depth, 150 / 255);
    ctx.lineWidth = Math.max(1, 4 - depth * 0.38);

    for (let i = 0; i < 20; i += 4) {
      ctx.beginPath();
      ctx.moveTo(x, y + i);
      ctx.lineTo(x + len, y + i);
      ctx.stroke();
    }

    drawCantorCluster(x, y + gap, len / 3, depth + 1, gap * 0.82);
    drawCantorCluster(x + len * 2 / 3, y + gap, len / 3, depth + 2, gap * 0.82);
  }

  drawCantorCluster(-span / 2, -h * 0.31 + drift, span, 0, 54);

  ctx.scale(1, -1);
  drawCantorCluster(-span / 2, -h * 0.31 - drift, span, 1, 54);
  ctx.restore();

  // Central divider line
  ctx.strokeStyle = 'rgba(17, 17, 17, 0.18)'; // 45/255
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, 22);
  ctx.lineTo(w * 0.5, h - 22);
  ctx.stroke();
}

function drawHalftoneRings(ctx, w, h, frameCount, level) {
  ctx.fillStyle = '#FAFAFA';
  ctx.fillRect(0, 0, w, h);

  ctx.lineWidth = 1.5;
  const spacing = 78;

  for (let x = spacing * 0.55; x < w; x += spacing) {
    for (let y = spacing * 0.45; y < h; y += spacing) {
      for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = getPrimaryColor(i + Math.floor(x / spacing), 118 / 255);
        const noiseVal = p5Noise(x * 0.01, y * 0.01, frameCount * 0.012 + i);
        const size = i * 14 + noiseVal * 30;

        ctx.beginPath();
        ctx.arc(x, y, size / 2, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  }
}

function drawWaveMarks(ctx, w, h, frameCount, level) {
  ctx.fillStyle = '#FAFAFA';
  ctx.fillRect(0, 0, w, h);

  const rowSpacing = 44;
  const rows = Math.ceil(h / rowSpacing);

  for (let r = 0; r < rows; r++) {
    ctx.strokeStyle = getPrimaryColor(r, 120 / 255);
    ctx.fillStyle = getPrimaryColor(r, 120 / 255);
    ctx.lineWidth = 2;

    for (let x = 0; x < w; x += 11) {
      const y = r * rowSpacing + 22 * Math.sin(x / 34 + frameCount * 0.018 + r * 0.6) + 9 * Math.cos(x / 55 + r);

      if (r % 2 === 0) {
        ctx.beginPath();
        ctx.arc(x, y, 4.5, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.moveTo(x - 5, y);
        ctx.lineTo(x + 5, y);
        ctx.stroke();
      }
    }
  }
}

function drawPrimaryGrid(ctx, w, h, frameCount, level, starsList) {
  ctx.fillStyle = '#FAFAFA';
  ctx.fillRect(0, 0, w, h);

  const cols = 7;
  const rows = 9;
  const cellW = w / cols;
  const cellH = h / rows;

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      if ((c + r + level) % 3 !== 0) continue;
      ctx.fillStyle = getPrimaryColor(c + r, 55 / 255);
      ctx.fillRect(c * cellW + 12, r * cellH + 12, cellW - 24, cellH - 24);
    }
  }

  // Draw grid lines
  ctx.strokeStyle = 'rgba(17, 17, 17, 0.35)'; // 90/255
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let c = 0; c <= cols; c++) {
    ctx.moveTo(c * cellW, 0);
    ctx.lineTo(c * cellW, h);
  }
  for (let r = 0; r <= rows; r++) {
    ctx.moveTo(0, r * cellH);
    ctx.lineTo(w, r * cellH);
  }
  ctx.stroke();

  // Draw stars/marks
  if (starsList) {
    for (const mark of starsList) {
      ctx.fillStyle = getPrimaryColor(mark.col, 80 / 255);
      if (mark.kind === 0) {
        ctx.fillRect(mark.x, mark.y, mark.s, mark.s);
      } else if (mark.kind === 1) {
        ctx.beginPath();
        ctx.arc(mark.x, mark.y, mark.s / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (mark.kind === 2) {
        ctx.save();
        ctx.translate(mark.x, mark.y);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(-mark.s * 0.4, -mark.s * 0.4, mark.s * 0.8, mark.s * 0.8);
        ctx.restore();
      }
    }
  }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  const canvases = document.querySelectorAll('canvas.catchfall-bg');
  const activeBgs = [];

  canvases.forEach(canvas => {
    const bgType = canvas.getAttribute('data-bg');

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      return { ctx, width: rect.width, height: rect.height };
    };

    const info = resize();
    let starsList = null;
    if (bgType === 'primary-grid') {
      starsList = getPrimaryGridStars(info.width / (info.height / 500), 500);
    }

    activeBgs.push({
      canvas,
      bgType,
      resize,
      starsList
    });
  });

  window.addEventListener('resize', () => {
    activeBgs.forEach(bg => {
      const info = bg.resize();
      if (bg.bgType === 'primary-grid') {
        bg.starsList = getPrimaryGridStars(info.width / (info.height / 500), 500);
      }
    });
  });

  let frameCount = 0;
  const loop = () => {
    frameCount++;
    activeBgs.forEach(bg => {
      const ctx = bg.canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      const w = bg.canvas.width / dpr;
      const h = bg.canvas.height / dpr;

      if (w <= 0 || h <= 0) return;

      const refHeight = 500;
      const scale = h / refHeight;
      const vWidth = w / scale;
      const vHeight = refHeight;

      ctx.save();
      ctx.scale(scale, scale);

      switch (bg.bgType) {
        case 'mod-stripes':
          drawModStripes(ctx, vWidth, vHeight, frameCount, 1);
          break;
        case 'bezier-clock':
          drawBezierClock(ctx, vWidth, vHeight, frameCount, 2);
          break;
        case 'cantor-field':
          drawCantorField(ctx, vWidth, vHeight, frameCount, 3);
          break;
        case 'halftone-rings':
          drawHalftoneRings(ctx, vWidth, vHeight, frameCount, 4);
          break;
        case 'wave-marks':
          drawWaveMarks(ctx, vWidth, vHeight, frameCount, 5);
          break;
        case 'primary-grid':
          drawPrimaryGrid(ctx, vWidth, vHeight, frameCount, 6, bg.starsList);
          break;
      }

      ctx.restore();
    });

    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
});
