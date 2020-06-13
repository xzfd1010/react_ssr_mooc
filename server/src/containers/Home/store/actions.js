import axios from 'axios'
import {CHANGE_LIST} from "./constants";


const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = () => {
  return (dispatch) => {
    return axios.get('http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE')
      .then(({data}) => {
        dispatch(changeList(data.data))
      })
  }
}