import axios from "axios";

export function request(config){
    // 1.创建axios实例
    const instance =new axios.create({
        // baseURL:'http://152.136.185.210:7878/api/m5',
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000,
    })

    // 2.aios的拦截器
    // 2.1去那个i去拦截的作用、
    instance.interceptors.request.use(config => {
        return config
    },error =>{

    })

    // 2.2响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    },error => {
        console.log(error);
    })

    // 3.发送网络请求
    return instance(config)
}