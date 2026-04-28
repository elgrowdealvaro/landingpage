// Concatena sections/0*.html → index.html
// Cada partial es un HTML completo (abrible solo) con marcadores #section:start / #section:end.
// El build extrae solo el contenido entre marcadores y lo envuelve con _shell.html.
//
// Uso: node build.mjs

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SECTIONS_DIR = join(__dirname, 'sections');
const SHELL_PATH = join(SECTIONS_DIR, '_shell.html');
const OUT_PATH = join(__dirname, 'index.html');

const SECTION_RE = /<!--\s*#section:start\s*-->([\s\S]*?)<!--\s*#section:end\s*-->/;

const files = readdirSync(SECTIONS_DIR)
  .filter((f) => /^\d+-.*\.html$/.test(f))
  .sort();

if (!files.length) {
  console.error('No se encontraron secciones (sections/0*.html)');
  process.exit(1);
}

const body = files
  .map((f) => {
    const html = readFileSync(join(SECTIONS_DIR, f), 'utf8');
    const m = html.match(SECTION_RE);
    if (!m) throw new Error(`Marcadores #section faltantes en ${f}`);
    return m[1].trim();
  })
  .join('\n\n');

const shell = readFileSync(SHELL_PATH, 'utf8');
if (!shell.includes('<!-- #content -->')) {
  throw new Error('Falta el marcador <!-- #content --> en _shell.html');
}
writeFileSync(OUT_PATH, shell.replace('<!-- #content -->', body));

console.log(`✓ index.html generado (${files.length} secciones)`);
files.forEach((f) => console.log(`  · ${f}`));
