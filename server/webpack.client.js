// 将client文件夹下的index.js打包编译到public文件夹下的index.js

const path = require("path");
const merge = require("webpack-merge")
const config = require("./webpack.base.js")
const clientConfig = {
  mode: "development",
  watch: true,
  entry: "./src/client/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public")
  },
}
module.exports = merge(config, clientConfig)