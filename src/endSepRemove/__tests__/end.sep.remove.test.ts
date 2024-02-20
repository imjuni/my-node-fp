import { endSepRemove } from '#/endSepRemove/endSepRemove';
import { describe, expect, it } from 'vitest';

describe('endSepRemove', () => {
  it('without end slash', () => {
    const r01 = endSepRemove('/1/2/3');
    expect(r01).toEqual('/1/2/3');
  });

  it('with end slash', () => {
    const r01 = endSepRemove('/1/2/3/');
    expect(r01).toEqual('/1/2/3');
  });
});
