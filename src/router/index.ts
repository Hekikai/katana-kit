import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/StartPage.vue'),
            name: 'Start',
        },
        {
            path: '/typography',
            component: () => import('@/views/Typography.vue'),
            name: 'Typography',
        },
        {
            path: '/button',
            component: () => import('@/views/KBtn.vue'),
            name: 'Button',
        },
    ],
})

export default router
