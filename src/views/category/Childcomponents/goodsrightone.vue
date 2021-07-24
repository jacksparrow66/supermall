<template>
  <div class='goodsrightone' v-if="Object.keys(currentGoods).length !== 0">
      <div class="mainbox">
          <div class="Goods" v-for="(item,index) in currentGoods" :key="index">
            <a :href="item.link">
                <img v-lazy="item.image" alt="" @load="imgload">
            </a>
            <div>{{item.title}}</div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'goodsrightone',
  props: {
      currentGoods:{
          type:Array,
          default(){
              return []
          }
      }
  },
  methods: {
      imgload(){
          this.$emit('imgload')
      }
  }
}
</script>
<style scoped>
.mainbox{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; 
    padding: 2px;
    text-align: center;
    font-size: 15px;
}
.Goods{
    flex: 1;
    margin: 5px 5px 0px 0px;
}
.Goods img{
    height: 70px;
}
</style>