<template>
  <div class='goodsright'>
      <bscroll ref="scrolltwo" class="scrolltwo">

      </bscroll>
      
  </div>
</template>
<script>
import goodsrightone from './goodsrightone.vue'

export default {
  name: 'goodsright',
  components:{
    goodsrightone
  }
}
</script>
<style scoped>
.scrolltwo{
  position: absolute;
  top: 44px;  
  right: 0;
  bottom: 60px;
}
</style>