export const routes = [
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
    // {
    //     path: '/checkbox',
    //     component: () => import('@/views/KCheckbox.vue'),
    //     name: 'Checkbox',
    // },
]
