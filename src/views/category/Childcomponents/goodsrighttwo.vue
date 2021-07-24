<template>
  <div class='goodsrighttwo' v-if="categoryDates!=={}">
      <div class="goodsitem" v-for="item in categoryDates" :key="item.img">
          <a :href="item.link"><img v-lazy="item.img" alt="" @load="imgloadtwo"></a>
          <p class="title">{{item.title}}</p>
          <span class="price">￥{{item.price}}</span>
          <span class="cfav">{{item.cfav}}</span>
      </div>
  </div>
</template>
<script>
export default {
  name: 'goodsrighttwo',
  data(){
      return {
          currentIndex:0,
      }
  },
  props: {
      categoryDates:{
          type: Array,
          default(){
              return []
          }
      }
  },
  
  methods: {
      imgloadtwo(){
          this.$emit("imgloadtwo")
      }
  },
}
</script>
<style scoped>
.goodsrighttwo{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; 
}
.goodsitem{
    width: 47%;
}
img{
    width: 100%;
    border-radius: 5px;
}
.title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.price{
    color: #fe8197;
}
.goodsitem p,span{
    font-size: 12px;
}
.cfav{
    position: relative;
    margin-left: 20px;
}
.cfav::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/home/collect.svg") 0 0/14px 14px;
  }
</style>