import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    typescript(),
    commonjs(),
    postcss({
      modules: true,
    }),
  ],
  context: 'null',
  moduleContext: 'null',
};
