# react 小书

- 简单应用，只是一个功能，不是一个完整的上线应用 website
  不需要router
  react 是现在流行的web网站(应用)的开发框架

- 组件 组织整个页面
  1. CommentApp 根组件 index.js render
  2. 子组件 Comment 孙
  3. 数据放在父组件中，通过prop 一路传递下去
  comments放在CommentApp里的主要原因是 CommentInput(
    CommpentList 兄弟
  ) 要push 兄弟要操作
  4. 每个组件有专属的css 方便css 的管理
  5. 子组件要通知父组件 有事情要怎么办？
    父组件将函数通过props方式传给子组件
    