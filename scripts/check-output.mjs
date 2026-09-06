import { readdir, readFile, stat } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';

const root = resolve('dist');
const base = (process.env.BASE_PATH || '/').replace(/^\//, '').replace(/\/$/, '');
const failures = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => entry.isDirectory() ? walk(join(directory, entry.name)) : [join(directory, entry.name)]))).flat();
}

function localPath(raw) {
  if (!raw || /^(https?:|mailto:|tel:|data:|#)/.test(raw)) return null;
  const clean = raw.split(/[?#]/)[0];
  let pathname = clean.startsWith('/') ? clean.slice(1) : clean;
  if (base && pathname.startsWith(`${base}/`)) pathname = pathname.slice(base.length + 1);
  return pathname;
}

async function exists(target) {
  const path = join(root, target);
  try {
    const info = await stat(path);
    if (info.isDirectory()) await stat(join(path, 'index.html'));
    return true;
  } catch {
    if (!extname(path)) {
      try { await stat(`${path}.html`); return true; } catch { /* handled below */ }
    }
    return false;
  }
}

for (const file of (await walk(root)).filter((path) => path.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  const imageTags = html.match(/<img\b[^>]*>/g) || [];
  for (const tag of imageTags) {
    if (!/\balt=(['"])[\s\S]*?\1/.test(tag)) failures.push(`${file}: image is missing alt text`);
  }
  const attributes = [...html.matchAll(/\b(?:href|src)=(['"])(.*?)\1/g)].map((match) => match[2]);
  for (const value of attributes) {
    if (/(?:\/tmp\/|source-assets\/|scholaraio\/|\/Users\/)/.test(value)) failures.push(`${file}: published reference exposes a non-public source path ${value}`);
    const target = localPath(value);
    if (target !== null && !(await exists(target))) failures.push(`${file}: broken internal reference ${value}`);
  }
  const figureBlocks = html.match(/<figure\b[\s\S]*?<\/figure>/g) || [];
  for (const figure of figureBlocks) {
    if (!/<figcaption\b/.test(figure)) failures.push(`${file}: figure is missing a caption`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('Output validation passed: links, public asset paths, image alternatives, and figure captions are present.');
