import * as gs from '#/getSep/getSep';
import { replaceSepToWin32 } from '#/replaceSepToWin32/replaceSepToWin32';
import { describe, expect, it, vitest } from 'vitest';

describe('replaceSepToWin32', () => {
  it('not changed directory', () => {
    const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '\\');
    const r01 = replaceSepToWin32('\\1\\2\\3\\4');
    handle.mockRestore();

    expect(r01).toEqual('\\1\\2\\3\\4');
  });

  describe('posix', () => {
    it('empty directory', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '/');
      const r01 = replaceSepToWin32('');
      handle.mockRestore();
      expect(r01).toEqual('');
    });

    it('single dot', () => {
      const r01 = replaceSepToWin32('.');
      expect(r01).toEqual('.');
    });

    it('double dot', () => {
      const r01 = replaceSepToWin32('..');
      expect(r01).toEqual('..');
    });

    it('starts with slash', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '/');
      const r01 = replaceSepToWin32('/1/2/3/4');
      handle.mockRestore();
      expect(r01).toEqual('\\1\\2\\3\\4');
    });

    it('starts with dot - 1', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '/');
      const r01 = replaceSepToWin32('./1');
      handle.mockRestore();
      expect(r01).toEqual('.\\1');
    });

    it('starts with dot - 2', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '/');
      const r01 = replaceSepToWin32('./1/2/3/4');
      handle.mockRestore();
      expect(r01).toEqual('.\\1\\2\\3\\4');
    });

    it('starts with double dot - 1', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '/');
      const r01 = replaceSepToWin32('../1');
      handle.mockRestore();
      expect(r01).toEqual('..\\1');
    });

    it('starts with double dot - 2', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '/');
      const r01 = replaceSepToWin32('../1/2/3/4');
      handle.mockRestore();
      expect(r01).toEqual('..\\1\\2\\3\\4');
    });

    it('starts with alphabets', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '/');
      const r01 = replaceSepToWin32('1/2/3/4');
      handle.mockRestore();
      expect(r01).toEqual('1\\2\\3\\4');
    });
  });
});
