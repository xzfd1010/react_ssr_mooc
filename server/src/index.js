import express from 'express'
import Home from './containers/Home'
import {renderToString} from 'react-dom/server'
import React from "react";

const app = express()
// 设置静态文件的路径
app.use(express.static('public'))

const port = 3000
const content = renderToString(<Home/>)

app.get('/', (req, res) => {
  res.send(` 
    <html lang="en">
    <head>
    <title>ssr</title>
    <body>
        ${content}
        <script src="/index.js"></script>
    </body>
    </head>
    </html>
  `)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))