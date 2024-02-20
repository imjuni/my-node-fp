import * as existsSync from '#/existsSync/existsSync';
import { getDirnameSync } from '#/getDirnameSync/getDirnameSync';
import path from 'node:path';
import { describe, expect, it, vi } from 'vitest';

describe('getDirname', () => {
  it('exists directory', () => {
    const r01 = getDirnameSync(path.join(process.cwd(), 'src'));
    expect(r01).toEqual(path.join(process.cwd(), 'src'));
  });

  it('not exists file', () => {
    const r01 = getDirnameSync(path.join(process.cwd(), 'null'));
    expect(r01).toEqual(process.cwd());
  });

  it('exists file', () => {
    const r01 = getDirnameSync(path.join(process.cwd(), '.gitignore'));
    expect(r01).toEqual(process.cwd());
  });

  it('excpetion', () => {
    const handle = vi.spyOn(existsSync, 'existsSync').mockImplementationOnce(() => {
      throw new Error('error');
    });

    expect(() => {
      getDirnameSync(path.join(process.cwd(), '.gitignore'));
    }).toThrow();

    handle.mockClear();
  });
});
