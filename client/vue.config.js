//const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    historyApiFallback: true
  },

  publicPath: './',
  transpileDependencies: true,
  outputDir: 'dist',

  configureWebpack: {
    resolve: {
      fallback: {
        "path": require.resolve("path-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify")
      }
    }
  }
}
