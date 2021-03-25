- umijs 阿里当家开发框架
    antd 组件库

- 约定优先
    pages
    .umirc.ts 配置

- 自动生成代码
    npm i @umijs/preset-ui
    .umirc.ts {
        dva:{}
        antd:{}
    }
    .env 
    UMI_UI=1

- 未来是很多人一起做开发，
可能会使用同样的类名，在类名后加一个随机数