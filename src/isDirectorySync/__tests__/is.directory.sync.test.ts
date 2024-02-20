import { isDirectorySync } from '#/isDirectorySync/isDirectorySync';
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it, vitest } from 'vitest';

describe('isDirectorySync', () => {
  it('not exists', async () => {
    const r01 = isDirectorySync(path.join(process.cwd(), 'null'));
    expect(r01).toBeFalsy();
  });

  it('exception', async () => {
    const spy = vitest.spyOn(fs, 'lstatSync');
    spy.mockImplementationOnce(() => {
      throw new Error('raised');
    });

    const r01 = isDirectorySync(path.join(process.cwd(), 'src'));
    spy.mockRestore();

    expect(r01).toBeFalsy();
  });

  it('is directory', async () => {
    const r01 = isDirectorySync(path.join(process.cwd(), 'src'));
    expect(r01).toBeTruthy();
  });

  it('not directory', async () => {
    const r01 = isDirectorySync(path.join(process.cwd(), '.gitignore'));
    expect(r01).toBeFalsy();
  });
});
