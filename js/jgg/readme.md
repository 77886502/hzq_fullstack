# grid 布局

- 在哪里，大家看过这种布局方式
- 考题中，有多少让元素在屏幕居中的方法？
    - flex body d:f justify-content: center align-items: center; 一代
    - grid 二代 二维时候 justify-content:center
    - 定位
    - margin 负值
    ....
- grid-template-row|columns
    布局可以直接对二维名场面,
- 9个元素, 请大家给一个方案,每一个格子背景颜色不一样？
    - JS 是王者 ele.style 夏原骏
    - CSS方案 .box:nth-child
        ？每个都不一样
        .box:nth-child(1|odd|even|last-child)
    - 别的方案 9个格子,甚至更多？选择器写的很累

- 弹性布局在解决现代移动短甚至未来互联网能
    dis


- fristChild lastChild
    childNodes 换行符会视为空的文本节点来
    lastElementChild 