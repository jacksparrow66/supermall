<template>
  <div class='category'>
      <navbar class="navbar">
        <div slot='center'>商品分类</div>
      </navbar>
      <titlesleft :categories="categories" @titleclick="titleclick"/>
      <tabcontrol :titles="['流行','新品','精选']" @tabclick="tabclick" class="tabcontrol" v-show="tabshow" ref="tabcontrol2"/>
      <bscroll ref="scrolltwo" class="scrolltwo" :probeTypeNumber="3" @scroll="scroll">
        <goodsrightone :currentGoods="currentGoods" @imgload="imgload"/>
        <tabcontrol :titles="['流行','新品','精选']" @tabclick="tabclick" ref="tabcontrol"/>
        <goodsrighttwo :categoryDates="goods[currentType]" @imgloadtwo="imgloadtwo"/>
      </bscroll>
      <backtop @click.native="backtop" v-show="positionY>500"/>
  </div>
</template>
<script>
import bscroll from '@/components/common/bscroll/Bscroll'
import navbar from '@/components/navbar/Navbar.vue'
import titlesleft from './Childcomponents/titlesleft.vue';
import goodsrightone from './Childcomponents/goodsrightone.vue';
import tabcontrol from '@/components/tab-control/tab-control.vue';
import goodsrighttwo from './Childcomponents/goodsrighttwo';
import backtop from '@/components/backtop/back-top.vue'
import {getCategory,getSubcategory,getCategoryDetail} from '@/network/sort.js';
import {debounce} from '@/components/common/time.js'
export default {
  name: 'sort',
  components:{
    bscroll,
    navbar,
    titlesleft,
    goodsrightone,
    tabcontrol,
    goodsrighttwo,
    backtop
  },
  data(){
    return{
      categories:[],   //这个是存储titles的数据
      categoryDate:{},  //这个是存储所有数据的
      currentIndex:0,   //这个是存储目前左边选择到哪一个的
      currentGoods:[],   //这个是点击左边获取到的数据
      goods:{
        'pop':[], 
        'new':[], 
        'sell':[]
      },
      currentIndex2:0, //这个是存储tab-control目前点击的是那个的
      currentIndex3:0, //这个是存储第一个tab-control目前点击的那个
      positionY:0, //这个是存储滚动的Y值
      scrollTop:0, // 这个是用来存储tab-control距离顶部的距离
    }
  },
  created(){
    // 在这个组件创建后默认展示第一个的数据,_getCategory这个方法是获取数据的方法
    this._getCategory();
  },


  methods:{
    // 这个是滚动距离的监听的方法
    scroll(position){
      this.positionY=(-position.y)
    },


    // 这个是获取总的数据的方法
    _getCategory(){
      // 获取数据
      getCategory().then(res => {
        this.categories=res.data.category.list;
        // console.log(this.categories); 
        for (let index = 0; index < this.categories.length; index++) {
          // 先初始化一遍categoryDate中的内容，让里面出现空对象
          this.categoryDate[index]={
            firstgoods:{}, //这个是分类先出现的商品，右边上面的
          }
        }
        // 这里先手动获取第一个默认展示的数据，后面点击哪个就去获取哪个
        this._getSubcategory(0);
        this._getCategoryDetail('pop');
        this._getCategoryDetail('sell');
        this._getCategoryDetail('new');
      })
    },


    // 这个是点击左边的那些类型，然后去获取新数据
    _getSubcategory(index){
      // 通过点击titles后发送出来的index动态的去获取对应的maitkey去发送和网络请求
      const maitKey=this.categories[index].maitKey;
      getSubcategory(maitKey).then(res => {
        // 保存获取到的数据
        this.categoryDate[index].firstgoods=res.data;
        this.currentGoods=this.categoryDate[index].firstgoods.list;
      })
    },

    // 这个是去获取精品那些的数据
    _getCategoryDetail(type){
      // 获取到发送网络请求要用到的参数
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 发送网络请求
      getCategoryDetail(miniWallkey, type).then(res => {
        this.goods[type]=res
      })
    },


    // 这个是监听点击titles之后的方法
    titleclick(index){
      this._getSubcategory(index);
      this.currentIndex=index;
      // 手动去调用获取数据的方法，因为每次点击title之后都要哦重新获取数据
      this._getCategoryDetail('pop')
      this._getCategoryDetail('new')
      this._getCategoryDetail('sell')
    },
    // 这个是在图片加载完之后去触发refresh重新计算滚动高度
    imgload(){
      const refresh=debounce(this.$refs.scrolltwo.refresh,500)
      refresh();
      this.scrollTop=this.$refs.tabcontrol.$el.offsetTop;
    },
    imgloadtwo(){
      const refresh=debounce(this.$refs.scrolltwo.refresh,500)
      refresh();
    },
    // 这个是点击tab-control触发的函数
    tabclick(index){
      this.currentIndex2=index;
      this.$refs.tabcontrol2.currentIndex=this.currentIndex2;
      this.$refs.tabcontrol.currentIndex=this.currentIndex2;
    },
    backtop(){
      this.$refs.scrolltwo.scrollTo(0,0);
    }
  },


  // 这个是计算属性，通过点击tab-control发送出来的index去决定把pop，new，sell的哪个数据发送给子组件
  computed:{
      currentType(){
          switch(this.currentIndex2){
              case 0:
                  return 'new';
                  break;
              case 1:
                  return 'pop';
                  break;
              case 2:
                  return 'sell';
          }
      },
      tabshow(){
        return this.scrollTop<this.positionY
      }
  },
}
</script>
<style>
.navbar {
  background-color: #fe8197;
  color: white;
  font-size: 15px;
  position: relative;
}
.scrolltwo{
  position: absolute;
  top: 44px;  
  right: 0;
  left: 105px;
  bottom: 60px;
}
.tabcontrol{
  position: fixed;
  left: 105px;
  right: 0;
}
</style>