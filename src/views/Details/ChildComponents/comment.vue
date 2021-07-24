<template>
  <div id='comment' v-if="Object.keys(commentInfo).length !==0">
    <div class="comments">
        <div class="left">用户评价</div>
        <div class="right">更多</div>
    </div>
    <div>
        <div class="user" v-for="(item,index) in commentInfo.list" :key="index">
            <div class="Info">
                <div class="avatar">
                    <img :src="item.user.avatar" alt="">
                </div>
                <div class="username">{{item.user.uname}}</div>
            </div>
            <div class="content">
                {{item.content}}
                <div class="img-list" v-for="(item,index) in item.images" :key="index">
                    <img :src="item" alt="">
                </div>
            </div>
            <div class="style">
               {{showDate(item.created)}} {{item.style}}
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import {formatDate} from "@/components/common/time.js"
export default {
  name: 'comment',
  props: {
      commentInfo:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  methods: {
        showDate:function(value) {
            // 1.将时间戳转为Date对象
            const date = new Date(value * 1000);
            // 2.将date进行格式化
            return formatDate(date, "yyyy-MM-dd hh:mm:ss");
        }
  }
}
</script>
<style scoped>

/* 这个是整个组件的内边距设置 */
#comment{
    padding:0px 20px;
}

/* 这个是用户评价和更多的样式、 */
.comments{
    display:flex;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    font-size: 14px;
    padding: 15px 0px;
}
.left{
    width: 100px;
}
.right{
    flex: 1;
    text-align: right;
}

/* 这个是用户头像已经用户名称的设置 */
.Info{
    display: flex;
    height: 50px;
    line-height: 50px;
    padding-top: 10px;
}
.avatar img{
    height:50px;
    border-radius: 50%;
}
.username{
    margin-left: 10px;
    font-size: 14px;
}

/* 这个是评价已经所购买的款式的样式 */
.content{
    font-size: 13px;
    margin-top: 5px;
}
.style{
    font-size: 12px;
    color: #808080;
    margin-top:10px;
    clear: both;
}
/* 这个是评论的图片的样式 */
.img-list img{
    width: 80px;
    border-radius: 5px;
    float: left;
    margin: 5px 5px 5px 0px;
}
</style>