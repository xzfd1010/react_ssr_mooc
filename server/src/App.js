import React from "react";
import Header from "./components/Header";
import {renderRoutes} from "react-router-config";

const Login = (props) => {
  return (
    <div>
      <Header/>
      {renderRoutes(props.route.routes)}
    </div>
  )
}

export default Login