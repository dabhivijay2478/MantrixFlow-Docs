#!/usr/bin/env node
/**
 * Regenerates logo-wordmark-light.svg / logo-wordmark-dark.svg from images/m.png.
 * Dark treatment matches apps/app/components/logo.tsx (mark → primary #00a859).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const pngPath = join(root, "images", "m.png");
const png = readFileSync(pngPath);
const dataUri = `data:image/png;base64,${png.toString("base64")}`;

// feColorMatrix: map alpha-weighted luminance to brand green (R=0, G/B from A)
const greenMatrix =
  "0 0 0 0 0  0 0 0 0.6588235294117647 0  0 0 0 0.34901960784313724 0  0 0 0 1 0";

/** Wordmark type size (px). Mintlify scales the SVG in the navbar; large intrinsic size = sharp text. */
const fontPx = 60;
const icon = 56;
const gap = 18;
const h = 88;
const w = 520;
const iconY = (h - icon) / 2;
const textX = icon + gap;
const textY = h / 2;
const textTuning = `letter-spacing="-0.04em" text-rendering="geometricPrecision"`;
const textAttrs = `dominant-baseline="central" text-anchor="start" x="${textX}" y="${textY}" ${textTuning}`;

const light = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="MantrixFlow">
  <defs>
    <linearGradient id="mf-word-light" x1="0%" y1="0%" x2="100%" y2="80%">
      <stop offset="0%" stop-color="#09090b" />
      <stop offset="55%" stop-color="#27272a" />
      <stop offset="100%" stop-color="#3f3f46" />
    </linearGradient>
  </defs>
  <image href="${dataUri}" x="0" y="${iconY}" width="${icon}" height="${icon}" preserveAspectRatio="xMidYMid meet" />
  <text ${textAttrs} font-family="Geist, ui-sans-serif, system-ui, sans-serif" font-size="${fontPx}" font-weight="600" fill="url(#mf-word-light)">MantrixFlow</text>
</svg>
`;

const dark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="MantrixFlow">
  <defs>
    <filter id="m-brand-green" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="${greenMatrix}" />
    </filter>
    <linearGradient id="mf-word-dark" x1="0%" y1="0%" x2="100%" y2="70%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="45%" stop-color="#fafafa" />
      <stop offset="100%" stop-color="#d4d4d8" />
    </linearGradient>
  </defs>
  <image href="${dataUri}" x="0" y="${iconY}" width="${icon}" height="${icon}" preserveAspectRatio="xMidYMid meet" filter="url(#m-brand-green)" />
  <text ${textAttrs} font-family="Geist, ui-sans-serif, system-ui, sans-serif" font-size="${fontPx}" font-weight="600" fill="url(#mf-word-dark)">MantrixFlow</text>
</svg>
`;

writeFileSync(join(root, "images", "logo-wordmark-light.svg"), light);
writeFileSync(join(root, "images", "logo-wordmark-dark.svg"), dark);
console.log("Wrote images/logo-wordmark-light.svg and images/logo-wordmark-dark.svg");
