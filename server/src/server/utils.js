import {renderToString} from "react-dom/server";
import {StaticRouter, Route} from "react-router-dom";
import routes from "../Routes";
import React from "react";
import {Provider} from "react-redux";

export const render = (req, store, routes) => {

  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          {routes.map(route => (
            <Route {...route}/>
          ))}
        </div>
      </StaticRouter>
    </Provider>
  ))

  return ` 
      <html lang="en">
      <head>
      <title>ssr</title>
      <body>
          <div id="root">${content}</div>
          <script >
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
          </script>
          <script src="/index.js"></script>
      </body>
      </head>
      </html>
    `
}