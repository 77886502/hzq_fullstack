# 字节react 技术栈要求
    - react
        jspang react-touter redux 打卡
        react hooks class 很少 函数式组件
        ts
    - 冴羽 JS系列 小黄书
    - 山月 神三元  面试系列
1. 开发流程 React + hooks + ts 大型项目 
    webpack, webpack-cli webpack-dev-server
    webpack-cli 4.0 版本 与 webpack 5 有兼容性问题
    手动的指定 安装 webpack cli 3
    
    1.1 配置开发
        --hot 热更新
      1.2 css--loader style-loader file-loader url-loader
            webpack loader机制 转译 或编译
            mini-css-extract-plugin webpack插件
            awesome-typescript-loader ts->js
        1.3 typescript-loader typescript
            tsconfig.json
        1.4 js babel es6->es5
            @babel/polyfill ?
               babel-loader  也坑
        .babelrc
    1.5 webpack.config.js
        entry -> output
        module test loader


    1.6 src/ index.html  root

2. react react-dom
    ts + react 
    npm i @types/react  @types/react-dom    react的类型约定
    ts 类型化的js

- app.tsx 
    根组件 tsx webpack -> ts-loader > babel-loader
- index.tsx
    入口文件 webpack entry 打理

- react 16 后 可以在函数式组件里直接使用状态 
全面拥抱函数式编程
    useState 超级函数
    setName 修改状态
    初始值
- ts 就是加类型约束

- 围绕着 name 状态 两个组件开发实现
    APP 父组件 状态 name:defaultUserName
    <!--
        this.state = { // Component
            name: 'defaultUserName'
        }
    -->
    react 16 魔法函数 方便 this, this.setState......
    setName 相当于this.setState({})
    const [name,] = ;


- react-router @

<Switch>
    path="/about"
    path="/about/:id"
    
    exact 完全一样

- 大型项目的编写风格
    components 提供 index.tsx
    文档一样，把这目录下的所有组件向外输出

- webpack 的优化
    1. entry 可以有多个入口
        引入的文件都可以带包到最后的output中
    2. bootstrap 引入是通过webpack 引入的
        index.html app.tsx 不用引入
    3. vendor []
        lib 不用反复编译
        组件是会变的
        不用反复去打包 lib,而业务每次都要打包

- react-router  嵌套路由
    分级 两到三级
    / -> Header  Router / App {props.children}
        / Albums 专辑列表   Switch 只匹配一个
        / Albums/:id 某人专辑


- 应用的api 应该统一放到api/目录下