import { getSep } from '#/getSep/getSep';

/**
 * check target directory is descendant of parent directory
 *
 * @param parentDirPath parent directory path
 * @param targetDirPath child directory path
 * @returns if return true child directory is descendant of parent directory
 */
export function isDescendant(parentDirPath: string, targetDirPath: string, sep?: string): boolean {
  const parentDirPathTokens = parentDirPath.split(sep ?? getSep());
  const targetDirPathTokens = targetDirPath.split(sep ?? getSep());
  return parentDirPathTokens.every((token, index) => targetDirPathTokens[index] === token);
}
