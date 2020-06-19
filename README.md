# 项目介绍
此项目是一个从零搭建的React SSR项目，主要完成了以下功能：
1. 服务端和客户端React组件的同构，
2. 通过webpack分别对服务端代码和客户端代码进行打包
3. 配置路由
4. 配置Redux
5. 使用Node中间层处理请求，获取数据
6. 404页面
7. 301重定向
8. 处理CSS
9. SEO优化

# 启动项目
```
cd server
npm install
npm run dev
```
# 目录结构
server  
├── build // 客户端代码生成位置  
├── public // 客户端代码生成位置 
└── src  
    ├── client  //客户端代码  
    ├── components // 服务端和客户端共用的React组件   
    ├── containers  // 页面  
    ├── server // 服务端代码  
    ├── store  // 统一的store配置  
    ├── App.js // 组件的入口文件  
    ├── Routes.js // 路由表  
    ├── config.js // 统一配置文件  
    └── withStyle.js // 处理css的高阶组件  
├── webpack.base.js // webpack配置  
├── webpack.client.js  
└── webpack.server.js  
  

