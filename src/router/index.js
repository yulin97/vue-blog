import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Articles from '../views/Articles'
import index from '../components/index'
const router = new VueRouter({
    mode: 'history',
    // base: '/',
    routes: [{
            path: "/",
            redirect: "/index",
        },
        {
            name: 'Articles',
            path: '/articles/:articleId',
            component: Articles
        }, {
            name: 'index',
            path: '/index',
            component: index,
            title: 'YULIN|BLOG'
        }
    ]

})

export default router