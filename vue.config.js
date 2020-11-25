const globImporter = require('node-sass-glob-importer')


module.exports = {
  css: {
    loaderOptions: {
      scss: {
        sassOptions: {
          importer: globImporter()
        }
      }
    }
  },
  devServer: {
    port: 9050,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
};
