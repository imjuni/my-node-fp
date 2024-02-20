import { startSepRemove } from '#/startSepRemove/startSepRemove';
import { describe, expect, it } from 'vitest';

describe('startSepRemove', () => {
  it('without start slash', () => {
    const r01 = startSepRemove('1/2/3/');
    expect(r01).toEqual('1/2/3/');
  });

  it('with start slash', () => {
    const r01 = startSepRemove('/1/2/3/');
    expect(r01).toEqual('1/2/3/');
  });
});
