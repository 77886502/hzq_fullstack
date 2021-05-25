# 性能优化  永远的大厂主题
- DOM 是最贵的性能开销，没有之一
- 差点挂了
  10000次吗？不会
  1. chrome tab 进程 都会有一定的内存的最高值
    10000条在边缘
  2. 内存消耗在哪里呢？
  12 真不多 1ms
  13 document 性能开销
    JS 文档对象 JS 操作DOM
  

  - 两步
  1. 下载html, css 浏览器在渲染页面的第一步
    - html DOM树 树的查询c++
      tree 的结构
    - css 解析执行 基于DOM树生成CSS渲染树 selector 属性构成
    Render tree layout width
    heigth
    遍历这棵渲染树

    js 极其好性能的加法
    1. js 跟java 比, 慢点
      c/c++/java 内存操作级别
      js 1/5 php python 脚本语言
      应用场景 js 是目前唯一可以做前端的语言,
      node 后端， 移动端
    2. js 就是第三者， 浏览器
      DOM树 + css 渲染树 1. 快速的把静态页面显示出来
      js 
      doucument.getElementById('') 巨大的开始
      js(语言世界) -> html + css DOM 树世界

    

    3. 分屏加载html 制高点
      