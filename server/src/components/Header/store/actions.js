import {CHANGE_LOGIN} from "./constants";

const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value
})

export const login = () => {
  const url = '/api/login.json'

  return (dispatch, getState, axiosInstance) => {
    //http://47.95.113.63/
    return axiosInstance.get(url)
      .then(({data}) => {
        dispatch(changeLogin(true))
      })
  }
}

export const logout = () => {
  const url = '/api/logout.json'

  return (dispatch, getState, axiosInstance) => {
    //http://47.95.113.63/
    return axiosInstance.get(url)
      .then(({data}) => {
        dispatch(changeLogin(false))
      })
  }
}

export const getHeaderInfo = () => {
  const url = '/api/isLogin.json'

  return (dispatch, getState, axiosInstance) => {
    //http://47.95.113.63/
    return axiosInstance.get(url)
      .then(({data}) => {
        dispatch(changeLogin(data.data.login))
      })
  }
}