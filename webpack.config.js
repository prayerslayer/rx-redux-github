var path = require("path")
var webpack = require("webpack")

module.exports = {
  entry: {
    app: ["./app/main.js"]
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  }
};
