import { createApp } from 'vue'
import App from './App.vue'
import { createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from "./router";
import SvgIcon from './components/SvgIcon/SvgIcon.vue'
import './assets/iconfont/iconfont.js';
//引入初始化文件样式
import '@/styles/common.scss'

// import {getBanner} from "@/apis/bannerAPI";
// 测试接口
// getBanner().then(res => {
//     console.log(res);
// })
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(router)
app.use(pinia)
app.component('SvgIcon', SvgIcon);
app.mount('#app')

// createApp(App).use(pinia).mount('#app')

