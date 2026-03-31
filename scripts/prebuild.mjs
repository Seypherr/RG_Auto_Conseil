import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const parcelCacheDir = path.join(rootDir, '.parcel-cache');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function removeDistWithRetry(targetPath) {
  for (let attempt = 0; attempt < 5; attempt += 1) {
    try {
      fs.rmSync(targetPath, { recursive: true, force: true, maxRetries: 3, retryDelay: 80 });
      return;
    } catch (error) {
      const isParcelCacheLock =
        targetPath === parcelCacheDir && (error?.code === 'EBUSY' || error?.code === 'EPERM');

      if (isParcelCacheLock) {
        console.warn(`[prebuild] Parcel cache cleanup skipped because it is locked: ${targetPath}`);
        return;
      }

      if (attempt === 4) {
        throw error;
      }

      await sleep(120 * (attempt + 1));
    }
  }
}

await removeDistWithRetry(distDir);
await removeDistWithRetry(parcelCacheDir);
