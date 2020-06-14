import React from "react";
import Index from "./components/Header/";
import {renderRoutes} from "react-router-config";
import {actions} from './components/Header/store'

const App = (props) => {
  return (
    <div>
      <Index/>
      {renderRoutes(props.route.routes)}
    </div>
  )
}

App.loadData = (store) => {
  return store.dispatch(actions.getHeaderInfo())
}

export default App