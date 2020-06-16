// node 结构下不支持import 语法

import React, {Fragment, Component} from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {actions} from './store'
import styles from './style.css'
import withStyle from "../../withStyle";

// JSX语法也不能直接在服务端运行，需要打包
class Header extends Component {

  render() {
    const {login, handleLogin, handleLogout} = this.props
    return (
      <div className={styles.container}>
        <Link to='/' className={styles['list-item']}>首页</Link>
        {
          login ?
            <Fragment>
              <Link to='/translation' className={styles['list-item']}>翻译列表</Link>
              <div onClick={handleLogout} className={styles['list-item']}>退出</div>
            </Fragment>
            : <div onClick={handleLogin} className={styles.listItem}>登录</div>
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
export default connect(mapState, mapDispatch)(withStyle(Header,styles))