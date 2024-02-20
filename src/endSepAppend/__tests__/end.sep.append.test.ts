import { endSepAppend } from '#/endSepAppend/endSepAppend';
import { describe, expect, it } from 'vitest';

describe('endSepAppend', () => {
  it('without end slash', () => {
    const r01 = endSepAppend('/1/2/3');
    expect(r01).toEqual('/1/2/3/');
  });

  it('with end slash', () => {
    const r01 = endSepAppend('/1/2/3/');
    expect(r01).toEqual('/1/2/3/');
  });
});
