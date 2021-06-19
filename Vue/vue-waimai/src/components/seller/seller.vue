<template>
    <div class="seller" ref="seller">
        <div class="seller-content">
            <div class="overview">
                <h1 class="title">{{seller.name}}</h1>
                <div class="desc border-1px">
                    <star :size="36" :score="seller.score"/>
                    <span class="text">({{seller.ratingCount}})</span>
                    <span class="text">月售{{seller.sellerCount}}单</span>
                </div>
                <ul class="remark">
                    <li class="block">
                        <h2>起送价</h2>
                        <div class="content">
                            <span class="stress">{{seller.minPrice}}</span>元
                        </div>
                    </li>
                    <li class="block">
                        <h2>商家配送</h2>
                        <div class="content">
                            <span class="stress">{{seller.deliverPrice}}</span>元
                        </div>
                    </li>
                    <li class="block">
                        <h2>平均送货时间</h2>
                        <div class="content">
                            <span class="stress">{{seller.deliverTime}}</span>分钟
                        </div>
                    </li>
                </ul>
                <div class="favorite" @click="toggleFavorite">
                  <span class="icon-favorite" :class="{'active':favorite}"></span>
                  <span class="text">{{favoriteText}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import star from "../star/star.vue";
import BScroll from "better-scroll";

export default {
  props: {
    seller: {
      type: Object,
    },
  },
  data(){
    return {
      favorite: false
    }
  },
  computed: {
    favoriteText(){
      return this.favorite ? '已收藏':'收藏';
    }
  },
  // created 创建是声明周期，类实例化 mounted 挂载声明周期，绝对完成了所有状态的MVVM ，betterscroller 需要获取整个容器的高度
  created() {},
  mounted() {
    this.$nextTick(() => {
      // betterScroller   .$nextTick 本次更新已经完成
      // _  表示私有的，只有当前组件可以调用
      this._initScroll();
    });
  },
  methods: {
    _initScroll() {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.seller, {
          click: true,
        });
      } else {
        this.scroll.refresh();
      }
    },
    toggleFavorite(event){
      this.favorite = !this.favorite;
    }
  },
  components: {
    star,
  },
};
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixin.styl"
// scoped 解决了样式私有化的问题，但是也使得样式变得不易更改
.seller
  position absolute
  top 174px
  bottom 0
  left 0
  width 100%
  overflow hidden
  .overview
    position relative
    padding 18px
    .title
      margin-bottom 8px
      line-height 14px
      color rgb(7,17,27)
      font-size 14px
    .desc
      padding-bottom 18px
      border-1px(rgba(7,17,27,0.1))
      font-size 0
      .star
        display inline-block
        margin-left 8px
        vertical-align top
    .remark
      display flex
      padding-top 18px
      .block
        flex 1
        text-align center
        border-right 1px solid rgba(7,17,27,0.1)
        &:last-child
          border none
        h2 
          margin-bottom 4px
          line-height 10px
          font-size 10px
          color rgb(147,153,159)
        .content
          line-height 24px
          font-size 10px
          color: rgb(7,17,27)
          .stress
            font-size 24px
    .favorite
      position absolute
      width 50px
      right 11px
      text-align center
      .icon-favorite
        display block
        margin-bottom 4px
        line-height 24px
        font-size 24px
        color #d4d6d9
        &.active
          color rgb(240, 20, 20)
    
</style>

