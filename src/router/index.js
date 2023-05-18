
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import detail from '@/views/detail/index.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // path和component对应关系的位置
    routes: [
        {
            path: '/',
            component: Layout,
        },
        {
            path: '/detail',
            component:detail
        },
        {
            path: '/login',
            component: Login
        }
    ]
})

export default router
