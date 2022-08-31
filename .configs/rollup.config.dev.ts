import resolve from '@rollup/plugin-node-resolve';
import readPackage from 'read-pkg';
import ts from 'rollup-plugin-ts';

const pkg = readPackage.sync();
const pkgMap = new Map<string, string>([
  ...Object.entries(pkg.dependencies ?? {}),
  ...Object.entries(pkg.devDependencies ?? {}),
  ...Object.entries(pkg.peerDependencies ?? {}),
]);

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'cjs',
        file: 'dist/cjs/index.js',
        sourcemap: true,
      },
      {
        format: 'esm',
        file: 'dist/esm/index.js',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({ resolveOnly: (module) => !pkgMap.has(module) }),
      ts({ tsconfig: 'tsconfig.prod.json' }),
    ],
  },
];
