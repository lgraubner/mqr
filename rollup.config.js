import babel from 'rollup-plugin-babel';
import flow from 'rollup-plugin-flow';
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('./package.json'));

export default {
  entry: 'src/index.js',
  useStrict: false,
  sourceMap: true,
  plugins: [flow(), babel()],
  targets: [
    { dest: pkg.main, format: 'umd', moduleName: pkg.name },
    { dest: pkg.module, format: 'es' },
  ],
};
