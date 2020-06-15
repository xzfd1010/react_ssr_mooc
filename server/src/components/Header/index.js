// node 结构下不支持import 语法

import React, {Fragment, Component} from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {actions} from './store'
import styles from './style.css'

// JSX语法也不能直接在服务端运行，需要打包
class Header extends Component {
  UNSAFE_componentWillMount() {
    if (styles._getCss) {
      this.props.staticContext.css.push(styles._getCss())
    }
  }

  render() {
    const {login, handleLogin, handleLogout} = this.props
    return (
      <div className={styles.test}>
        <Link to='/'>首页</Link>
        <br/>
        {
          login ?
            <Fragment>
              <Link to='/translation'>翻译列表</Link><br/>
              <div onClick={handleLogout}>退出</div>
            </Fragment>
            : <div onClick={handleLogin}>登录</div>
        }
      </div>
    )
  }
}

const mapState = (state) => ({
  login: state.header.login
})

const mapDispatch = (dispatch) => ({
  handleLogin() {
    dispatch(actions.login())
  },
  handleLogout() {
    dispatch(actions.logout())
  }
})
export default connect(mapState, mapDispatch)(Header)