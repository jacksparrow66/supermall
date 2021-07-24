<template>
  <div id=''>
    <navbar class='navbar'>
        <div slot='center'>我的档案</div>
      </navbar>
    <scroll class='scrolls'>
      
      <account/>
      <myitem/>
      <other/>
    </scroll>
  </div>
</template>
<script>
import navbar from '@/components/navbar/Navbar.vue';
import account from './Childcomponents/account.vue';
import myitem from './Childcomponents/myitem.vue';
import other from './Childcomponents/other.vue';
import scroll from '@/components/common/bscroll/Bscroll.vue'
export default {
  name: 'me',
  components:{
    navbar,
    account,
    myitem,
    other,
    scroll
  }
}
</script>
<style>
.navbar {
  background-color: #fe8096;
  color: white;
  font-size: 16px;
  border-bottom: 2px solid gray;
}
.scrolls{
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom:50px;
}
</style>