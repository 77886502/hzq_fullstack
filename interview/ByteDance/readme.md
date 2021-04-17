1. transform 是位于 Composite Layers(复合层)
    GPU是一个渲染引擎，transform开启了一个新的复合图层，不会影响默认的复合图层（就是普通的文档流)，所以并不会影响周边的DOM结构。所以 transform 不会引起回流。

2. CSS画扇形

3. 浏览器回流（重排）和重绘
DOM树：表示页面结构，
渲染树（DOM+CSSOM）：表示DOM结点如何显示

GPU拿到渲染树后，进行布局绘制叫做重排
当页面上的DOM结点发生非布局变更时GPU需要再次绘制——重绘
重排伴随着重绘，重绘不一定重排

怎样触发重排？
   - 页面首次渲染
   - 添加/删除可见的DOM元素
   - 改变元素位置
   - 改变元素尺寸
   - 改变窗口大小
   - offsetWidth offsetxxx... clientTop clientxxx...
怎样触发重绘：
   - 当页面的dom结构改变非几何信息的属性时

4. 






36^2+