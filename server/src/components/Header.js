// node 结构下不支持import 语法

import React from "react";
import {Link} from "react-router-dom";

// JSX语法也不能直接在服务端运行，需要打包
const Header = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <br/>
      <Link to='/login'>Login</Link>

    </div>
  )
}

export default Header