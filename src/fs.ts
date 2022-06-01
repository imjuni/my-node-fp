import * as fs from 'fs';
import { isEmpty } from 'my-easy-fp';
import * as path from 'path';

/**
 * check file existing, if file exists return true, don't exists return false
 * @param filePath filename with path
 */
export async function exists(filePath: string): Promise<boolean> {
  try {
    const accessed = await fs.promises.access(filePath);
    return isEmpty(accessed);
  } catch (err) {
    return false;
  }
}

/**
 * check file existing, if file exists return true, don't exists return false
 * @param filePath filename with path
 */
export function existsSync(filePath: string): boolean {
  try {
    fs.accessSync(filePath);
    return true;
  } catch (err) {
    return false;
  }
}

/**
 * return directory name without filename. If target path is directory name that return same name but
 * target path is file name that return directory name.
 *
 * @param filePath target path
 * @returns directory name
 */
export async function getDirname(filePath: string): Promise<string> {
  try {
    const lstat = await fs.promises.lstat(filePath);

    if (lstat.isDirectory()) {
      return filePath;
    }

    const dirname = path.dirname(filePath);

    return dirname;
  } catch (catched) {
    const err =
      catched instanceof Error ? catched : new Error(`unknown error from dirname: ${filePath}`);

    throw err;
  }
}

/**
 * return directory name without filename. If target path is directory name that return same name but
 * target path is file name that return directory name.
 *
 * Synchronous version of getDirname
 *
 * @param filePath target path
 * @returns directory name
 */
export function getDirnameSync(filePath: string): string {
  try {
    const lstat = fs.lstatSync(filePath);

    if (lstat.isDirectory()) {
      return filePath;
    }

    const dirname = path.dirname(filePath);

    return dirname;
  } catch (catched) {
    const err =
      catched instanceof Error ? catched : new Error(`unknown error from dirname: ${filePath}`);

    throw err;
  }
}

/**
 * check target is directory
 *
 * @param filePath target file path
 * @returns
 */
export async function isDirectory(filePath: string): Promise<boolean> {
  try {
    const lstat = await fs.promises.lstat(filePath);

    return lstat.isDirectory();
  } catch (catched) {
    return false;
  }
}

/**
 * check target is directory synchronous
 *
 * @param filePath target file path
 * @returns
 */
export function isDirectorySync(filePath: string): boolean {
  try {
    const lstat = fs.lstatSync(filePath);

    return lstat.isDirectory();
  } catch (catched) {
    return false;
  }
}

/**
 * check directory is empty
 *
 * @param filePath target file path
 * @param type  can set directory element type: file only file count, type: directyory: only, not pass count all
 * @returns
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
  } catch (catched) {
    const err =
      catched instanceof Error ? catched : new Error(`unknown error from filepath: ${filePath}`);

    throw err;
  }
}

/**
 * check directory is empty synchronous
 *
 * @param filePath target file path
 * @param type  can set directory element type: file only file count, type: directyory: only, not pass count all
 * @returns if return true that direcory empty
 */
export function isEmptyDirSync(filePath: string, type?: 'directory' | 'file'): boolean {
  try {
    if (type === 'directory') {
      const children = fs.readdirSync(filePath, { withFileTypes: true });
      return children.filter((child) => child.isDirectory()).length <= 0;
    }

    if (type === 'file') {
      const children = fs.readdirSync(filePath, { withFileTypes: true });
      return children.filter((child) => child.isFile()).length <= 0;
    }

    const children = fs.readdirSync(filePath);
    return children.length <= 0;
  } catch (catched) {
    const err =
      catched instanceof Error ? catched : new Error(`unknown error from filepath: ${filePath}`);

    throw err;
  }
}

/**
 * check target directory is descendant of parent directory
 *
 * @param parentDirPath parent directory path
 * @param targetDirPath child directory path
 * @returns if return true child directory is descendant of parent directory
 */
export function isDescendant(parentDirPath: string, targetDirPath: string, sep?: string): boolean {
  const parentDirPathTokens = parentDirPath.split(sep ?? path.sep);
  const targetDirPathTokens = targetDirPath.split(sep ?? path.sep);
  return parentDirPathTokens.every((token, index) => targetDirPathTokens[index] === token);
}
