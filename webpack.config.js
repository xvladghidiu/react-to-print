const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: "./example/index.js"
  },
  stats: "verbose",
  context: __dirname,
  output: {
    filename: 'dist/bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    disableHostCheck: true,
    hot: true,
    inline: true,
    host: "0.0.0.0",
    port: 5060
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify("development"),
      }
    })
  ]
};
