const path = require("path");
const nodeExternals = require('webpack-node-externals')
console.log(path.resolve(__dirname, "node_modules"));
module.exports = {
  target: "node",
  entry: "./server/src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  watch: true,
  externals: [nodeExternals()],
  mode: "development",
  module: {
    rules: [{
      test: /\.js?/,
      loader: "babel-loader",
      exclude: [
        path.resolve(__dirname, "node_modules")
      ],
      options: {
        // 设置预设的编译规则
        presets: ["@babel/preset-react", ["@babel/preset-env", {
          targets: {
            browsers: ["last 2 versions"]
          }
        }]]
      }
    }]
  }
}