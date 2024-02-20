import { isError } from 'my-easy-fp';
import fs from 'node:fs';

/**
 * check directory is empty
 *
 * @param filePath - target file path
 * @param type - can set directory element type: file only file count, type: directyory: only, not pass count all
 * @returns if return true that direcory empty
 */
export async function isEmptyDir(filePath: string, type?: 'directory' | 'file'): Promise<boolean> {
  try {
    if (type === 'directory') {
      const children = await fs.promises.readdir(filePath, { withFileTypes: true });
      return children.filter((child) => child.isDirectory()).length <= 0;
    }

    if (type === 'file') {
      const children = await fs.promises.readdir(filePath, { withFileTypes: true });
      return children.filter((child) => child.isFile()).length <= 0;
    }

    const children = await fs.promises.readdir(filePath);
    return children.length <= 0;
  } catch (caught) {
    const err = isError(caught, new Error(`unknown error from filepath: ${filePath}`));
    throw err;
  }
}
