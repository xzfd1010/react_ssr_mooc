// node 结构下不支持import 语法

import React from "react";

// JSX语法也不能直接在服务端运行，需要打包
const Home = () => {
  return (
    <div>
      <div>Hello Nick!</div>
      <button onClick={() => {alert('click')}}>click</button>
    </div>
  )
}

export default Home