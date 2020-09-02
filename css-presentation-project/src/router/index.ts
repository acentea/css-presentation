import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'
import CssGrid from '../views/CssGrid.vue'
import FlexBox from '../views/FlexBox.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/flexbox',
        name: 'FlexBox',
        component: FlexBox
    },

    {
        path: '/cssgrid',
        name: 'CssGrid',
        component: CssGrid
    }
]

const router = new VueRouter({
    routes
})

export default router
