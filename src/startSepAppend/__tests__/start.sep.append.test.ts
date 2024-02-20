import { startSepAppend } from '#/startSepAppend/startSepAppend';
import { describe, expect, it } from 'vitest';

describe('startSepAppend', () => {
  it('without start slash', () => {
    const r01 = startSepAppend('1/2/3/');
    expect(r01).toEqual('/1/2/3/');
  });

  it('with start slash', () => {
    const r01 = startSepAppend('/1/2/3/');
    expect(r01).toEqual('/1/2/3/');
  });
});
