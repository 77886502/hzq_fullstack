<template>
  <div>
    {{count}}
    <button @click="add">增加</button>
  </div>
</template>

<script>
import {computed} from 'vue';
import {useStore} from 'vuex';

export default {
  setup() {
    const store = useStore();
    const count = computed(()=>{
      return store.state.count
    });
    const add = () => {
      store.dispatch("actionAddCount");
    }
    return{
    //  ...toRefs(state),
    count,
    add
    }
  }
}
</script>

<style>

</style>