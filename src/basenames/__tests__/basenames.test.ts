import { basenames } from '#/basenames/basenames';
import { describe, expect, it } from 'vitest';

describe('basenames', () => {
  it('without extnames', () => {
    const r01 = basenames('/1/2/3/4');
    expect(r01).toEqual('4');
  });

  it('string extnames', () => {
    const r01 = basenames('/1/2/3/hello.ts', '.ts');
    expect(r01).toEqual('hello');
  });

  it('string array extnames', () => {
    const r01 = basenames('/1/2/3/hello.ts', ['.ts', '.mts', '.cts']);
    const r02 = basenames('/1/2/3/hello.mts', ['.ts', '.mts', '.cts']);

    expect(r01).toEqual('hello');
    expect(r02).toEqual('hello');
  });

  it('string array extnames, but not found', () => {
    const r01 = basenames('/1/2/3/hello.js', ['.ts', '.mts', '.cts']);
    expect(r01).toEqual('hello.js');
  });
});
