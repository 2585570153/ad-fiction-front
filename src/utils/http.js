import axios from 'axios'

import router from "@/router";
import {ElMessage} from "element-plus";
// 创建axios实例
const httpInstance = axios.create({
    baseURL: 'http://58.87.105.89',
    timeout: 5000
})

// baseURL: 'http://8.130.46.218',
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    //提取本地的字符串
    const userstring = localStorage.getItem('user');
    // json字符串转化为json对象
    var userObj = JSON.parse(userstring);

    if(userstring){
        config.headers.token = userObj.token
        //如果是拼接的话 必须是'bearer ${token}'
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res =>res.data
, e => Promise.reject(e)
)

// {
//
//     const responseData = res.data; // 从响应中获取数据
//
//     // 根据需要处理 responseData 数据
//
//     if(responseData.code === 500){
//         ElMessage({
//             type: 'warning',
//             message: "请登录页面"
//         })
//         localStorage.removeItem('user');
//         router.push('/')
//     }
//     return responseData; // 将数据返回给调用方
// }
export default httpInstance
