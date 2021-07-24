
<template>
  <div id='tabcontrol'>
      <div v-for="(item,index) in titles" 
      :key="index" class="tabcontrol-item"
      :class="{active:currentIndex==index}"
      @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>
<script>
export default {
  name: 'tabcontrol',
  data(){
      return{
          currentIndex:0
      }
  },
  props:{
      titles:{
          type:Array,
          default(){
              return []
          }
      }
  },
  methods:{
      itemClick(index){
        //   这个是修改当前点击的是流行，新品，精选中的那个的下标，
          this.currentIndex=index;
        //   发送事件出去，让home接收，让他知道点击的下标，在去通过下标来选择是pop，new，sell的那个
          this.$emit('tabclick',index)
      }
  }
}
</script>
<style>
#tabcontrol{
    display: flex;
    font-size: 14px;
    z-index: 9;
    background-color:white;
    padding-bottom:10px;
}
.tabcontrol-item{
    flex: 1;
    text-align: center;
    margin-top:15px;
}
.tabcontrol-item span{
    padding: 5px;
}
.active{
    color: #ff8e97;
}
.active span{
    border-bottom:4px solid #ff8e97;
}
</style>