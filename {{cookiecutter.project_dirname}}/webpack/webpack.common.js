const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const path = require('path')

module.exports = {
  entry: [
    '@babel/polyfill',
    './src/client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../src/server/public/js'),
    publicPath: '/public/js/',
    filename: '[name].[hash].js'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/client/index.html'),
      filename: '../html/index.hbs',
      hash: false,
      inject: 'body',
      minify: {
        collapseWhitespace: true
      },
      alwaysWriteToDisk: true
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackHarddiskPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
