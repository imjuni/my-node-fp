import os from 'node:os';
import path from 'node:path';

export function win32DriveLetterUpdown(targetPath: string, type?: 'upper' | 'lower') {
  if (os.platform() === 'win32') {
    const matched = /^([a-zA-Z]:)(.*)$/.exec(targetPath.trim());

    if (matched === null || matched === undefined) {
      return targetPath;
    }

    const [, driveChar, ...otherPath] = matched;

    /* c8 ignore start */
    if (driveChar == null) {
      return targetPath;
    }
    /* c8 ignore stop */

    return path.join(
      (type ?? 'upper') === 'upper' ? driveChar.toUpperCase() : driveChar.toLowerCase(),
      otherPath.join(''),
    );
  }

  return targetPath;
}
