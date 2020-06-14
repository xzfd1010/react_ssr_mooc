import {renderToString} from "react-dom/server";
import {StaticRouter, Route} from "react-router-dom";
import React from "react";
import {Provider} from "react-redux";
import {renderRoutes} from "react-router-config";

export const render = (req, store, routes, context) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>
          {renderRoutes(routes)}
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