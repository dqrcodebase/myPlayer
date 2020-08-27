
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'dist',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
}
