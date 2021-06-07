# 性能优化

- CDN + Webpack + cookie 实战中是常用的

CDN: 内容分发网络 一个是缓存 一个是回溯

Webpack: webpack 是一个现代 JavaScript 应用程序的静态模块打包器，当 webpack 处理应用程序时，会递归构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将这些模块打包成一个或多个 bundle。
cookie: cookie 用于存储 web 页面的用户信息。 cookie是一个字符串，在请求头中带上

页面请求数，连接数 > 带宽费
降低传输效率，提高费用


- cookie有性能问题？
cookie属性
name 必须
value 必须
size
path
domain
expries
secure
HttpOnly

- HTML5 localStorage?
- 前端项目如何布置到CDN?
大厂是一定要做CDN的，一键发布

- 性能优化的知识脉络是怎么样的？
1. 网络端 CDN
2. Gzip -> tree shaking

当用户访问过一次，前端熟悉比较
3. 存储层
    浏览器的缓存
    本地缓存

4. 服务器端渲染 SSR 首屏

5. 渲染层

6. event loop

- CDN 优化的细节
    域名的选取
    www.taobao.com 业务服务器 计算
    g.alicdn.com CDN服务器


