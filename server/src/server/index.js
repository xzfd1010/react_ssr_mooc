import express from 'express'
import React from "react";
import {render} from './utils'
import {getStore} from "../store";
import {matchRoutes} from "react-router-config";
import routes from "../Routes";
import proxy from 'express-http-proxy'


const app = express()
// 设置静态文件的路径
app.use(express.static('public'))

const port = 3000

app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver: function (req) {
    console.log('url',req.url)
    // req.url 就是 news.json?secret=PP87ANTIPIRATE 这段内容
    return '/ssr/api' + req.url
  }
}));

app.get('*', (req, res) => {
  const store = getStore()

  // 即针对不同路径，向store中添加数据
  const matchedRoutes = matchRoutes(routes, req.path);
  // 执行matchRoutes里的loadData方法
  const promises = []

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      // 将返回的promise放到数组中
      promises.push(item.route.loadData(store))
    }
  })

  Promise.all(promises).then(() => {
    res.send(render(req, store, routes))
  })

})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))