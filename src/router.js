import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Resthome from '../views/Resthome.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { 
            path: '/',
            name: "home",
            component: Home
        },
        {
            path: '/admin',
            name: "admin",
            component: Admin
        },
        {
            path: '/resthome',
            name: "resthome",
            component: Resthome
        },
    ]
})