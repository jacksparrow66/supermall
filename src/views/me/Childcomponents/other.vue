<template>
  <div class='other'>
    <div class='others'>
        <p>
            <img src="@/assets/img/other/消息.png" alt="">
            我的消息
        </p>    
        <p>
            <img src="@/assets/img/other/积分.png" alt="">
            积分商城
        </p>    
        <p>
            <img src="@/assets/img/other/会员.png" alt="">
            会员卡  
        </p>    
    </div>      
    <div class="others">
        <p>
            <img src="@/assets/img/other/购物车空.png" alt="">
            我的购物车  
        </p>  
        <p>
            <img src="@/assets/img/other/下载.png" alt="">
            下载APP
        </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'other',
}
</script>
<style scoped>
.others {
    border-top: 15px solid rgba(242, 242, 240,0.5);
}
p img{
    width:15px;
}
p{
    padding: 3px 20px;
    font-size: 16px;
}
</style>