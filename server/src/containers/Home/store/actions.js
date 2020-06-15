import {CHANGE_LIST} from "./constants";


const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = () => {
  const url = '/api/news.json'

  return (dispatch, getState, axiosInstance) => {
    //http://47.95.113.63/
    return axiosInstance.get(url)
      .then(({data}) => {
        dispatch(changeList(data.data))
      })
  }
}