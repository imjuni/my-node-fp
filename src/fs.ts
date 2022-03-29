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

export async function isDirectory(filepath: string): Promise<boolean> {
  try {
    const lstat = await fs.promises.lstat(filepath);

    return lstat.isDirectory();
  } catch (catched) {
    return false;
  }
}

export function replaceSepToPosix(targetPath: string): string {
  if (path.sep !== path.posix.sep) {
    const replaced = path.posix.join(...targetPath.split(path.sep));

    if (targetPath.startsWith(path.sep)) {
      return `${path.posix.sep}${replaced}`;
    }

    return replaced;
  }

  return targetPath;
}

export function replaceSepToWin32(targetPath: string): string {
  if (path.sep !== path.win32.sep) {
    const replaced = path.posix.join(...targetPath.split(path.sep));

    if (targetPath.startsWith(path.sep)) {
      return `${path.win32.sep}${replaced}`;
    }

    return replaced;
  }

  return targetPath;
}
