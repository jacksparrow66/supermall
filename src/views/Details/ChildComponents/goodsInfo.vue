<template>
  <div id='goodsInfo' v-if="Object.keys(detailsInfo).length !==0">
    <div class='comment'>
        <div class="start"></div>
        <div class="desc">{{detailsInfo.desc}}</div>
        <div class="end"></div>
    </div>
    <div id="key">{{detailsInfo.detailImage[0].key}}</div>
    <div class="img-list">
      <img v-for="(item,index) in detailsInfo.detailImage[0].list" :key="index" :src="item" @load="goodsLoad">
    </div>
  </div>
</template>
<script>
export default {
  name: 'goodsInfo',
  data(){
    return {
      nownumber:0,         //这个是用来存储目前处于第几张图片的
      goodsimglength:0,    //这个是用来存储图片的总长度的
    }
  },
  props: {
      detailsInfo:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  methods: {
    goodsLoad(){
      // 每次一张图片加载完都会触发这个函数，如果每次加载完都重新发送一次事件，计算一次scroll的高度，很浪费资源
      // 因此直接在加载完最后一张图片去发送事件并且重新计算高度
      this.nownumber++;
      if (this.nownumber==this.goodsimglength) {
        this.$emit('goodsLoad');
      }
    }
  },
  // 监听值的改变，因组件刚创建的时候detailsInfo是没有值的，details组件中还在获取值，就传过来了一个空对象，
  // 这个方法是监听这个值的改变，在获取到值之后把该对象发送过来修改了这个值，就会触发这个方法
  watch:{
    detailsInfo(){
      this.goodsimglength =this.detailsInfo.detailImage[0].list.length;
    }
  }
}
</script>
<style scoped>
#goodsInfo{
    padding: 5px 15px;
}
.start,.end{
    width: 40%;
    border-bottom: 1px solid black;
}
.desc{
  margin: 15px 0px;
  font-size: 12px;
}
.end{
  float: right;
}
#key{
  font-size: 14px;
  margin-top: 30px;
  margin-bottom: 10px;
}

.img-list>img{
  width: 100%;
}
</style>