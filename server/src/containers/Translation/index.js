// node 结构下不支持import 语法，通过配置webpack得到支持
import React, {Component, Fragment} from "react";
import {connect} from 'react-redux'
import {Helmet} from "react-helmet";
import {getTranslationList} from "./store/actions";
import {Redirect} from 'react-router-dom'
import styles from './style.css'
import withStyle from "../../withStyle";

class Translation extends Component {

  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getTranslationList()
    }
  }

  getList() {
    const {list} = this.props
    return list.map((item) => {
      return (<div key={item.id} className={styles.item}>{item.title}</div>)
    })
  }

  render() {
    return this.props.login ?
      (
          <Fragment>
            <Helmet>
              <title>这是Nick的SSR翻译页面 - 丰富多彩的资讯</title>
              <meta name="description" content="这是Nick的SSR翻译页面 - 丰富多彩的资讯"/>
            </Helmet>
            <div className={styles.container}>{this.getList()}</div>
          </Fragment>
      ) :
      (
        <Redirect to='/'/>
      )

  }
}


const mapStateToProps = state => ({
  list: state.translation.list,
  login: state.header.login
})

const mapDispatchToProps = dispatch => ({
  getTranslationList() {
    dispatch(getTranslationList())
  }
})

const ExportTranslation = connect(mapStateToProps, mapDispatchToProps)(withStyle(Translation, styles))

ExportTranslation.loadData = (store) => {
  // 这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  // 这里返回的是一个promise
  return store.dispatch(getTranslationList())
}

export default ExportTranslation