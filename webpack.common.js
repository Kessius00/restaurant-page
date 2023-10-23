const path = require('path');


module.exports = {
  entry: './src/index.js',
  output: {
    clean: true
  },
  module: {
    rules: [
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
};