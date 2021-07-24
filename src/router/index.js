import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import ('@/views/home/home.vue')
const me = () => import ('@/views/me/me.vue')
const category = () => import ('@/views/category/category.vue')
const buycar = () => import ('@/views/buycar/buycar.vue')
const Details = () => import ('@/views/Details/details.vue')

// 1.安装插件
Vue.use(VueRouter);

// 2.创建路由对象
const routes=[
    {
        path: '',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/category',
        component: category,

    },
    {
        path: '/buycar',
        component: buycar,
    },
    {
        path: '/me',
        component: me,
    },
    {
        path: '/details/:iid',
        component: Details,
    }
];
const router=new VueRouter({
    routes,
    mode:'history'
})

// 3.导出router
export default router;