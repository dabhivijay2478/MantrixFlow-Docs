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

const light = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 32" width="220" height="32" role="img" aria-label="MantrixFlow">
  <image href="${dataUri}" x="0" y="2" width="28" height="28" preserveAspectRatio="xMidYMid meet" />
  <text x="36" y="22" font-family="Geist, ui-sans-serif, system-ui, sans-serif" font-size="17" font-weight="600" fill="#09090b">MantrixFlow</text>
</svg>
`;

const dark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 32" width="220" height="32" role="img" aria-label="MantrixFlow">
  <defs>
    <filter id="m-brand-green" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="${greenMatrix}" />
    </filter>
  </defs>
  <image href="${dataUri}" x="0" y="2" width="28" height="28" preserveAspectRatio="xMidYMid meet" filter="url(#m-brand-green)" />
  <text x="36" y="22" font-family="Geist, ui-sans-serif, system-ui, sans-serif" font-size="17" font-weight="600" fill="#fafafa">MantrixFlow</text>
</svg>
`;

writeFileSync(join(root, "images", "logo-wordmark-light.svg"), light);
writeFileSync(join(root, "images", "logo-wordmark-dark.svg"), dark);
console.log("Wrote images/logo-wordmark-light.svg and images/logo-wordmark-dark.svg");
