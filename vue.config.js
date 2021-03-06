
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'dist',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    open: true,
    hot: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://www.dqrvue.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },

  }
}
