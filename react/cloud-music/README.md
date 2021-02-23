# 神三元React项目最佳实战
    1. 全局样式 样式组件去做
    2. router react 全家桶
        npm i react-router react-router-dom react-router-config --save
        SPA 让router 接管一切
        path:/ Component:Home
        path:A Component:B
        配置 /routes/index.js
        react-router-config
        局部{renderRotes{routes}}
        把当前的path 匹配的组件渲染到这个位置
- React 组件类型 非常灵活
    1. StatelessComponent function 函数式组件
        state 好难？ React hooks  UI
    2. StatefulCompnonent  Component
    3. 样式组件   ./style