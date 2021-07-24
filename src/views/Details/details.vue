<template>
  <div id='Details'>
    <DetailsNavbar  @detailsNavclick="detailsNavclick" ref="nav"/>
    <Scroll class="content" ref="scroll" :probeTypeNumber="3" @scroll="scrollposition">
      <Swiper class='Detailswiper'>
            <SwiperItem v-for="(item,index) in swipertopImages" :key="index">
                    <img :src="item" alt="">
            </SwiperItem>
      </Swiper>
      <baseInfo :goods="goods"/>
      <shopInfo :shop="shop"/>
      <goodsInfo :detailsInfo="detailsInfo" @goodsLoad="goodsLoad"/>
      <pramInfo ref="prams" :paramInfo="paramInfo"/>
      <comment ref="comment" :commentInfo="commentInfo"/>
      <goodlist ref="recommend" :goods="recommend"/>
    </Scroll>
    <detailstabbar @gobuycar="gobuycar"/>
    <backtop @click.native="backclick"  v-show="positionY>1000"/>
    <!-- <toast message="fasfsad" :isshow="true"/> -->
    <!-- 这个是最原始的方法，组件，也可以自己封装成一个插件 -->
  </div>
</template>
<script>
import DetailsNavbar from "./ChildComponents/DetailsNavbar.vue"
import baseInfo from "./ChildComponents/baseInfo.vue"
import shopInfo from "./ChildComponents/shopInfo.vue";
import goodsInfo from "./ChildComponents/goodsInfo.vue";
import pramInfo from "./ChildComponents/pramInfo.vue";
import comment from "./ChildComponents/comment.vue";
import Scroll from "@/components/common/bscroll/Bscroll.vue"
import backtop from "@/components/backtop/back-top.vue"
import goodlist from "@/components/goodslist/GoodList.vue"
import detailstabbar from "./ChildComponents/detailstabbar.vue"
// import toast from '@/components/common/toast/toast.vue'

import {debounce} from '@/components/common/time.js';
import {SwiperItem,Swiper} from "@/components/common/swiper/index.js"
import {DetailsData,Goods,Shop,GoodsParam,recommendData} from "@/network/Details.js"
export default {
  name: 'Details',
  data(){
      return {
          iid:null,     //存储home过来时候点击图片的iid值
          swipertopImages:[],     //存储网页请求获取到的轮播图的图片
          goods:{},   //这个是存储轮播图下面的价格之类的信息
          shop:{},  //这个是存储店铺信息
          detailsInfo:{},  //这个是存储商品详细信息 
          paramInfo:{}, //这个是存储参数信息
          commentInfo:{}, //这个是存储评价信息
          backtop:false, //这个是backtop按钮显示和隐藏的控制信息
          recommend:[],  //这个是存储推荐的信息
          themeYs:[],   //这个是用来存储那些组件的offsettop的
          positionY:0,   //这个是用来存储position的
          currentIndex:0,   //这个是是用来存储目前商品，参数，评论，推荐，目前滚动到哪里的下标
      }
  },
  components:{
    DetailsNavbar,
    baseInfo,
    shopInfo,
    Swiper,
    SwiperItem,
    goodsInfo,
    pramInfo,
    comment,
    Scroll,
    backtop,
    goodlist,
    detailstabbar,
    // toast
  },
  created(){
    //   注意$rouer获取到的是路由对象，$route拿到的是路由属性对象
      this.iid =this.$route.params.iid;
      DetailsData(this.iid).then(res => {
        //   res就是网页发送请求的结果
          const data=res.result;
          // console.log(data);
          // 1.获取轮播数据
          this.swipertopImages=data.itemInfo.topImages

          // 2.获取商品信息
          this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);

          // 3.获取店铺信息
          this.shop=new Shop(data.shopInfo)

          // 4.获取商品详细信息
          this.detailsInfo=data.detailInfo;

          // 5.获取参数信息
          this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule);

          // 6.获取评价信息
          this.commentInfo=data.rate;
      })
      // 7.请求推荐数据
      recommendData().then(res => {
        this.recommend=res.data.list;
        // console.log(this.recommend);
      })
  },
  methods:{
    goodsLoad(){
      const refresh=debounce(this.$refs.scroll.refresh,500);
      refresh();
      this.getthemeY();
      // console.log(this.themeYs);
    }, 
    backclick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    scrollposition(position){
      this.positionY = -position.y;
      const length=this.themeYs.length;
      for (let i = 0; i <length; i++) {
        if (this.currentIndex !== i &&
        ((i<length-1 && this.positionY>=this.themeYs[i] && this.positionY<this.themeYs[i+1]) || (i===length-1 && this.positionY>=this.themeYs[i]))){
          this.currentIndex=i;
          this.$refs.nav.currentIndex=this.currentIndex
        }
      }
    },
    detailsNavclick(index){
      // index就是4个的下标，通过下标去获取响应的距离，然后用scrollto跳转过去
      // +44的作用是因为还有一个固定的navbar必须要展示出来
      this.$refs.scroll.scrollTo(0, -this.themeYs[index]+44,500);
    },
    // 这个方法是去获取商品，参数，评论，推荐4个组件获取offsettop的方法
    getthemeY(){
      this.themeYs=[];
      this.themeYs.push(0);
      this.themeYs.push(this.$refs.prams.$el.offsetTop);
      this.themeYs.push(this.$refs.comment.$el.offsetTop);
      this.themeYs.push(this.$refs.recommend.$el.offsetTop);
    },
    // 这个是加入购物车函数
    gobuycar(){
      const product={};
      product.image=this.swipertopImages[0];
      product.title=this.goods.title;
      product.desc=this.goods.desc;
      product.price=this.goods.realPrice;
      product.iid=this.iid;
      product.count=1;
      product.check=false;



      // 添加到购物车，使用vuex，先发送一个方法名和参数，去vuex中调用、
      // this.$store.commit('addcart',product)
      // 调用的是actions中的方法，而不是mutations中的，因为mutations中的方法不可以返回promise，但是我们又需要他返回Promise
      // actions就相当于mutations的升级版。可以使用异步操作，调用方案方法也变成了this.$store.dispatch('方法名',参数)
      this.$store.dispatch('addcart',product).then(res => {
        // console.log(res);
        this.$toast.show(res,1500)
        // console.log(this.$toast);
      })
    }
  },
  mounted(){
    // 使用防抖函数
    const refresh=debounce(this.$refs.scroll.refresh,500);
    this.$bus.$on("imgLoaddetails",() => {
      refresh();
    })
  }
}
</script>
<style scoped>
#Details{
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.Detailswiper{
    height:300px;
    overflow: hidden;
}
.content{
  height:calc(100% - 44px);
  background-color: #fff;
}
</style>