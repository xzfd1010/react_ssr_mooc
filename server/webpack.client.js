const path = require("path");
console.log(path.resolve(__dirname, "node_modules"));
// 将client文件夹下的index.js打包编译到public文件夹下的index.js
module.exports = {
  entry: "./src/client/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public")
  },
  watch: true,
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