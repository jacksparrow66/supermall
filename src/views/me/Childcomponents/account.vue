<template>
  <div class='account'>
      <div class="avatar">
          <img v-if="avatarshow" src="@/assets/img/avatar/毛利凯.jpg" alt="">
          <img v-else src="@/assets/img/avatar/小陶.jpg" alt="">
      </div>
      <div class="info">
              <p class="infoitem">
                  <b v-if="avatarshow">你的利凯大帝</b>
                  <b v-else>流氓</b>
                  <img src="@/assets/img/avatar/切换.png" alt="" @click="changeavatar">
              </p>
              <p>
                    <img src="@/assets/img/avatar/手机.png" alt="">
                    暂无绑定手机号
              </p>
      </div> 
       <div class="right">
              <img src="@/assets/img/avatar/右边.png" alt="">
        </div>
  </div>
</template>
<script>
export default {
  name: 'account',
  data(){
      return {
          avatarshow:true,
      }
  },
  methods: {
      changeavatar(){
          this.avatarshow=!this.avatarshow;
      }
  }
}
</script>
<style scoped>
.info img{
    height: 20px;
}
.account{
    display: flex;
    background-color: #ff8197;
    padding: 15px;
}
.avatar{
    width: 100px;
}
.info{
    flex: 1;
    padding:5px 10px;
    color: white;
}
p{
    font-size: 14px;
}
.right{
    width: 50px;
}
.right img{
    width: 40px;
    padding: 30px 0px;
}
.avatar img{
    width: 100px;
    height:100px;
    border-radius: 50%;
}
.infoitem{
    margin-left: 5px;
}
.infoitem img{
    margin-left: 20px;
}
</style>