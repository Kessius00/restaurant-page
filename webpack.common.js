const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/i,
        use: ["html-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: "img/[name].[hash].[ext]",
        },
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"
  })],
};