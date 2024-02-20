import * as path from 'node:path';

export function basenames(filename: string, suffix?: string | string[]): string {
  const base = path.basename(filename);

  if (suffix == null) {
    return base;
  }

  const ext = path.extname(filename);
  const finded = (Array.isArray(suffix) ? suffix : [suffix]).find((s) => s === ext);

  return finded == null ? base : path.basename(filename, ext);
}
