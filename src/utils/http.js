import axios from 'axios'

// 创建axios实例
const httpInstance = axios.create({
    baseURL: 'http://82.156.142.61',
    timeout: 5000
})

// baseURL: 'http://82.156.142.61',
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
httpInstance.interceptors.response.use(res =>{

    const responseData = res.data; // 从响应中获取数据

    // 根据需要处理 responseData 数据

    if(responseData.code === 500){

        const userValueBeforeRemove = localStorage.getItem('user');

        // 移除 'user'
        localStorage.removeItem('user');

        // 获取 'user' 的值，如果为 null 则表示移除成功
        const userValueAfterRemove = localStorage.getItem('user');

        if (userValueBeforeRemove) {
            console.log('成功移除了 "user" 项');
            location.reload();
        } else {
            console.log('移除 "user" 项失败或无效');
        }


    }

    return responseData; // 将数据返回给调用方
}
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
