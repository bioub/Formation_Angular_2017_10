const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app/main.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.[hash].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })]
};
