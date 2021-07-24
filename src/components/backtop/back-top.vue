<template>
  <div id='backtop'>
    <img src="@/assets/img/back-top/top.png">
  </div>
</template>
<script>
export default {
  name: 'backtop',
}
</script>
<style scoped>
#backtop{
    position:fixed;
    bottom:70px;
    right:10px;
    z-index:9999;
    height:45px;
    width: 45px;
}
#backtop img{
    height:50px;
}
</style>