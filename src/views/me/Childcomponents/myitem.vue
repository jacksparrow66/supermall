<template>
  <div class='myitem'>
      <div class="item">
          <b>0.00</b>元
          <p>我的余额</p>
      </div>
      <div class="item">
        <b>0</b>个
          <p>我的优惠</p>
      </div>
      <div class="item">
        <b>0</b>分
          <p>我的积分</p>
      </div>
  </div>
</template>
<script>
export default {
  name: 'myitem',
}
</script>
<style scoped>
.myitem{
  display: flex;
  width: 100%;
  border-top: 2px solid gray;
  text-align: center;
}
.item{
  font-size: 16px;
  flex: 1;
  padding:30px 0px 20px 0px;
}
p{
  margin-top: -5px;
}
b{
  color: red;
}
</style>