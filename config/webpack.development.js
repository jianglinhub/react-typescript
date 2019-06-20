const { join } = require('path')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')

module.exports = {
  devServer: {
    historyApiFallback: true,
    contentBase: join(__dirname, '../dist'),
    proxy: {
      '/api': ''
    },
    hot: true
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new WebpackBuildNotifierPlugin({
      title: "Webpack Build",
      suppressSuccess: true
    })
  ]
}