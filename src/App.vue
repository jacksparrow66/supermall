<template>
  <div id="app">
    <tab-bar>
      <!-- TabbarItem里面传入的path是给路由使用的，activeColor是用来给点击后变色使用的，让封装更加完整 -->
      <TabbarItem path="/home" activeColor="red">
        <img
          src="@/assets/img/TabBar/home-active.png"
          slot="item-icon"
          alt=""
        />
        <img
          src="@/assets/img/TabBar/home.png"
          slot="item-icon-active"
          alt=""
        />
        <div slot="item-text">首页</div>
      </TabbarItem>
      <TabbarItem path="/category" activeColor="red">
        <img
          src="@/assets/img/TabBar/sort-active.png"
          slot="item-icon"
          alt=""
        />
        <img
          src="@/assets/img/TabBar/sort.png"
          slot="item-icon-active"
          alt=""
        />
        <div slot="item-text">分类</div>
      </TabbarItem>
      <TabbarItem path="/buycar" activeColor="blue">
        <img
          src="@/assets/img/TabBar/buycar-active.png"
          slot="item-icon"
          alt=""
        />
        <img
          src="@/assets/img/TabBar/buycar.png"
          slot="item-icon-active"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </TabbarItem>
      <TabbarItem path="/me" activeColor="red">
        <img src="@/assets/img/TabBar/me-active.png" slot="item-icon" alt="" />
        <img src="@/assets/img/TabBar/me.png" slot="item-icon-active" alt="" />
        <div slot="item-text">我的</div>
      </TabbarItem>
    </tab-bar>
   <keep-alive exclude="Details"> <router-view></router-view></keep-alive>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/Tabbar.vue";
import TabbarItem from "./components/tabbar/TabbarItem.vue";
export default {
  name: "App",
  components: {
    TabBar,
    TabbarItem,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
