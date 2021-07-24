<template>
  <div id='goodslist'>
      <goodslistitem v-for="(item,index) in $store.state.list" :key="index" :item="item" :index="index"/>
  </div>
</template>
<script>
import goodslistitem from "./goodslistitem.vue"
export default {
  name: 'goodslist',
  components:{
    goodslistitem
  }
}
</script>
<style scoped>

</style>