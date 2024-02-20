import { isEmpty } from 'my-easy-fp';
import fs from 'node:fs';

/**
 * check file existing, if file exists return true, don't exists return false
 * @param filePath - filename with path
 */
export async function exists(filePath: string): Promise<boolean> {
  try {
    const accessed = await fs.promises.access(filePath);
    return isEmpty(accessed);
  } catch (err) {
    return false;
  }
}
