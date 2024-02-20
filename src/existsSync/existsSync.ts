import fs from 'node:fs';

/**
 * check file existing, if file exists return true, don't exists return false
 * @param filePath - filename with path
 */
export function existsSync(filePath: string): boolean {
  try {
    fs.accessSync(filePath);
    return true;
  } catch (err) {
    return false;
  }
}
