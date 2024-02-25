import { getSep } from '#/getSep/getSep';
import path from 'node:path';

export function replaceSepToWin32(targetPath: string): string {
  const sep = getSep();

  if (targetPath === '') {
    return targetPath;
  }

  if (targetPath.trim() === '.') {
    return targetPath.trim();
  }

  if (targetPath.trim() === '..') {
    return targetPath.trim();
  }

  if (sep !== path.win32.sep) {
    const replaced = path.win32.join(...targetPath.split(sep));

    if (targetPath.startsWith(sep)) {
      return `${path.win32.sep}${replaced}`;
    }

    if (targetPath.startsWith('..') && !replaced.startsWith(sep)) {
      return replaced;
    }

    if (targetPath.startsWith('.') && !replaced.startsWith(sep)) {
      return ['.', replaced].join(path.win32.sep);
    }

    return replaced;
  }

  return targetPath;
}
