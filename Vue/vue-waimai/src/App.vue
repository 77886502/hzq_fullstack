<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller='seller'>

      </router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from './components/header/header.vue';
const response = require('./common/data/seller.json');
export default {
  data() {
    return {
      seller: {

      }
    }
  },
  created() {
    // 什么东西 挂在 this 
    this.seller = Object.assign({},this.seller,response.data);
  },
  computed: {

  },
  components: {
    'v-header': header
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import './common/stylus/mixin.styl';
*
  margin 0
  padding 0
a
  text-decoration none
.tab 
  display flex
  width  100%
  height 40px
  line-height 40px
  border-1px(rgba(7,17,27,.1))
  .tab-item 
    flex: 1
    text-align center
    & > a
      display block 
      font-size 14px
      color rgb(77, 85, 93)
ul,li
  list-style none
</style>
