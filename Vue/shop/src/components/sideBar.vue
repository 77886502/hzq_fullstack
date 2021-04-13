<template>
<van-sidebar v-model="active">
  <van-sidebar-item class="" v-for="item in categoryList" 
  :key="item.id" :title="item.title" />
</van-sidebar>
</template>

<script>
import {toRefs} from 'vue';
export default {
    setup() {
        const state = {
            categoryList:[
            {id:1,title:"家电 数码 手机"},
            {id:2,title:"女装 男装 穿搭"},
            {id:3,title:"家具 家饰 家纺"},
            {id:4,title:"运动 户外 乐器"},
            {id:5,title:"游戏 动漫 影视"},
            {id:6,title:"美妆 清洁 宠物"},
            {id:7,title:"工具 装修 建材"},
            {id:8,title:"鞋靴 箱包 配件"},
            {id:9,title:"玩具 孕产 用品"},
        ]
        }
        // const active = ref(0);
        return {
            ...toRefs(state),
            // active
        }
    }
}
</script>

<style>

</style>