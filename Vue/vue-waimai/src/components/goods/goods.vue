<template>
    <div>
        <div class="goods">
            <div class="menu-wrapper" ref="menuWrapper">
                <ul>
                    <li 
                    v-for="(item, index) in goods"
                    :key="index"
                    class="menu-item"
                    :class="{'current': currentIndex == index}"
                    @click="selectMenu(index, $event)"
                    >
                        <span class="text border-1px">
                            {{item.name}}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
const response = require('../../common/data/goods.json');

export default {
    data() {
        return {
            goods: []
        }
    },
    computed: {
        currentIndex() {
            return 0
        }
    },
    created() {
        this.goods = response.data
    },
    methods: {
        selectMenu(index) {
            this.currentIndex = index 
        }
    }
}
</script>
<style lang="stylus" scoped>
@import "../../common/stylus/mixin.styl"
.goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
        flex: 0 0 80px
        width: 80px
        background: #f3f5f7
        .menu-item
            display: table
            height: 54px
            width: 56px
            padding: 0 12px
            line-height: 14px
            &.current
                position: relative
                z-index: 10
                margin-top: -1px
                background: #fff
                font-weight: 700
        
</style>