import { getSep } from '#/getSep/getSep';

export function startSepRemove(targetPath: string, sep?: string): string {
  const nonNullableSep = sep ?? getSep();

  if (targetPath.startsWith(nonNullableSep)) {
    return targetPath.substring(1, targetPath.length);
  }

  return targetPath;
}
