<template>
  <div class="tabbaritem" @click="itemClick">
    <div v-if=" isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style='activeStyle'><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TabbarItem",
  props:{
      path: String,
      activeColor:{
          type: String,
          default:'red'
      }
  },
  data() {
    return {
     
    };
  },
  methods:{
      itemClick(){
          if(this.$route.path.indexOf(this.path)==-1) {
            this.$router.replace(this.path)
          }
      }
  },
  computed:{
      isActive(){
          return this.$route.path.indexOf(this.path)!=-1;
      },
      activeStyle(){
          return this.isActive ? {color:this.activeColor} : {};
      }
  }
};
</script>
<style>
.tabbaritem {
  flex: 1;
  text-align: center;
  font-size: 12px;
  z-index: 999;
}
.tabbaritem img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>