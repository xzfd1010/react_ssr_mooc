import {CHANGE_LOGIN} from "./constants";

const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value
})

export const getHeaderInfo = () => {
  const url = '/api/isLogin.json?secret=PP87ANTIPIRATE'

  return (dispatch, getState, axiosInstance) => {
    //http://47.95.113.63/
    return axiosInstance.get(url)
      .then(({data}) => {
        dispatch(changeLogin(data.data.login))
      })
  }
}

export const login = () => {
  const url = '/api/login.json?secret=PP87ANTIPIRATE'

  return (dispatch, getState, axiosInstance) => {
    //http://47.95.113.63/
    return axiosInstance.get(url)
      .then(({data}) => {
        dispatch(changeLogin(true))
      })
  }
}


export const logout = () => {
  const url = '/api/logout.json?secret=PP87ANTIPIRATE'

  return (dispatch, getState, axiosInstance) => {
    //http://47.95.113.63/
    return axiosInstance.get(url)
      .then(({data}) => {
        dispatch(changeLogin(false))
      })
  }
}