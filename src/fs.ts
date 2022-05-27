import * as fs from 'fs';
import { isEmpty } from 'my-easy-fp';
import * as path from 'path';

/**
 * check file existing, if file exists return true, don't exists return false
 * @param filepath filename with path
 */
export async function exists(filepath: string): Promise<boolean> {
  try {
    const accessed = await fs.promises.access(filepath);
    return isEmpty(accessed);
  } catch (err) {
    return false;
  }
}

/**
 * check file existing, if file exists return true, don't exists return false
 * @param filepath filename with path
 */
export function existsSync(filepath: string): boolean {
  try {
    fs.accessSync(filepath);
    return true;
  } catch (err) {
    return false;
  }
}

/**
 * return directory name without filename. If target path is directory name that return same name but
 * target path is file name that return directory name.
 *
 * @param filepath target path
 * @returns directory name
 */
export async function getDirname(filepath: string): Promise<string> {
  try {
    const lstat = await fs.promises.lstat(filepath);

    if (lstat.isDirectory()) {
      return filepath;
    }

    const dirname = path.dirname(filepath);

    return dirname;
  } catch (catched) {
    const err =
      catched instanceof Error ? catched : new Error(`unknown error from dirname: ${filepath}`);

    throw err;
  }
}

/**
 * return directory name without filename. If target path is directory name that return same name but
 * target path is file name that return directory name.
 *
 * Synchronous version of getDirname
 *
 * @param filepath target path
 * @returns directory name
 */
export function getDirnameSync(filepath: string): string {
  try {
    const lstat = fs.lstatSync(filepath);

    if (lstat.isDirectory()) {
      return filepath;
    }

    const dirname = path.dirname(filepath);

    return dirname;
  } catch (catched) {
    const err =
      catched instanceof Error ? catched : new Error(`unknown error from dirname: ${filepath}`);

    throw err;
  }
}

export async function isDirectory(filepath: string): Promise<boolean> {
  try {
    const lstat = await fs.promises.lstat(filepath);

    return lstat.isDirectory();
  } catch (catched) {
    return false;
  }
}

export function isDirectorySync(filepath: string): boolean {
  try {
    const lstat = fs.lstatSync(filepath);

    return lstat.isDirectory();
  } catch (catched) {
    return false;
  }
}
