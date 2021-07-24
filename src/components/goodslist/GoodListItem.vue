<template>
     <div class="goods-item" @click="itemClick">
        <img v-lazy="imgsrc" alt="" @load="imgLoad">
        <div class="goods-info">
          <p >{{goodItem.title}}</p>
          <span class="price">￥{{goodItem.price}}</span>
          <span class="collect">{{goodItem.cfav}}</span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'GoodListItem',
  props: {
      goodItem:{
          type: Object,
          default(){
              return []
          }
      }
  },
  computed:{
    imgsrc(){
      return this.goodItem.image || this.goodItem.show.img
    }
  },
  methods:{
    imgLoad(){
      // console.log("over");
      if (this.$route.path.indexOf('/home')!== -1) {
        this.$bus.$emit("imgLoadOver")
      }else if (this.$route.path.indexOf('/details') !== -1){
        this.$bus.$emit("imgLoaddetails")
      }
    },
    itemClick(){
      if(this.$route.path.indexOf('/home') !== -1){
        this.$router.push("/details/"+this.goodItem.iid)
      }
    }
  }
}
</script>
<style>
 .goods-item {
    padding-bottom: 40px;
    width:48%;
    position: relative;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: #ff8e96;
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/home/collect.svg") 0 0/14px 14px;
  }

</style>