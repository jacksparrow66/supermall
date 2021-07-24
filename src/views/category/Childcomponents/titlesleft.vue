<template>
  <div class='titles-left' v-if="Object.keys(categories).length !== 0">
      <bscroll class="scroll" ref="scroll">
        <div class='title' v-for='(item,index) in categories' 
                            :key="index" 
                            :class="{active:currentIndex==index}"
                            @click="titleclick(index)">
            {{item.title}}
        </div>
      </bscroll>
  </div>
</template>
<script>
import bscroll from '@/components/common/bscroll/Bscroll'
export default {
  name: 'titles-left',
  data(){
      return{
          currentIndex:0
      }
  },
  components:{
      bscroll
  },
  props: {
      categories:{
          type:Array,
          default(){
              return[]
          }
      }
  },
  methods: {
      titleclick(index) {
          if (this.currentIndex!=index) {
            this.currentIndex=index;
            this.$emit('titleclick',index);
          }
      }
  },
  active(){
    this.$refs.scroll.refresh();
  }
}
</script>
<style scoped>
.titles-left{
    float: left;
    font-size: 16px;
    text-align: center;
}
.title{
    line-height:50px;
    width:105px;
    height: 50px;
    box-sizing: border-box;
    background-color: #f6f6f6;
}
.active{
    border-left: 5px solid #fe8197;
    color: #fe8197;
}
.scroll{
    position: absolute;
    top: 44px;
    left: 0;
    bottom:50px;
}
</style>