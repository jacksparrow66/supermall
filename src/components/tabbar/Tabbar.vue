<template>
  <div class="tabbar">
    <slot></slot>
    <!-- 这里是插槽的地方，这个组件的作用就是做一个空的导航栏，厘米那没有东西，里面的东西都是用一个一个小组件添加进去的 -->
  </div>
</template>
<script>
export default {
  name: "Tabbar",
};
</script>
<style>

.tabbar {
  z-index: 7;
  background-color: white;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.8);
  height: 49px;
}
</style>