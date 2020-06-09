import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk'

const reducer = (state = {name: 'nick'}, action) => {
  return state
}

const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}

// 单例store！这样写所有用户用的是同样的数据

export default getStore