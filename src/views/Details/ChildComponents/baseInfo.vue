
<template>
  <div id='baseInfo' v-if="Object.keys(goods).length !==0">
    <div class='title'>{{goods.title}}</div>
    <div class='price'>
      <span class='newprice'>{{goods.newPrice}}</span>
      <span class='oldprice'>{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class='columns'>
      <span class="columnsleft">{{goods.columns[0]}}</span>
      <span class="columnscenter">{{goods.columns[1]}}</span>
      <span class="columnsright">{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class='icontext'>
      <span class='icontext-item'>
        <img class='icon' :src="goods.services[2].icon" alt="">
        {{goods.services[2].name}}
      </span>
      <span class='icontext-item'>
        <img class="icon" :src="goods.services[2].icon" alt="">
        {{goods.services[3].name}}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'baseinfo',
  props: {
    goods: {
      type:Object,
      default(){
        return {}
      }
    }
  },
  created(){
  },
}
</script>
<style scoped>
/* 这个是整个组件 */
#baseInfo{
  background-color: #ffffff;
}

/* 商品的标题 */
.title{
  padding:10px 20px;
}

/* 商品的价格那一栏 */
.price{
  padding: 0px 20px;
}
.newprice{
  color: red;
  font-size: 20px;
}
.oldprice{
  font-size: 13px;
  color: #b8b8b9;
}
.discount{
  background-color:#f6758a;
  color: white;
  border-radius:10px;
  font-size: 14px;
  padding: 2px 3px;
}

/* 销量，收藏人数 */
.columns{
  display: flex;
  padding: 15px 20px 10px;
  border-bottom: 4px solid #f8f8f8;
}
.columns>span{
  font-size: 12px;
  color: #b8b8b9;
  flex: 1;
}
.columnscenter{
  text-align: center;
}
.columnsright{
  text-align: right;
}


/* icon图标和退货 */
.icontext{
  display: flex;
  font-size: 14px;
  padding: 15px 20px 10px;
}
.icontext-item:nth-child(2){
  text-align:right;
}
.icon{
  height: 15px;
}
.icontext-item{
  flex: 1;
}
</style>