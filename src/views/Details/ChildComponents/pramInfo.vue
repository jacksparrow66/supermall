<template>
  <div id='pramInfo' v-if="Object.keys(paramInfo).length !==0">
      <div class="size">
          <div class="size-item" v-for="(item,index) in paramInfo.sizes[0]" :key="index">
              <div class="size-item-item" v-for="(items,index) in item" :key="index">
                  {{items}}
              </div>
          </div>
      </div>
      <div class="info">
          <div class="info-item" v-for="(item,index) in paramInfo.infos" :key="index">
              <div class="key">{{item.key}}</div>
              <div class="value">{{item.value}}</div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'pramInfo',
  props: {
      paramInfo:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  watch:{
      paramInfo(){
      }
  }
}
</script>
<style scoped>
#pramInfo{
    padding: 20px;
}
.size-item,.info-item{
    display: flex;
    padding: 10px 0px;
    color: gray;
    border-bottom: 2px solid #cbcbcb;  
    font-size: 14px; 
}
.size-item-item{
    flex: 1;
    text-align:center;
}
.info-item>.value{
    flex: 1;
}
.key{
    width: 20%;
    text-align:center;
}
.value{
    padding-left:60px;
    color: #f3a2b2;
}
</style>