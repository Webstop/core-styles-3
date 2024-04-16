import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';

export default {
  plugins: [
    typescript(),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    json({
      // Include all JSON files in the node_modules directory
      include: 'node_modules/**',
      // Exclude specific files or directories
      //exclude: ['node_modules/foo/**', 'node_modules/bar/**'],
      // Prefer `const` over `var` for tree-shaking
      preferConst: true,
      // Specify indentation for the generated code
      indent: ' ',
      // Generate compact code by ignoring indentation
      compact: true,
      // Generate named exports for each property of the JSON object
      namedExports: true
    })
  ],
};
