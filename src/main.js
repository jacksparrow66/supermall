import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import toast from '@/components/common/toast'
// import fastclick from 'fastclick' // 导入fastclick
import vuelazyload from 'vue-lazyload'

Vue.use(toast)

Vue.config.productionTip = false
// 注册$bus
Vue.prototype.$bus=new Vue();


// 使用fastclick减少移动端300ms 点击延迟
// fastclick.attach(document.body)

// 使用Vue.use安装vue-lazyload，注意使用vue-lazyload还要去修改:src="",为v-lazy=""
Vue.use(vuelazyload,{
  loading:require("@/assets/img/vue-lazyload/loading.png"),    //预加载时候展示的图片
  error:require("@/assets/img/vue-lazyload/error.png")         //加载失败展示的图片
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  toast,
  render: h => h(App)
})
// // 这个是自动刷新的方法，让进入该网页后自动刷新一次
// function fresh(){  
//         if(location.href.indexOf("?reload=true")<0){
//             location.href+="?reload=true";  
//             console.log("a");
//             clearTimeout(timer)
//         }  
//     }  
//     const timer=setTimeout(fresh,50);