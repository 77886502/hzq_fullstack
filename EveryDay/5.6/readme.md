## 为什么使用框架而不是原生
面试官想了解什么？编程素养 思考逻辑 大厂的面试毒打
如何快速的成为大厂认为的编程高手？

框架的好处:
1. 组件化: 高度的组件化可以是我们的工程易于维护、易于组合拓展。

2. MVVM分层机制 一切复杂应用都可以分层，代码解耦更易于读写。
JSX V   state+props+setState M  VM 数据绑定
模板 负责渲染
model 提供状态及状态管理
VM 数据绑定

3. 开发效率: UI与状态绑定

4. 性能优化 主要通过虚拟DOM来实现

5. 开发生态 阿里Antd


## 虚拟DOM的本质是什么
本质上是JS对象，是对真实DOM的抽象。

DOM-diff的过程
1. 用JS对象模拟DOM
2. 把虚拟DOM转换为真实DOM并插入页面中(render)
3. 如果有事件发生修改了虚拟DOM，比较两颗虚拟DOM的差异，得到差异对象
4. 把差异对象应用到真正的DOM树上

虚拟DOM的优点？
  1. 性能
    原生DOM是最耗性能的
    前后状态 虚拟DOM可以通过diff 找出最小差异 批量patch
  2. 无需DOM操作，加快开发效率
  3. 跨平台 ReactNative开发app


## React生命周期

1. 分成几个阶段
    挂载阶段
    更新阶段
    卸载阶段



## 数据库索引
1. 普通索引
create index index_name on tableName(column)

2. 唯一索引
create unique index unique_name on tableName(column)

3. 主键索引
alter tabale tablename add primary key(col)

4. 联合索引
create index on tableName(column1,columnw)

5. 删除索引
drop index index_name on tableName;

- 创建数据表
create table stu (
  Id int[5] primarykey
  Name varchar[10]
  Age int[10]unsigned  
)UTF8MB4

- 查询
查询年龄大于20且姓张
select * from stu where age>20 and name like "张%"

- 

常见索引结构:
1. 二叉搜索树
2. 有序序列 
3. 哈希表

mysql索引类型:
innodb (b+树)
myisam (b树)

B树和B+树区别
1. B+树只有叶子节点会存放数据，B树的每个节点都会存放数据
2. B+树的叶子结点都会通过链表有序连接，能够很快的实现区间查询
3. B树可以在非叶子节点结束查找，最好的情况是O(1)，但是B+树的时间复杂度是O(log N)
4. B树的插入性能比B+树要高

索引几种方式的优缺点:
1. 哈希表: 键值对方式存储 只适用于等值查询，无法区间查询，比如redis(key-value数据库)

2. 有序序列: 可以区间查询，但增删记录性能低，每次需要挪动数据，一般用于静态数据存储，对静态数据做索引


3. 二叉搜索树:要求是每个节点的左子节点小于父节点，右子节点大于父节点，查询效率较高，时间复杂度O(log N)


第一范式: 原子性，列不可再分;
第二范式: 唯一性，每一列都与主键相关
第三范式: 独立性，避免字段冗余，不能存在能被其他字段推导出的