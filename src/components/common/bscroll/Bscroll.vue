<template>
  <div class="content" ref="content">
      <div>
          <slot></slot>
      </div>
  </div>
</template>
<script>
import bscroll from 'better-scroll';
export default {
  name: 'BScroll',
  data(){
      return{
          BScroll:null,
          
      }
  },
  props: {
    probeTypeNumber:{
      type: Number,
      default: 0,
    },
    pullUpLoad:{
        type: Boolean,
        default: true,
    }
  },
  mounted(){
      this.BScroll=new bscroll(this.$refs.content,{
           click:true,
           probeType:this.probeTypeNumber,
           pullUpLoad:this.pullUpLoad,
      })
      if(this.probeTypeNumber==2 || this.probeTypeNumber==3){
        this.BScroll.on("scroll",(position) => {
          this.$emit("scroll",position);
        })
      }
      if(this.pullUpLoad==true){
        this.BScroll.on("pullingUp",() => {
          this.$emit("pullUpLoad");
          // 这个是必须要的，只有这个才可以让他在下一次到底部时候才会去加载数据，没这个方法到底部重新获取数据之后进行一次
          this.BScroll.finishPullUp();
        })
      }
  },
  methods:{
      scrollTo(x,y,time=300){
          this.BScroll.scrollTo(x,y,time);
      },
      refresh(){
        this.BScroll.refresh()
      },
      getScrollY(){
        return this.BScroll.y
      }
  }
}
</script>
<style scoped>
.content{
  /* 这个很重要，这个限制了到时候滚动的区域，出了区域就切割，不切割就会把navbar给挡住*/
  overflow: hidden;
}
</style>