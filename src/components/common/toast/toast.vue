<template>
  <div class='toast' v-show="isshow">
      <div>{{message}}</div>

  </div>
</template>
<script>
export default {
  name: 'toast',
  data(){
      return{
          message:'',
          isshow:false,
      }
  },
//   props: {
//       message:{
//           type:String,
//           default:''
//       },
//       isshow:{
//           type:Boolean,
//       }
//   },
    methods:{
        show(message,duration){
            this.message = message;
            this.isshow = true;
            setTimeout(() => {
                this.isshow = false;
                this,message =''
            },duration);
        }
    }
}
</script>
<style scoped>
.toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
    padding:10px;
    background-color: rgba(0,0,0,0.5);
    z-index: 999999;
    color: white;
    border-radius: 5px;
}
</style>