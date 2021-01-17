# 主任家的小程序
水果电商小程序
shop <- 水果
10:06 KFC 打烊
1. 首页设计店面营业/打烊的需要
2. 分析页面功能
    - 搜索、swiper、列表
3. isShow?
    isShow true false 没准备好
    ?
4. 搜索
5. 轮播图
    大项目页面比较长，用组件封装出去，就没有那么长了
    application <- pages <- components <- 原子组件
    page 老板 Component 打工人 property 属性 data
6. tab 切换?
    1. 设备数据 tab 状态相关 activeTypeId
    2. 多个type  放到数据里
    3. 
    - CSS flex 1/4
    位置怎么做

7. 数据库设计
    - fruit-board
    支持where 操作
    myClass 0 1  23
    onShow 是否上架
    详情页 swiper
 
- 封装云开发数据操作能力
    1. app.js 是天然的功用的JS 方法的地方
    com

- flex 里怎么让元素下去
    flex-warp: warp
- 设计一下购物车？ 数组 某项商品 数量
    首页 要加入购物车 加入 | 改数量
    购物车 展示出来
    详情页时，加入购物
    关于购物车的数据,是不是要超出页面化, 来到？
    比页面级别更大的是谁？ App
    view|image 标签 -> component -> page -> application
