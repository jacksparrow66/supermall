<template>
  <div id='homeswiper'>
      <Swiper>
          <SwiperItem v-for="(item,index) in banner" :key="index">
              <a :href="item.link">
                  <img :src="item.image" alt="" @load="swiperLoad">
              </a>
          </SwiperItem>
      </Swiper>
  </div>
</template>
<script>
import {Swiper, SwiperItem} from '@/components/common/swiper/index.js';
export default {
  name: 'homeswiper',
  data(){
      return {
          isLoad:true,
      }
  },
  props:{
      banner:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components:{
      Swiper,
      SwiperItem
  },
  methods:{
      swiperLoad(){
          if(this.isLoad){
            this.$emit("swiperLoad");
            this.isLoad = false;
          }
      }
  }
}
</script>
<style>

</style>