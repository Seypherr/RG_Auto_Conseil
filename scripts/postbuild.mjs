import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const publicHtaccess = path.join(rootDir, 'public', '.htaccess');
const distHtaccess = path.join(rootDir, 'dist', '.htaccess');

if (fs.existsSync(publicHtaccess)) {
  fs.copyFileSync(publicHtaccess, distHtaccess);
}
