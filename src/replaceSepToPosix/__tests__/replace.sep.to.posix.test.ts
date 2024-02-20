import * as gs from '#/getSep/getSep';
import { replaceSepToPosix } from '#/replaceSepToPosix/replaceSepToPosix';
import { describe, expect, it, vitest } from 'vitest';

describe('replaceSepToPosix', () => {
  it('not changed directory', () => {
    const r01 = replaceSepToPosix('/1/2/3/4');
    expect(r01).toEqual('/1/2/3/4');
  });

  describe('win32', () => {
    it('starts with slash', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '\\');
      const r01 = replaceSepToPosix('\\1\\2\\3\\4');

      handle.mockClear();
      expect(r01).toEqual('/1/2/3/4');
    });

    it('starts with dot', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '\\');
      const r01 = replaceSepToPosix('.\\1\\2\\3\\4');

      handle.mockClear();
      expect(r01).toEqual('./1/2/3/4');
    });

    it('starts with alphabets', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '\\');
      const r01 = replaceSepToPosix('1\\2\\3\\4');

      handle.mockClear();
      expect(r01).toEqual('1/2/3/4');
    });
  });
});
