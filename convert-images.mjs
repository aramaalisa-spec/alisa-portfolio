import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join, extname, basename } from 'path';

const dir = './public/uploads';
const files = readdirSync(dir).filter(f => extname(f).toLowerCase() === '.png');

for (const file of files) {
  const input = join(dir, file);
  const output = join(dir, basename(file, '.png') + '.webp');
  await sharp(input).webp({ quality: 85 }).toFile(output);
  console.log(`✓ ${file} → ${basename(file, '.png')}.webp`);
}
console.log(`\nDone! Converted ${files.length} images.`);
