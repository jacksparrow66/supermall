<template>
  <div id='home'>
    <!-- 这个是头部导航栏的组件， -->
      <Navbar id="navbar"><div slot='center'>购物街</div></Navbar>
      <tabcontrol :titles="['流行','新品','精选']" @tabclick="tabclick" v-show="istabfixed" ref="tabcontrol1"/>
      <!-- ref是为了后面获取到该组件， -->
      <!-- :propType="3"是为了传一个参数给子组件， -->
      <!-- @scroll=“backtopshow”是监听bscroll里面发送出来的事件 -->
      <bscroll class='content' 
               ref="bscroll" 
               @scroll="backtopshow" 
               :probeTypeNumber="3" 
               :pullUpLoad="true" 
               @pullUpLoad="loadMore">
        <!-- 这个是轮播图的组件，被封装起来了，所以只有一个标签，主要内容在homeswiper中 -->
        <homeswiper :banner='banner' @swiperLoad="swiperLoad"/>
        <!-- 这个是中间4个小图标的组件 -->
        <homerecommonviews :recommend="recommend" class="homerecommonviews"/>
        <!-- 这个是本周流行的那个图片 -->
        <nowpopular/>
        <!-- 这个是流行，新品，精选哪个导航栏的组件  ，监听tab-ccontrol发送出来的事件 -->
        <tabcontrol :titles="['流行','新品','精选']" @tabclick="tabclick" ref="tabcontrol2"/>
        <!-- 这个是那些商品列表的组件，发送的数据通过点击tab-control发送过来的下标，然后去判断是哪个，然后在去发送不同的内容回去 -->
        <!-- showgoods是一个计算属性， -->
        <GoodList :goods="showgoods"/> 
      </bscroll>
      <backtop @click.native="backClick" v-show="isBackTopShow"/>
  </div>
</template>
<script>
import Navbar from '@/components/navbar/Navbar.vue';
import tabcontrol from '@/components/tab-control/tab-control.vue';
import GoodList from '@/components/goodslist/GoodList.vue';
import backtop from '@/components/backtop/back-top.vue';

import homerecommonviews from './homerecommonviews/homerecommonviews.vue';
import nowpopular from './nowpopular/nowpopular.vue';

import homeswiper from './homeswiper/Homeswiper.vue'
import bscroll from '@/components/common/bscroll/Bscroll.vue';
import {getHomeData,getHomeGoods} from '@/network/home.js';
import {debounce} from '@/components/common/time.js';

export default {
  name: 'home',
  // 注册各个组件
  components:{
    Navbar,
    tabcontrol,
    GoodList,
    homeswiper,
    homerecommonviews,
    nowpopular,
    bscroll,
    backtop
  },
  data(){
    return{
      banner: [],//这个是swiper的数据图片
      recommend:[],//这个是轮播图下面几个圆形图片的数据
      currentType: 'pop',//这个是没有点击时候home发送给tab-control默认的数据类型
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      isBackTopShow:false,//这个是返回顶部是否出现的属性，为true就出现，false就不出现
        //因为tab-control滚动停留是用的2个tab-control实现的，当滚动到具体距离时候，让第二个tab-control显示出来
      istabfixed:false,
      scrolltop:0,
      saveY:0
    }
  },
  computed:{
    showgoods(){
      return this.goods[this.currentType].list
    }
  },
  created(){
    this.gethomedata()
    // 这里是发送数据请求，请求回来3中类型的数据，每种类型数据请求一页
    this.gethomegoods("pop")
    this.gethomegoods("new")
    this.gethomegoods("sell")

    
  },
  mounted(){
    // 监听GoodListItem发出来的事件，不是普通用$emit发送出来的，使用了$bus，$bus是在main.js中定义的
    // $bus.$emit发射出来事件，使用$bus.$on接收
    // 用了@load每次每张图片加载完之后都重新让better-scroll计算一次 高度
    const refresh=debounce(this.$refs.bscroll.refresh,500);
    // 这个函数会被触发30次，如果直接把refresh方法在这里调用就会导致每次监听方法都要触发这个函数，浪费资源，所以就封装了一个防抖函数
    this.$bus.$on("imgLoadOver",() => {
      refresh();
    })
  },
  methods:{
    // 这个方法是在轮播加载完之后，把此时tab-control离顶部的距离赋值给scrollTop
    swiperLoad(){
      this.scrolltop=this.$refs.tabcontrol2.$el.offsetTop;
    },

    // 防抖函数,防抖函数的大概效果就是假如加载图片，在500ms内加载完加载下一张如果在500ms内完成，那下下张图片的加载就会重新计时500ms，若果超过了500ms就会 触发防抖函数，去执行函数
    // 第一次进入这里，timer会被赋上一个定时器的值，但是在delay时间内，就再一次进来了这个函数中去，导致timer被清除了定时器，只有在最后一次进入这个函数的时候，因为没有再次进入所以没有被清除定时器函数，然后就可以执行了


    // 这个是加载更多的函数，当滚动到最底部时候去触发这个函数，先获取到目前在pop，new，sell的哪一个
    // 然后再去调用获取数据的方法
    loadMore(){
      this.gethomegoods(this.currentType);
      // setInterval(()=>{
      //   this.$refs.bscroll.BScroll.refresh();
      // },1000)
        // this.$refs.bscroll.BScroll.refresh();
    },


    // 这个是监听bscroll组件发送出来的scroll事件和position数据，
    backtopshow(position){
      // 因为滚动之后position中的y值是一个负数，所以要取反，当他大于1000修改data中的数据，让v-show的变成true
      this.isBackTopShow=(-position.y)>1000;
      this.istabfixed=(-position.y)>this.scrolltop;
    },


    // 这个方法是点击返回顶部之后触发的方法backClick
    backClick(){
      // 使用this.$refs.bscroll就可以获取到那个better-scroll对象，然后去访问里面的scrollTo方法这个方法是自己封装的
      this.$refs.bscroll.scrollTo(0, 0);
    },


    // 这个是监听tab-control发送出来的事件，因为他还发送了index出来，所以index用swtich来判断是哪一个下标，
    // 0代表pop，1代表new，2代表sell
    tabclick(index){
          switch(index){
              case 0:{
                  this.currentType ='pop';
                  break;
              };
              case 1:{
                  this.currentType ='new';
                  break;
              };
              case 2:{
                  this.currentType ='sell';
                  break;
              }
          }
          this.$refs.tabcontrol1.currentIndex=index;
          this.$refs.tabcontrol2.currentIndex=index;
      },


    /*
      下面2个方法是网络请求的方法gethomedata和gethomegoods
    */ 
    //  这个是获取到home首页数据的方法
    gethomedata(){
      getHomeData().then(result => {
        this.banner = result.data.banner.list;
        this.recommend = result.data.recommend.list;
      },err => {
        console.log(err);
      })
    },

    // 这个是通过pop，new，sell3个类型，外加page获取到的数据
    // 获取这个数据的时候是需要添加page的，因此发送数据请求就要加2个参数，
    // 1类型，pop，new，sell的一个，
    // 2.page页数，默认情况下3中类型的页数都是0，调用方法获取数据后，page就会自增
    gethomegoods(type){
      const page = this.goods[type].page+1;
      getHomeGoods(type,page).then(result => {
        // 这个是push方法的可变长度参数的写法，表示把目标数组中的内容全部加入到该数组之中去
        this.goods[type].list.push(...result.data.list);
        this.goods[type].page+=1;
      })
    }
  },
  // 这个是当该组件处于活跃时候触发的函数，调用bscroll的scrollTo方法，去让他滚动到saveY的位置
  activated(){
    this.$refs.bscroll.scrollTo(0,this.saveY,0)
    this.$refs.bscroll.refresh()
  },
  // 这个是当组件离开home时候触发函数，去获取并且记录当前滚动的y值，给saveY保存着
  deactivated(){
    this.saveY=this.$refs.bscroll.getScrollY();
  }
}
</script>
<style scoped>
.content{
  position:absolute;
  top:44px;
  bottom:50px;
  left:0px;
  right:0px;
}
#navbar {
    background-color: #ff8d98;
    color: white;
  box-shadow: 0px 1px 1px rgba(0,0,0,0.5);
}
.homerecommonviews{background-color: #fff;}
</style>