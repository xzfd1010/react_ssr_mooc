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
}
module.exports = merge(config, serverConfig)