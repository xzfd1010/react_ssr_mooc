import {CHANGE_LIST} from "./constants";

const changeList = (value) => ({
  type: CHANGE_LIST,
  value
})

export const getTranslationList = () => {
  const url = '/api/translations.json'

  return (dispatch, getState, axiosInstance) => {
    //http://47.95.113.63/
    return axiosInstance.get(url)
      .then(({data}) => {
        if(data.success){
          dispatch(changeList(data.data))
        }else{
          dispatch(changeList([]))
        }
      })
  }
}