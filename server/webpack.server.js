const path = require("path");
const merge = require("webpack-merge")
const config = require("./webpack.base.js")
const nodeExternals = require('webpack-node-externals')

const serverConfig = {
  target: "node",
  mode: "development",
  watch: true,
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]_[local]--[hash:base64:5]',
              },
            }
          }
        ]
      }
    ]
  }
}
module.exports = merge(config, serverConfig)