#  router 路由 适合多页面安装
- create-react-app  beers react   
- cd beers
- npm i react-router react-router-dom
  
  小程序 联想型学习react
  /page index tabbar my cart 小程序内置了一个路由
  1. npm i react-router react-router-dom
   
  2. BrowserRouter 浏览器路由切换，以前是由后端负责，
  前端也可以做 我们要启动前端路由功能 不是标配
  用BrowserRouter 包住 router的配置, 接管整个项目

  3. <Route path="" component=""/>

  4. Main.js 组件化  切图
  html结构 大体上 section 
  header + loader + list + beer
  