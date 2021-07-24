<template>
  <div id='detailstabbar'>
      <div class="icon">
          <div class="icon-item"  index="0" @click="itemclick()">
            <img src="@/assets/img/Details/客服.png" alt="">
            <!-- <img v-else src="@/assets/img/Details/客服(1).png" alt=""> -->
            <div class="icon-text">客服</div>
          </div>
          <div class="icon-item" index="1" @click="itemclick(index)">
              <img src="@/assets/img/Details/店铺.png" alt="">
              <!-- <img v-else src="@/assets/img/Details/店铺(1).png" alt=""> -->
             <div class="icon-text">店铺</div>
          </div>
          <div class="icon-item" index="2" @click="itemclick(index)">
              <img src="@/assets/img/Details/收藏.png" alt="">
              <!-- <img v-else src="@/assets/img/Details/收藏(1).png" alt=""> -->
              <div class="icon-text">收藏</div>
          </div>
      </div>
      <div class="text">
          <div class="buycar" @click="gobuycar">
              加入购物车
          </div>
          <div class="buy">购买</div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'detailstabbar',
  methods:{
    gobuycar(){
        this.$emit("gobuycar")
    }
}
}
</script>
<style scoped>
#detailstabbar{
    background-color: #fff;
    display: flex;
    height:50px;
    text-align:center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0px;
}
.icon,.text{
    flex: 1;
    display: flex;
}
.icon-item,.buycar,.buy{
    flex: 1;
    line-height:50px;
    font-size: 13px;
}
.icon-item{
    padding-top: 5px;
}
.icon-item img{
    display:block;
    height: 24px;
    background-color: #fff;
    margin:auto;
}
.icon-item span{
    margin-left: 20px;
    height: 24px;
    background-color: blue;
}
.icon-text{
    margin-top: -10px;
}
.buycar{
    background-color:#f9d90d;
}
.buy{
    background-color: #f87596;
}
</style>