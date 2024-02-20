import { getSep } from '#/getSep/getSep';

export function startSepAppend(targetPath: string, sep?: string): string {
  const nonNullableSep = sep ?? getSep();

  if (targetPath.startsWith(nonNullableSep)) {
    return targetPath;
  }

  return `${nonNullableSep}${targetPath}`;
}
