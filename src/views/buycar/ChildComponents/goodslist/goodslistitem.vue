<template>
  <div class='goodslistitem'>
     <div class="product" >
        <div class="input">
          <input type="checkbox" name="" :id="index" v-model="item.check">
        </div>
        <label :for="index">
            <div class="info">
              <div class="img"><img :src="item.image" alt=""></div>
              <div class="maininfo">
                  <p>{{item.title}}</p>
                  <p class="desc">{{item.desc}}</p>
                  <p class="price">￥{{item.price}}</p>
                  <span>
                    <button @click="addcount(index)"><b>+</b></button>
                      x{{item.count}}
                    <button @click="decreasecount(index)"><b>-</b></button>
                  </span>
              </div>
          </div>
        </label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'goodslistitem',
  data(){
    return{
      ischeck:true,
    }
  },
  props: {
    item: {
      type: Object,
      default(){
        return{}
      }
    },
    index: {
      type: Number,
      default:0
    }
  },
  methods:{
    addcount(index){
      this.$store.commit("addcount",index);
    },
    decreasecount(index){
      this.$store.commit("decreasecount",index);
    },
    checkclick(index){
      this.$store.commit("checkclick",index);
    },
  }
}
</script>
<style scoped>
.product{
  border-bottom: solid 2px #e8e8e7;
  padding: 5px;
}
.input{
  width: 20px;
  text-align: center;
  float: left;
}
input{
    margin:70px 0px;
}
.info{
  flex: 1;
  display: flex;
}
.info .img{
  width: 100px;
}
.info img{
  width: 100px;
  height: 150px;
  border-radius: 10px;
}
.info>div.maininfo{
    flex: 1;
}
.maininfo{
  margin-left: 10px;
  margin-top: -10px;
}
.maininfo p{
    font-size: 15px;
    width: 210px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 15px;
}
.price{
  color: red;
}
span{
  float:right;
  margin-right: 10px;
}
p.desc{
  font-size: 12px;
}
</style>