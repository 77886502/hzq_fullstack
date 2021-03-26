## 前言

最近这段时间，笔者开始重拾数据结构与算法，并打算写文章打卡记录自己的学习过程，同时和各位小伙们分享在此过程的一些个人心得。由于笔者是前端方向的小萌新，所以有关链表的实现代码都是用 `JavaScript` 来书写。


## 链表（linked list）

每当我们学习任何数据结构时，都应该事先了解它的定义和特点。下面我将列举出有关链表的一些基本认识（如果你比较熟悉这些链表的知识，可一扫而过）

### 链表的定义

链表是这样一种数据结构，采用一组地址任意的存储单元（可以是连续的，也可以是不连续的）来依次存储各个数据元素。数据元素的逻辑顺序是通过链表中的指针链接次序实现的。链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成。每个结点包括两个部分：一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域。



链表一般可分为以下几种：

单链表

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b1107ac2e2149ea98a6a2a65a29a432~tplv-k3u1fbpfcp-zoom-1.image)

循环链表：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb3ae55b3ac54de0a0b2a7ad09269f71~tplv-k3u1fbpfcp-zoom-1.image)

双向链表：




双向循链表：

### 链表的特点
1. 链表不需要连续的存储单元
2. 链表的长度可以动态的改变
3. 链表的插入和删除操作方便
4. 链表无法直接访问指定索引的元素



### 如何创建链表
现在我们已经对链表的定义、特点和形状都有所了解了，那么如何创建一个链表呢？

- 从上述图片中，我们不难看出链表都是由一个指向头结点的头指针和多个结点链接而组成的。通过这些我们可以产生以下思考：
1. 如何实现一个头指针
2. 如何生成一个结点?
3. 如何将结点链接起来?

其实链表可以视为`JavaScipt`中的一个对象，设置一个属性 `head` 作为头指针，用来指向链表的头结点，由于链表初始化时，并没有任何结点，所以 `head`的初值为`null`。同样链表中的每个结点也都可视为`JavaScipt`中的一个对象，我们通过这样一个函数生成结点：
```
// 这里只列举链表节点生成函数
function Node(element){
    this.element = element;
    this.next = null;
}
```
每个结点每个结点的`element`属性用来存结点的值， `next` 属性则用来指向下一个结点（也就是将结点链接起来），由于结点初始化时并不清楚下一个结点是谁，所以将 `next` 设置为 `null`。了解上述一些思路后，一个简单的链表就大功告成了，下面我们开始就不同型的链表开始分析。



## 单链表
单链表的每个结点都是指向下一个结点，由于尾结点没有后继元素故而指向 `null`。下面我们就来一起了解有关实现单链表的思想。
### 创建单链表的函数
```js
let LinkList = () => {
    // 初始状态，头指针
    this.head = null;
    // length记录链表长度
    this.length = 0;
    // 生成结点的函数
    function Node(element){
        this.element = element;
        this.next = null;
    }
    
    // 向链表尾部添加元素
    this.append(){....}
    
    // 向链表指定位置插入元素
    this.insert(){...}
    
    // 查询链表指定位置的元素
    this.getElement(){...}
    
    // 删除链表指定位置的元素
    this.deleteElement(){...}

    // 查询链表是否存在某元素
    this.serach(){...}
    
    // 获取链表长度
    this.getLength(){...}
    
    // 判断链表是否为空
    this.isEmpty(){...}
    
    // 遍历链表
    this.traversal(){...}
    
    //销毁链表
    this.destory(){...}
}
```
思路：
>
### 向链表尾部添加元素
```js
this.append = (element) => {
        // 生成一个结点
        let node = new Node(element);

        // 判断是否添加的结点是否为第一个
        if(this.head == null)
            this.head = node;
        else{
            let traversal = this.head;
            // 到尾结点为止
            while(traversal.next){
                traversal = traversal.next;
            }
            traversal.next = node;
        }
        this.length++;
    }
```
思路：
>
### 向链表指定位置插入元素
```js
this.insert = (element,index) => {
    let rehead = this.head;
    while(index!=1)
    {
        rehead = rehead.next;
        index--;
    }

}
```
### 查询链表指定位置的元素
```js
this.getElement = (index) => {
        let traversal = this.head;
        // 从头结点出发到第 index 结点，需要移动 index-1 次
        index = index - 1;
        while(index)
        {
            traversal = traversal.next;
            index--;
        }
    return traversal.element;
}
```
### 删除链表指定位置的元素
```js
```
### 查询链表是否存在某元素
```js
```
### 向链表尾部添加元素
```js
```
### 获取链表长度
```js
```
### 判断链表是否为空
```js
this.isEmpty = () => this.length == 0 ? true:false; 
```
### 遍历链表
```js
this.traversal = () => {
    let rehead = this.head;
    while(rehead){
        console.log(rehead.element);
        rehead = rehead.next;
    }
}
```
### 销毁链表
```js
this.destory = () => this.head = null;
```


## 循环链表
循环链表(这里只单向循环链表)，

## 总结

## 最后
    这篇文章是笔者重拾数据结构与算法的第一篇文章，后期笔者会不定期更新更多有关这方面的内容(由于笔者还是个大三学生)，欢迎大家在评论区评论。如果读完有所收获，欢迎点赞！您的点赞将会是我加快更新的动力😄