import * as path from 'path';
import * as os from 'os';

export function win32DriveLetterUpdown(targetPath: string, type?: 'upper' | 'lower') {
  if (os.platform() === 'win32') {
    const matched = /^([a-zA-Z]:)(.+)$/.exec(targetPath.trim());

    if (matched === null || matched === undefined || matched.length < 3) {
      return targetPath;
    }

    return path.join(
      (type ?? 'upper') === 'upper' ? matched[1].toUpperCase() : matched[1].toLowerCase(),
      matched[2],
    );
  }

  return targetPath;
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

export function startSepAppend(targetPath: string, sep?: string): string {
  const nonNullableSep = sep ?? path.sep;

  if (targetPath.startsWith(nonNullableSep)) {
    return targetPath;
  }

  return `${nonNullableSep}${targetPath}`;
}

export function endSepAppend(targetPath: string, sep?: string): string {
  const nonNullableSep = sep ?? path.sep;

  if (targetPath.endsWith(nonNullableSep)) {
    return targetPath;
  }

  return `${targetPath}${nonNullableSep}`;
}

export function startSepRemove(targetPath: string, sep?: string): string {
  const nonNullableSep = sep ?? path.sep;

  if (targetPath.startsWith(nonNullableSep)) {
    return targetPath.substring(1, targetPath.length);
  }

  return targetPath;
}

export function endSepRemove(targetPath: string, sep?: string): string {
  const nonNullableSep = sep ?? path.sep;

  if (targetPath.endsWith(nonNullableSep)) {
    return targetPath.substring(0, targetPath.length - 1);
  }

  return targetPath;
}

export function alwaysSep(
  targetPath: string,
  options: {
    type: 'start_sep_remove' | 'start_sep_append' | 'end_sep_remove' | 'end_sep_append';
    sep?: string;
  },
): string {
  try {
    if (options.type === 'start_sep_remove') {
      return startSepRemove(targetPath, options.sep);
    }

    if (options.type === 'start_sep_append') {
      return startSepAppend(targetPath, options.sep);
    }

    if (options.type === 'end_sep_remove') {
      return endSepRemove(targetPath, options.sep);
    }

    return endSepAppend(targetPath, options.sep);
  } catch {
    return targetPath;
  }
}
