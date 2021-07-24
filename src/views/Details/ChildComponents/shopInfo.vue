<template>
  <div id='shopInfo'>
      <div class="logo">
          <img :src="shop.logo" alt="">
          <span>{{shop.name}}</span>
      </div>
      <div class="shophome">
          <div class="shophome-item1">
              <div class="sum">
                  {{shop.fans}}
                  <div>总销量</div>
              </div>
              <div class="allsales">
                  {{shop.goodCount}}
                  <div>全部宝贝</div>
              </div>
          </div>
          <div class="shophome-item2">
              <div class="item" v-for="(item,index) in shop.scores" :key="index">
                  <span class="item-name">{{item.name}}</span>
                  <span class="item-score green" :class="{red:item.isBetter}">{{item.score}}</span>
                  <span class="item-height greenbc" :class="{redbc:item.isBetter}">{{item.isBetter?"高":"低"}}</span>
              </div>
          </div>
      </div>
      <div class="go">
          <button class="btngo">进店看看</button>
      </div>
  </div>
</template>
<script>
export default {
  name: 'shopInfo',
  props:{
      shop:{
          type:Object,
          default(){
              return {}
          }
      }
  },
}
</script>
<style scoped>
/* 这个是logo的盒子，里面有logo和店铺名字 */
.logo{
    height:50px;
    line-height:60px;
    display:flex;
    padding-left: 20px;
    margin-bottom: 20px;
    margin-top: 10px;
}
.logo>img{
    width: 50px;
    height:50px;
    border:1px solid gray;
    border-radius: 50%;
}
.logo>span{
    flex: 1;
    margin-left:20px;  
    line-height:50px;
    font-size: 15px;
}

/* 这里是logo下面的数据 */
.shophome{
    display: flex;
}
.shophome-item1{
    width: 50%;
    display: flex;
    border-right: 1px solid gray;
    box-sizing: border-box;
}
.sum,.allsales{
    flex:1;
    text-align: center;
    box-sizing: border-box;
    margin: auto;
}
.sum>div,.allsales>div{
    margin-top: 5px;
    font-size: 12px;
}
.shophome-item2{
    flex: 1;
    display:flex;
    font-size: 13px;
    flex-direction:column;
}
.item{
    margin-bottom: 10px;
    margin-left: 10px;
}
.item-name{
    margin-right: 10px;
}
.item-height{
    float: right;
    margin-right: 40px;
}
.go{
    padding: 10px;
    text-align: center;
}
.btngo{
    padding: 3px 45px;
    background-color:#c3c3c3;
    color: white;
    font-size: 12px;
    border: none;
    border-radius:5px;
}
/* 这里是4个class，第一个和第二个是评分的颜色，第三个和第四个则是高低的样式 */
.green{
    color: green;
}
.red{color: red}
.greenbc{
    background-color:green;
    color: white;
}
.redbc{
    background-color:red;
    color: white;
}
</style>