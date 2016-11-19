module.exports = {
  jsCompiler: require('rollup-plugin-babel')({
    comments: false,
    presets: [
      ['es2015', {modules: false}]
    ],
    plugins: ['transform-flow-strip-types', 'external-helpers']
  })
}
