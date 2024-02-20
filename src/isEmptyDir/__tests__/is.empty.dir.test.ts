import { isEmptyDir } from '#/isEmptyDir/isEmptyDir';
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it, vitest } from 'vitest';

describe('isEmptyDir', () => {
  it('empty directory', async () => {
    const r01 = await isEmptyDir(path.join(process.cwd(), 'empty-test'));
    expect(r01).toBeTruthy();
  });

  it('not empty directory', async () => {
    const r01 = await isEmptyDir(path.join(process.cwd(), 'src'));
    expect(r01).toBeFalsy();
  });

  it('not empty directory, only check directory', async () => {
    const r01 = await isEmptyDir(path.join(process.cwd(), 'src'), 'directory');
    expect(r01).toBeFalsy();
  });

  it('not empty directory, only check file', async () => {
    const r01 = await isEmptyDir(path.join(process.cwd(), 'src', 'alwaysSep'), 'file');
    expect(r01).toBeFalsy();
  });

  it('not empty directory, only check file', async () => {
    const spy = vitest.spyOn(fs.promises, 'readdir');

    spy.mockImplementationOnce(() => {
      throw new Error('raised');
    });

    await expect(async () => {
      await isEmptyDir(path.join(process.cwd(), 'src', 'alwaysSep'), 'file');
    }).rejects.toThrowError();
    spy.mockReset();
  });
});
