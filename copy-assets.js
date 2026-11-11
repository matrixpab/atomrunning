import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Ensure dist/assets has all original assets (js, css, img, video)
const srcAssets = path.join(__dirname, 'assets');
const distAssets = path.join(__dirname, 'dist', 'assets');

console.log('Copying assets/ to dist/assets/ for production deployment...');
copyDir(srcAssets, distAssets);
console.log('Assets copied successfully.');
