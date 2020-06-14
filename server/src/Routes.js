import React from 'react'
import Home from './containers/Home'
import Translation from "./containers/Translation";
import App from "./App";
import NotFound from "./containers/NotFound";

export default [
  {
    path: '/',
    component: App,
    key: 'app',
    loadData: App.loadData,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'Home',
      },
      {
        path: '/translation',
        component: Translation,
        loadData: Translation.loadData,
        exact: true,
        key: 'login'
      },
      {
        component: NotFound
      }
    ]
  }]

//
// export default (
//   <div>
//     <Route path='/' exact component={Home}/>
//     <Route path='/login' exact component={Login}/>
//   </div>
// )