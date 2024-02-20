import { alwaysSep } from '#/alwaysSep/alwaysSep';
import * as startSepRemove from '#/startSepRemove/startSepRemove';
import { describe, expect, it, vitest } from 'vitest';

describe('alwaysSep', () => {
  it('exception', () => {
    const spy = vitest.spyOn(startSepRemove, 'startSepRemove');
    spy.mockImplementationOnce(() => {
      throw new Error('raised');
    });

    const r01 = alwaysSep('/1/2/3', { type: 'start_sep_remove' });
    spy.mockRestore();

    expect(r01).toEqual('/1/2/3');
  });

  it('start sep remove', () => {
    const r01 = alwaysSep('/1/2/3', { type: 'start_sep_remove' });
    expect(r01).toEqual('1/2/3');
  });

  it('end sep remove', () => {
    const r01 = alwaysSep('/1/2/3/', { type: 'end_sep_remove' });
    expect(r01).toEqual('/1/2/3');
  });

  it('start sep append', () => {
    const r01 = alwaysSep('1/2/3', { type: 'start_sep_append' });
    expect(r01).toEqual('/1/2/3');
  });

  it('start sep append', () => {
    const r01 = alwaysSep('/1/2/3', { type: 'end_sep_append' });
    expect(r01).toEqual('/1/2/3/');
  });
});
