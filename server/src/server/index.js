import express from 'express'
import React from "react";
import {render} from './utils'


const app = express()
// 设置静态文件的路径
app.use(express.static('public'))

const port = 3000

app.get('*', (req, res) => {
  res.send(render(req))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))