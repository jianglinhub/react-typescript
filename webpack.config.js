
const argv = require('yargs-parser')(process.argv.slice(2))
const merge = require('webpack-merge')
const { resolve } = require('path')
const _mode = argv.mode || 'development'
const _mergeConfig = require(`./config/webpack.${_mode}.js`)

const webpackConfig = {
  entry: {
    app: resolve('./src/web/index.tsx')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [resolve('src')],
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = merge(webpackConfig, _mergeConfig)