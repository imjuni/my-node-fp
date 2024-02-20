import { endSepAppend } from '#/endSepAppend/endSepAppend';
import { endSepRemove } from '#/endSepRemove/endSepRemove';
import { startSepAppend } from '#/startSepAppend/startSepAppend';
import { startSepRemove } from '#/startSepRemove/startSepRemove';

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
