import { getSep } from '#/getSep/getSep';

export function endSepRemove(targetPath: string, sep?: string): string {
  const nonNullableSep = sep ?? getSep();

  if (targetPath.endsWith(nonNullableSep)) {
    return targetPath.substring(0, targetPath.length - 1);
  }

  return targetPath;
}
