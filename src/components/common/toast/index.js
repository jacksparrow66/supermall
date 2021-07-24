import toast from './toast.vue'

const obj ={};

obj.install=function (Vue) {
    // 1.创建构造器
    const toastConstruct=Vue.extend(toast);

    // 2.创建组件对象
    const Toast=new toastConstruct();

    // 3.手动挂载在某一个元素上
    Toast.$mount(document.createElement('div'));

    // 4.添加进去
    document.body.appendChild(Toast.$el);

    Vue.prototype.$toast =Toast;
}



export default obj;