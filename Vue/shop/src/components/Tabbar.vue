<template>
<van-tabbar route v-model="path">
        <van-tabbar-item name="home" to="/home" icon="home-o">主页</van-tabbar-item>
        <van-tabbar-item name="category" to="/category" icon="apps-o">分类</van-tabbar-item>
        <van-tabbar-item name="cart" to="/cart" icon="cart-o">购物车</van-tabbar-item>
        <van-tabbar-item name="user" to="/user" icon="user-o">我的</van-tabbar-item>
</van-tabbar>
</template>
<script>
export default {
    props:{
        path:{
            type:String,
            default:""
        }
    }
}
</script>

<style>

</style>