// node 结构下不支持import 语法，通过配置webpack得到支持

import React, {Component} from "react";
import {connect} from 'react-redux'
import {getHomeList} from "./store/actions";
import styles from './style.css'

// JSX语法也不能直接在服务端运行，需要打包

class Home extends Component {
  UNSAFE_componentWillMount() {
    if (styles._getCss) {
      this.props.staticContext.css.push(styles._getCss())
    }
  }

  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList()
    }
  }

  getList() {
    const {list} = this.props
    return list.map((item) => {
      return (<div key={item.id}>{item.title}</div>)
    })
  }

  render() {
    return (
      <div className={styles.test}>
        {this.getList()}
        <button onClick={() => {
          alert('click')
        }}>click
        </button>
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

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(Home)

ExportHome.loadData = (store) => {
  // 这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  // 这里返回的是一个promise
  return store.dispatch(getHomeList())
}

export default ExportHome