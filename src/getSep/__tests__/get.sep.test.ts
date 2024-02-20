import { getSep } from '#/getSep/getSep';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

describe('getSep', () => {
  it('sep', () => {
    const r01 = getSep();
    expect(r01).toEqual(path.sep);
  });
});
