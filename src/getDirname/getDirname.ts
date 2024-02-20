import { exists } from '#/exists/exists';
import { isError, isFalse } from 'my-easy-fp';
import * as fs from 'node:fs';
import * as path from 'node:path';

/**
 * return directory name without filename. If target path is directory name that return same name but
 * target path is file name that return directory name.
 *
 * @param filePath - target path
 * @returns directory name
 */
export async function getDirname(filePath: string): Promise<string> {
  try {
    const filePathExists = await exists(filePath);

    if (isFalse(filePathExists)) {
      return path.dirname(filePath);
    }

    const lstat = await fs.promises.lstat(filePath);

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
