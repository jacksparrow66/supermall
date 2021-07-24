<template>
  <div id="buycar">
    <navbar class="navbar">
      <div slot="center">购物车({{count}})</div>
    </navbar>
    <scroll class="scroll" ref="scroll">
      <goodslist/>
    </scroll>
    <sum class="sum"/>
  </div>
</template>
<script>
import goodslist from "./ChildComponents/goodslist/goodslist.vue";
import navbar from '@/components/navbar/Navbar.vue';
import sum from './ChildComponents/bottom/sum';
import scroll from '@/components/common/bscroll/Bscroll.vue';
import {debounce} from "@/components/common/time.js"
export default {
  name: 'buycar',
  components:{
    goodslist,
    navbar,
    scroll,
    sum
  },
  computed: {
    count(){
      let count =0;
      for (let index = 0; index < this.$store.state.list.length; index++) {
        count  += this.$store.state.list[index].count;
      }
      return count;
    }
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>
<style>
#buycar {
  position: relative;
  height: 100vh;
}
.navbar{
  position: relative;;
  left:0;
  right: 0;
  background-color: #ff8d98;
  color: white;
}
.sum{
  position: fixed;
  left: 0;
  bottom: 50px;
  right: 0;
  line-height:40px;
  font-size:14px;
  background-color: #fff;
}
.scroll{
  height:calc(100vh - 80px);
}
</style>