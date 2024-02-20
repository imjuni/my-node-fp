import { existsSync } from '#/existsSync/existsSync';
import { isError, isFalse } from 'my-easy-fp';
import * as fs from 'node:fs';
import * as path from 'node:path';

/**
 * return directory name without filename. If target path is directory name that return same name but
 * target path is file name that return directory name.
 *
 * Synchronous version of getDirname
 *
 * @param filePath - target path
 * @returns directory name
 */
export function getDirnameSync(filePath: string): string {
  try {
    const filePathExists = existsSync(filePath);

    if (isFalse(filePathExists)) {
      return path.dirname(filePath);
    }

    const lstat = fs.lstatSync(filePath);

    if (lstat.isDirectory()) {
      return filePath;
    }

    const dirname = path.dirname(filePath);

    return dirname;
  } catch (caught) {
    const err = isError(caught, new Error(`unknown error from dirname: ${filePath}`));

    throw err;
  }
}
