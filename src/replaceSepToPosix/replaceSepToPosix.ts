import { getSep } from '#/getSep/getSep';
import path from 'node:path';

export function replaceSepToPosix(targetPath: string): string {
  const sep = getSep();

  if (targetPath === '') {
    return targetPath;
  }

  if (sep !== path.posix.sep) {
    const replaced = path.posix.join(...targetPath.split(sep));

    if (targetPath.startsWith(sep)) {
      return `${path.posix.sep}${replaced}`;
    }

    if (targetPath.startsWith('..') && !replaced.startsWith(sep)) {
      return replaced;
    }

    if (targetPath.startsWith('.') && !replaced.startsWith(sep)) {
      return ['.', replaced].join(path.posix.sep);
    }

    return replaced;
  }

  return targetPath;
}
