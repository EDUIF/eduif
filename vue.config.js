const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  publicPath: './',
  lintOnSave: true,
  configureWebpack: config => {
    config.optimization.minimizer = [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_console: true, //console
            drop_debugger: true,
            pure_funcs: ['console.log'], //移除console
          },
        },
      }),
    ];
  },
  pages: {
    index: {
      title: 'EDUIF',
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