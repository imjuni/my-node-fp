import * as gs from '#/getSep/getSep';
import { replaceSepToWin32 } from '#/replaceSepToWin32/replaceSepToWin32';
import { describe, expect, it, vitest } from 'vitest';

describe('replaceSepToWin32', () => {
  it('not changed directory', () => {
    const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '\\');
    const r01 = replaceSepToWin32('\\1\\2\\3\\4');
    handle.mockReset();

    expect(r01).toEqual('\\1\\2\\3\\4');
  });

  describe('win32', () => {
    it('starts with slash', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '/');
      const r01 = replaceSepToWin32('/1/2/3/4');
      handle.mockReset();

      expect(r01).toEqual('\\1\\2\\3\\4');
    });

    it('starts with dot', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '/');
      const r01 = replaceSepToWin32('./1/2/3/4');
      handle.mockReset();

      expect(r01).toEqual('.\\1\\2\\3\\4');
    });

    it('starts with alphabets', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '/');
      const r01 = replaceSepToWin32('1/2/3/4');
      handle.mockReset();

      expect(r01).toEqual('1\\2\\3\\4');
    });
  });
});
