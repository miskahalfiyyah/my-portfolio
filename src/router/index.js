import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mono from '../views/Monochrome.vue'
import Tech from '../views/TechSolution.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/mono',
    name: 'mono',
    component: Mono
  },
  {
    path: '/tech',
    name: 'tech',
    component: Tech
  },
]

const router = new VueRouter({
  routes
})

export default router
