<template>
    <div>
        <header class="category-header">
            <van-icon name="arrow-left" size=20 class="back" @click="goBack" />
            <van-search v-model="value" shape="round"
            class="search"
            placeholder="请输入搜索关键词"
            />
        </header>
        <div>
            <categoryBar/>
        </div>
        <tabbar path="category"/>
    </div>
</template>

<script>
import tabbar from '@/components/Tabbar.vue';
import categoryBar from '@/components/sideBar';
import {useRouter} from 'vue-router';
import { toRefs } from 'vue';
export default {
    setup() {
        const state = {
            value:""
        }
        const router = useRouter();
        const goBack = () => {
            router.go(-1);
        }
        return{
            ...toRefs(state),
            goBack,
        }
    },
    components:{
        tabbar,
        categoryBar
    }
}
</script>

<style lang="less" scoped>
.category-header{
    display: flex;
    .back {
        line-height: 60px;
    };
    .search {
        flex:1
    }
    border-bottom: 1px solid #d3d3d3;
}
</style>