// node 结构下不支持import 语法

import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'

// JSX语法也不能直接在服务端运行，需要打包
const Index = (props) => {
  return (
    <div>
      <Link to='/'>首页</Link>
      <br/>
      {
        props.login ?
          <Fragment>
            <Link to='/login'>翻译列表</Link>
            <Link to='/logout'>退出</Link>
          </Fragment>
          : <Link to='/login'>登录</Link>
      }
    </div>
  )
}
const mapState = (state) => ({
  login: state.header.login
})

const mapDispatch = () => {

}
export default connect(mapState, null)(Index)