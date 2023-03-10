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
    {
        path: '/checkbox',
        component: () => import('@/views/KCheckbox.vue'),
        name: 'Checkbox',
    },
    {
        path: '/radio',
        component: () => import('@/views/KRadio.vue'),
        name: 'Radio',
    },
    {
        path: '/progress',
        component: () => import('@/views/KProgress.vue'),
        name: 'Progress',
    },
    {
        path: '/input',
        component: () => import('@/views/KInput.vue'),
        name: 'Input',
    },
    {
        path: '/tabs',
        component: () => import('@/views/KTabs.vue'),
        name: 'Tabs',
    },
    {
        path: '/table',
        component: () => import('@/views/KTable.vue'),
        name: 'Table',
    },
]
