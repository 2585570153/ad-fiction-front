import { createApp } from 'vue'
import App from './App.vue'
import { createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from "./router";
import SvgIcon from './components/SvgIcon/SvgIcon.vue'
import Storage from "responsive-storage";
//图片懒加载
import VueLazyload from 'vue-lazyload';

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
app.use(Storage, {
    // 命名空间，可不传，默认`rs-`（如果没有特殊需求建议不传）
    nameSpace: "fiction_",
    memory: {
        //设置默认值
        cssReadFontSize: Storage.get("fiction_cssReadFontSize") ?? 26,
        cssReadFontSpace: Storage.get("fiction_cssReadFontSpace") ?? 3,
        cssReadBackgroundColor: Storage.get("fiction_cssReadBackgroundColor") ?? '{"color0":"#DED9C6","color1":"#EFEBE2"}',
        cssReadBackgroundColorIndex: Storage.get("fiction_cssReadBackgroundColorIndex") ?? 0


    }
  });

  app.use(VueLazyload, {
    // 配置选项（可选）
    loading: '/assets/loading.gif', // 加载中的占位图
    // error: '/path/to/error-image.png' // 错误时的占位图
  });
app.mount('#app')

// createApp(App).use(pinia).mount('#app')

