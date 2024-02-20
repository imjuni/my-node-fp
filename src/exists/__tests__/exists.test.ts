import { exists } from '#/exists/exists';
import path from 'path';
import { describe, expect, it } from 'vitest';

describe('exists', () => {
  it('exists directory', async () => {
    const r01 = await exists(path.join(process.cwd(), 'src'));
    expect(r01).toBeTruthy();
  });

  it('not exists directory', async () => {
    const r01 = await exists(path.join(process.cwd(), 'null'));
    expect(r01).toBeFalsy();
  });
});
