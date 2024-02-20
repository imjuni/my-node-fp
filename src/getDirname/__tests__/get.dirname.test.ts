import * as exists from '#/exists/exists';
import { getDirname } from '#/getDirname/getDirname';
import path from 'node:path';
import { describe, expect, it, vi } from 'vitest';

describe('getDirname', () => {
  it('exists directory', async () => {
    const r01 = await getDirname(path.join(process.cwd(), 'src'));
    expect(r01).toEqual(path.join(process.cwd(), 'src'));
  });

  it('not exists file', async () => {
    const r01 = await getDirname(path.join(process.cwd(), 'null'));
    expect(r01).toEqual(process.cwd());
  });

  it('exists file', async () => {
    const r01 = await getDirname(path.join(process.cwd(), '.gitignore'));
    expect(r01).toEqual(process.cwd());
  });

  it('excpetion', async () => {
    const handle = vi.spyOn(exists, 'exists').mockImplementationOnce(() => {
      throw new Error('error');
    });

    await expect(async () => {
      await getDirname(path.join(process.cwd(), '.gitignore'));
    }).rejects.toThrow();

    handle.mockClear();
  });
});
