import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk'
import {reducer as headerReducer} from '../components/Header/store/'
import {reducer as homeReducer} from '../containers/Home/store/'
import {reducer as translationReducer} from '../containers/Translation/store'
import createInstance from '../server/request'
import clientAxios from '../client/request'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  translation: translationReducer
})

const getStore = (req) => {
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(createInstance(req))))
}

const getClientStore = () => {
  // 获取服务端的state
  const defaultState = window.context.state;
  // 参数 preloadState
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}

export {getStore, getClientStore}