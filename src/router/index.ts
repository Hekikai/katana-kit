import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/StartPage.vue'),
            name: 'Start',
        },
    ],
})

export default router
