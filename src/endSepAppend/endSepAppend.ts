import { getSep } from '#/getSep/getSep';

export function endSepAppend(targetPath: string, sep?: string): string {
  const nonNullableSep = sep ?? getSep();

  if (targetPath.endsWith(nonNullableSep)) {
    return targetPath;
  }

  return `${targetPath}${nonNullableSep}`;
}
