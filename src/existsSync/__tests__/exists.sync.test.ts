import { existsSync } from '#/existsSync/existsSync';
import path from 'path';
import { describe, expect, it } from 'vitest';

describe('existsSync', () => {
  it('exists directory', () => {
    const r01 = existsSync(path.join(process.cwd(), 'src'));
    expect(r01).toBeTruthy();
  });

  it('not exists directory', () => {
    const r01 = existsSync(path.join(process.cwd(), 'null'));
    expect(r01).toBeFalsy();
  });
});
