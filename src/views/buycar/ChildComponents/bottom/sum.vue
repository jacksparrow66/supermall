<template>
  <div class='sumvue'>
      <div class='input'>
        <input type="checkbox" id="allcheck" @click="allcheck" v-model="ischeck">
        <label for="allcheck">全选</label>
        </div>
      <div class="sumprice">合计: ￥{{sumprice}}</div>
      <div class="right">去计算({{count}})</div>
  </div>
</template>
<script>
export default {
  name: 'sum',
  computed:{
      count(){
        const list =this.$store.state.list;
        let count=0;
        for (let index = 0; index < list.length; index++) {
          if (list[index].check) {
            count += list[index].count;
          }
        }
        return count;
      },
      sumprice(){
        const list =this.$store.state.list;
        let sum=0;
        for (let index = 0; index < list.length; index++) {
          if (list[index].check) {
            sum += (list[index].count*list[index].price)
          }
        }
        return sum.toFixed(2);
      },
    ischeck:{
      get:function(){
        let number=0;
        const list =this.$store.state.list;
        if (list.length != 0) {
            for (let index = 0; index < list.length; index++) {
              if (list[index].check) {
                number++;
              }
            }
            return number==list.length;
        }
        
      },
      set:function(){
      }
    }
  },
  methods: {
    // 这个是全选和全不选的方法
    allcheck(){
      const list =this.$store.state.list;
      if (!this.$store.state.ischeck) {
        for (let index = 0; index < list.length; index++) {
          list[index].check = true;
        }
      }else{
         for (let index = 0; index < list.length; index++) {
          list[index].check = false;
        }
      }
      this.$store.state.ischeck=!this.$store.state.ischeck;
    },
    
    allcheckstatus(){
      console.log("aa");
      const list =this.$store.state.list;
      this.ischeck=true;
      for (let index = 0; index <list.length; index++) {
        if (!list[index].check) {
          this.ischeck=false;
          break;
        }
      }
    }
  },
}
</script>
<style scoped>
.sumvue{
  display:flex;
}
.input{
  width: 80px;
}

.sumprice{
  flex: 1;  
}
.right{
    height: 50px;
    width: 100px;
    background-color: #ff5000;
    text-align: center;
}
</style>