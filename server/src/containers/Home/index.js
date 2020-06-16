// node 结构下不支持import 语法，通过配置webpack得到支持

import React, {Component} from "react";
import {connect} from 'react-redux'
import {getHomeList} from "./store/actions";
import styles from './style.css'
import withStyle from "../../withStyle";

// JSX语法也不能直接在服务端运行，需要打包

class Home extends Component {
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList()
    }
  }

  getList() {
    const {list} = this.props
    return list.map((item) => {
      return (<div key={item.id} className={styles.item}>{item.title}</div>)
    })
  }

  render() {
    return (
      <div className={styles.container}>
        {this.getList()}
      </div>
    )
  }
}


const mapStateToProps = state => ({
  name: state.home.name,
  list: state.home.newsList
})

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  }
})

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home,styles))

ExportHome.loadData = (store) => {
  // 这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  // 这里返回的是一个promise
  return store.dispatch(getHomeList())
}

export default ExportHome