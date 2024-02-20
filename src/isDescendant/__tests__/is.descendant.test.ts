import { isDescendant } from '#/isDescendant/isDescendant';
import { describe, expect, it } from 'vitest';

describe('isDescendant', () => {
  it('descendant', () => {
    const r01 = isDescendant('/1/2/3/4', '/1/2/3/4/5');
    expect(r01).toBeTruthy();
  });

  it('not descendant', () => {
    const r01 = isDescendant('/1/2/3/4', '/1/2/a/b/c');
    expect(r01).toBeFalsy();
  });
});
