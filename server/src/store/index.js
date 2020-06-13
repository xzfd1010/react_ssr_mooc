import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk'
import {reducer as homeReducer} from '../containers/Home/store/'

const reducer = combineReducers({
  home: homeReducer
})

const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}

const getClientStore = () => {
  // 获取服务端的state
  const defaultState = window.context.state;
  // 参数 preloadState
  return createStore(reducer, defaultState, applyMiddleware(thunk))
}

export {getStore, getClientStore}