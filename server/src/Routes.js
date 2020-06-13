import React from 'react'
import Home from './containers/Home'
import Login from "./containers/Login";

export default [
  {
    path: '/',
    component: Home,
    exact: true,
    loadData: Home.loadData,
    key: 'Home',
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    key: 'login'
  }
]
//
// export default (
//   <div>
//     <Route path='/' exact component={Home}/>
//     <Route path='/login' exact component={Login}/>
//   </div>
// )