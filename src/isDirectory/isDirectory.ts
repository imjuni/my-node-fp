import { exists } from '#/exists/exists';
import { isFalse } from 'my-easy-fp';
import fs from 'node:fs';

/**
 * check target is directory
 *
 * @param filePath - target file path
 * @returns
 */
export async function isDirectory(filePath: string): Promise<boolean> {
  try {
    const filePathExists = await exists(filePath);

    if (isFalse(filePathExists)) {
      return false;
    }

    const lstat = await fs.promises.lstat(filePath);

    return lstat.isDirectory();
  } catch {
    return false;
  }
}
