import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk'
import {reducer as homeReducer} from '../containers/Home/store/'

const reducer = combineReducers({
  home: homeReducer
})

const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}

// 单例store！这样写所有用户用的是同样的数据

export default getStore