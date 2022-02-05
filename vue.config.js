const { resolve } = require('path');

module.exports = {
  publicPath: './',
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        'eduif': resolve('./src'),
        '@style': resolve('./src/scss'),
        '@utils': resolve('./src/utils'),
        '@package': resolve('./package'),
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@style/base-var.scss";`,
      },
    },
  },
  pages: {
    index: {
      title: 'eduif',
      filename: 'index.html',
      entry: 'examples/main.js',
      template: 'examples/index.html',
    },
  },
  devServer: {
    port: 8083,
    host: '0.0.0.0',
  },
};