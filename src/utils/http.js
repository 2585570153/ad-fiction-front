import axios from 'axios'
import Storage from "responsive-storage";

// 创建axios实例
const httpInstance = axios.create({
    baseURL: 'http://82.156.142.61',
    timeout: 5000
})

// baseURL: 'http://82.156.142.61',
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    // json字符串转化为json对象
    var userObj = Storage.get("fiction_userInfo");

    if(userObj){
        config.headers.token = userObj.token
        //如果是拼接的话 必须是'bearer ${token}'
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res =>{

    const responseData = res.data; // 从响应中获取数据

    // 根据需要处理 responseData 数据

    if(responseData.code === 8888){
        // 移除 'user'
        localStorage.removeItem('fiction_userInfo');
    }

    return responseData; // 将数据返回给调用方
}
, e => Promise.reject(e)
)

export default httpInstance
