// node 结构下不支持import 语法

import React from "react";
import Header from "../../components/Header";

// JSX语法也不能直接在服务端运行，需要打包
const Login = () => {
  return (
    <div>
      <Header />
      <div>Login</div>
    </div>
  )
}

export default Login