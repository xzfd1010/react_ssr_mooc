// node 结构下不支持import 语法

import React from "react";
import Header from "../../components/Header";
import {connect} from 'react-redux'

// JSX语法也不能直接在服务端运行，需要打包
const Home = (props) => {
  return (
    <div>
      <Header/>
      <div>Hello {props.name}!</div>
      <button onClick={() => {
        alert('click')
      }}>click
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  name: state.name
})

export default connect(mapStateToProps,null)(Home)