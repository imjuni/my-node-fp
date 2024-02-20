import { isEmptyDirSync } from '#/isEmptyDirSync/isEmptyDirSync';
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it, vitest } from 'vitest';

describe('isEmptyDirSync', () => {
  it('empty directory', () => {
    const r01 = isEmptyDirSync(path.join(process.cwd(), 'empty-test'));
    expect(r01).toBeTruthy();
  });

  it('not empty directory', () => {
    const r01 = isEmptyDirSync(path.join(process.cwd(), 'src'));
    expect(r01).toBeFalsy();
  });

  it('not empty directory, only check directory', () => {
    const r01 = isEmptyDirSync(path.join(process.cwd(), 'src'), 'directory');
    expect(r01).toBeFalsy();
  });

  it('not empty directory, only check file', () => {
    const r01 = isEmptyDirSync(path.join(process.cwd(), 'src', 'alwaysSep'), 'file');
    expect(r01).toBeFalsy();
  });

  it('not empty directory, only check file', () => {
    const spy = vitest.spyOn(fs, 'readdirSync');

    spy.mockImplementationOnce(() => {
      throw new Error('raised');
    });

    expect(() => {
      isEmptyDirSync(path.join(process.cwd(), 'src', 'alwaysSep'), 'file');
    }).toThrowError();
    spy.mockReset();
  });
});
