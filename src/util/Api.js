import axios from 'axios';
function request(config) {
    //  1.创建axios的实例
    const instance1 = axios.create({
        baseURL: 'http://123.207.32.32:8000/',
        timeout: 5000,
        headers: {}
      });

    //  2.响应拦截
    instance1.interceptors.response.use((config)=>{
        return config.data;
    });
    //  3.发送网络请求
    return instance1(config);
}




//  首页
export const getHome=(params={})=>{
    return request({
        url: "home/multidata",
        method: "get",
        params: params
    });
}

//  示例2
export const getUsers=(data={})=>{
    return request({
        url: "users",
        method: "post",
        data: data
    });
}
