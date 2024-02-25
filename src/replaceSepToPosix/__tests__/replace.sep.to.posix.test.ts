import * as gs from '#/getSep/getSep';
import { replaceSepToPosix } from '#/replaceSepToPosix/replaceSepToPosix';
import { describe, expect, it, vitest } from 'vitest';

describe('replaceSepToPosix', () => {
  it('not changed directory', () => {
    const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '/');
    const r01 = replaceSepToPosix('/1/2/3/4');
    handle.mockRestore();

    expect(r01).toEqual('/1/2/3/4');
  });

  describe('win32', () => {
    it('empty directory', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '\\');
      const r01 = replaceSepToPosix('');
      handle.mockRestore();
      expect(r01).toEqual('');
    });

    it('starts with slash', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '\\');
      const r01 = replaceSepToPosix('\\1\\2\\3\\4');
      handle.mockRestore();
      expect(r01).toEqual('/1/2/3/4');
    });

    it('single dot', () => {
      const r01 = replaceSepToPosix('.');
      expect(r01).toEqual('.');
    });

    it('double dot', () => {
      const r01 = replaceSepToPosix('..');
      expect(r01).toEqual('..');
    });

    it('starts with dot - 1', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '\\');
      const r01 = replaceSepToPosix('.\\1');
      handle.mockRestore();
      expect(r01).toEqual('./1');
    });

    it('starts with dot - 2', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '\\');
      const r01 = replaceSepToPosix('.\\1\\2\\3\\4');
      handle.mockRestore();
      expect(r01).toEqual('./1/2/3/4');
    });

    it('starts with double dot - 1', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '\\');
      const r01 = replaceSepToPosix('..\\1');
      handle.mockRestore();
      expect(r01).toEqual('../1');
    });

    it('starts with double dot - 2', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '\\');
      const r01 = replaceSepToPosix('..\\1\\2\\3\\4');
      handle.mockRestore();
      expect(r01).toEqual('../1/2/3/4');
    });

    it('starts with alphabets', () => {
      const handle = vitest.spyOn(gs, 'getSep').mockImplementationOnce(() => '\\');
      const r01 = replaceSepToPosix('1\\2\\3\\4');
      handle.mockRestore();
      expect(r01).toEqual('1/2/3/4');
    });
  });
});
