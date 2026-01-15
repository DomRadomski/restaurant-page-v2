const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/js/index.js',            // entry point for your app
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,                      // cleans dist before each build:contentReference[oaicite:17]{index=17}
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // uses your template and injects the bundle:contentReference[oaicite:18]{index=18}
    })
  ],
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader','css-loader'] }, // allow importing CSS:contentReference[oaicite:19]{index=19}
      { test: /\.html$/i, loader: 'html-loader' },            // process images in HTML:contentReference[oaicite:20]{index=20}
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' } // handle images in JS:contentReference[oaicite:21]{index=21}
    ]
  },
};
