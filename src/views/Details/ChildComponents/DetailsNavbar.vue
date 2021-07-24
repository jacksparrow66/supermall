
<template>
  <div id='DetailsNavbar'>
      <Navbar>
          <div slot='left' class='left' @click="backClick">
              <img src="@/assets/img/Details/back.svg" alt="">
          </div>
          <div slot='center' class="navbars">
              <div class="banners" 
                v-for="(item,index) in titles" 
                :key="index" 
                :class="{active:index==currentIndex}" 
                @click="itemClick(index)">{{item}}
              </div>
          </div>
      </Navbar>
  </div>
</template>
<script>
import Navbar from "@/components/navbar/Navbar.vue"
export default {
  name: 'DetailsNavbar',
  data(){
      return{
          titles: ["商品","参数","评论","推荐"],
          currentIndex:0
      }
  },
  components:{
      Navbar
  },
  methods:{
      itemClick(index){
          this.currentIndex = index;
          this.$emit("detailsNavclick",index);
      },
      backClick(){
          this.$router.go(-1)
      }
  }
}
</script>
<style scoped>
#DetailsNavbar{
    background-color: #fff;
    position: relative;
    z-index: 99999;
}
.navbars{
    display: flex;
    font-size: 13px;
}
.banners{
    flex: 1;
}
.left{
    margin-top: 7px;
}
.left img{
    height: 23px;
}
.active{
    color: #ff8d98;
}
</style>