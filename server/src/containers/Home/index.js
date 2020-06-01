// node 结构下不支持import 语法

const React = require('react')

// JSX语法也不能直接在服务端运行，需要打包
const Home = () => {
  return (<div>home</div>)
}

module.exports = {
  default: Home
}