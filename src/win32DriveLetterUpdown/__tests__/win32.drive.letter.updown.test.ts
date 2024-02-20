import { win32DriveLetterUpdown } from '#/win32DriveLetterUpdown/win32DriveLetterUpdown';
import os from 'node:os';
import { describe, expect, it, vitest } from 'vitest';

describe('win32DriveLetterUpdown', () => {
  it('not win32', () => {
    const r01 = win32DriveLetterUpdown('/1/2/3/');
    expect(r01).toEqual('/1/2/3/');
  });

  it('undefined case', () => {
    const spy = vitest.spyOn(os, 'platform');
    spy.mockImplementationOnce(() => 'win32');

    const r01 = win32DriveLetterUpdown('f:/1/2/3/');

    spy.mockReset();
    expect(r01).toEqual('F:/1/2/3/');
  });

  it('upper case', () => {
    const spy = vitest.spyOn(os, 'platform');
    spy.mockImplementationOnce(() => 'win32');

    const r01 = win32DriveLetterUpdown('f:/1/2/3/', 'upper');

    spy.mockReset();
    expect(r01).toEqual('F:/1/2/3/');
  });

  it('lower case', () => {
    const spy = vitest.spyOn(os, 'platform');
    spy.mockImplementationOnce(() => 'win32');

    const r01 = win32DriveLetterUpdown('F:/1/2/3/', 'lower');

    spy.mockReset();
    expect(r01).toEqual('f:/1/2/3/');
  });

  it('no drive character', () => {
    const spy = vitest.spyOn(os, 'platform');
    spy.mockImplementationOnce(() => 'win32');

    const r01 = win32DriveLetterUpdown('/1/2/3/');

    spy.mockReset();
    expect(r01).toEqual('/1/2/3/');
  });

  it('only drive character', () => {
    const spy = vitest.spyOn(os, 'platform');
    spy.mockImplementationOnce(() => 'win32');

    const r01 = win32DriveLetterUpdown('f:');

    spy.mockReset();
    expect(r01).toEqual('F:');
  });
});
