const merge = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge.strategy({ entry: 'prepend' })(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr'
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
})
