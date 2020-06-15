const path = require('path')
module.exports = {
  module: {
    rules: [
      {
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
      },
    ],
  }
}