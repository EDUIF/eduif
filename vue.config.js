const { resolve } = require('path');

module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        'eduif': resolve('./src'),
        '@style': resolve('./src/scss'),
        '@views': resolve('./examples'),
        '@utils': resolve('./src/utils'),
        '@package': resolve('./package'),
        '@transition': resolve('./src/transition'),
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