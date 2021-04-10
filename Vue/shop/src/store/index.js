import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  mutations: { // 放更改状态的函数
    // 自带state
    addCount(state){
      state.count++;
    }
  },
  actions: {
    actionAddCount(ctx){
      ctx.commit("addCount") // 提交mutations里面的方法
     
    }
  },
  modules: {
  }
})
