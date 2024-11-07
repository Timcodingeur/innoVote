import { createRouter, createWebHashHistory } from 'vue-router'

import Login from "../components/Login.vue"
import Home from '../App.vue'

const route = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'logs',
        component: Login
    }
]

const router = createRouter({
    history: createWebHashHistory(), route
});
export default router