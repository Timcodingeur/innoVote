import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Accueil.vue'),
        meta: { showMenu: true },
    },
    {
        path: '/login',
        name: 'logs',
        component: () => import("../components/Login.vue"),
        meta: { showMenu: true },
    },
    {
    path: '/creationslide',
    name: 'Creatlide',
    component: () => import("../components/CreationSlide.vue"),
    meta: { showMenu: true },
    },
    {
    path: '/WatchingSlide',
    name: 'VoteMW',
    component: () => import("../components/VoteMomentWait.vue"),
    meta: { showMenu: false },
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), 
    routes
});
export default router