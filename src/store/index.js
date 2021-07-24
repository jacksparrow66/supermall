import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex);


// 2.创建Store对象
const store = new Vuex.Store({
    state: {
        list:[],
        allcheck: false,
    },
    mutations:{
        addcount(state,payload){
            state.list[payload].count+=1;
        }, 
        decreasecount(state,payload){
            if (state.list[payload].count > 1) {
                state.list[payload].count-=1;
            }else if(state.list[payload].count==1) {
                state.list.splice(payload,1);
            }
        }
    },
    actions:{
        // context就相当于是store对象，然而payload就是参数
        addcart(context,payload){
            return new Promise((resolve,reject) => {
                let oldproduct =null;
                for (let index = 0; index < context.state.list.length; index++) {
                    if(payload.iid === context.state.list[index].iid){
                        oldproduct = context.state.list[index];   
                    }
                }
                if (oldproduct) {
                    oldproduct.count+=1;
                    resolve("商品数量 +1")
                }else{
                    context.state.list.push(payload);
                    resolve("添加购物车成功")
                }
            })
        }
    }
})
export default store;