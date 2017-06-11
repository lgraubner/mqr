import babel from 'rollup-plugin-babel';
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('./package.json'));

export default {
  entry: 'src/index.js',
  useStrict: false,
  sourceMap: true,
  plugins: [
    babel({
      presets: [['es2015', { modules: false }], 'flow'],
      babelrc: false,
    }),
  ],
  targets: [
    { dest: pkg.main, format: 'umd', moduleName: pkg.name },
    { dest: pkg.module, format: 'es' },
  ],
};
