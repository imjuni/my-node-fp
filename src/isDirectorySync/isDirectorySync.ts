import { existsSync } from '#/existsSync/existsSync';
import { isFalse } from 'my-easy-fp';
import fs from 'node:fs';

/**
 * check target is directory synchronous
 *
 * @param filePath target file path
 * @returns
 */
export function isDirectorySync(filePath: string): boolean {
  try {
    const filePathExists = existsSync(filePath);

    if (isFalse(filePathExists)) {
      return false;
    }

    const lstat = fs.lstatSync(filePath);

    return lstat.isDirectory();
  } catch {
    return false;
  }
}
