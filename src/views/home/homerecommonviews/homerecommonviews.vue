<template>
  <div class='recommonview'>
      <div class='recommonview-item' v-for="(item,index) in recommend" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>

  </div>
</template>
<script>
export default {
  name: 'recommonview',
  props: {
      recommend:{
          type:Array,
          default(){
              return []
          }
      }
  }
}
</script>
<style>
.recommonview{
    display:flex;
    text-align: center;
    width: 100%;
    font-size:14px;
    border-bottom: 8px solid #ececec;
}
.recommonview>.recommonview-item{
    flex: 1;
    margin-bottom:10px;
    padding: 10px 0px 20px;
}
.recommonview-item img{
    height:65px;
}
.recommonview-item>a{
    text-decoration:none;
}
</style>