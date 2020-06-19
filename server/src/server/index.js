import express from 'express'
import React from "react";
import {render} from './utils'
import {getServerStore} from "../store";
import {matchRoutes} from "react-router-config";
import routes from "../Routes";
import proxy from 'express-http-proxy'
import config from '../config'

const app = express()
// 设置静态文件的路径
app.use(express.static('public'))

const port = 3000

app.use('/api', proxy(config.serverURL, {
  proxyReqPathResolver: function (req) {
    // req.url 就是 news.json?secret=PP87ANTIPIRATE 这段内容
    return '/ssr/api' + req.url
  }
}));

app.get('*', (req, res) => {
  const store = getServerStore(req)

  // 即针对不同路径，向store中添加数据
  const matchedRoutes = matchRoutes(routes, req.path);
  // 执行matchRoutes里的loadData方法
  const promises = []

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      // 将返回的promise放到数组中
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then((value) => {
          resolve(value)
        }).catch((e) => {
          resolve(e)
        })
      })
      promises.push(promise)
    }
  })

  Promise.all(promises).then((values) => {
    const context = {
      css: []
    }
    const html = render(req, store, routes, context)
    if (context.NOT_FOUND) {
      res.status(404)
      res.send(html)
    } else if (context.action === 'REPLACE') {
      res.redirect(301, context.url)
    } else {
      res.send(html)
    }
  })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))