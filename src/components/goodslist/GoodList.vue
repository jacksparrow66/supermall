<template>
  <div class='GoodList'>
      <GoodListItem v-for="item in goods" :key="item.image" :goodItem="item"/>
      <!-- <GoodListItem v-for="(item,index) in goods" :key="index" :goods="item">/> -->
  </div>
</template>
<script>
import GoodListItem from'./GoodListItem.vue'
export default {
  name: 'GoodLisst',
  components:{
    GoodListItem
  },
  props: {
      goods:{
          type: Array,
          default(){
              return []
          }
      },
  },
}
</script>
<style>
.GoodList {
    /* 使用弹性布局，当内容超出一行后换行，让弹性布局的空隙均等分，左右是中间间隙的一半 */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; 
    padding: 2px;
  }
</style>