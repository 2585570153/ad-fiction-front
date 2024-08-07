
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import detail from '@/views/detail/index.vue';
import read from '@/views/Read/index.vue';
import Category from '@/views/Category/index.vue';
import Info from '@/views/Info/index.vue';
import RankingList from '@/views/RankingList/index.vue';
import mobile from '@/mobile/index.vue';
import search from '@/views/Search/index.vue';
import bookrank from '@/views/BookRack/index.vue';
import test from '@/views/test.vue';
import Comment from '@/views/Comment/index.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // path和component对应关系的位置
    routes: [
        {
            path: '/',
            component: Layout,
        },
        {
            path: '/detail/:id',
            component:detail

        },
        {
            path: '/read/:tableName/:fictionId/:id',
            component:read
        },
        {
            path: '/category/:bigclass/:id/:classify?',
            component:Category
        },
        {
            path: '/rankinglist/:bigclass/:id/:rankinglist',
            component:RankingList
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/bookrank',
            component: bookrank
        },
        {
            path: '/search/:name/:id',
            component: search
        },
        {
            path: '/mobile',
            component: mobile
        },
        {
            path: '/info',
            component:Info
        },
        {
            path: '/comment/:id',
            component:Comment
        },
        {
            path: '/test',
            component:test
        }
    ]
})

router.beforeEach((to, from, next) => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = userAgent.includes('mobile');
    // 设置设备类型到路由的元信息中
    to.meta.isMobile = isMobile;
  
    next();
  });
export default router
