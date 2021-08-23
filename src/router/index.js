import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mono from '../views/Monochrome.vue'
import Tech from '../views/TechSolution.vue'
import Myn from '../views/Myn.vue'
import Niq from '../views/NiqInter.vue'
import Studie from '../views/Studie.vue'
import Find from '../views/FindJob.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
  {
    path: '/myn',
    name: 'myn',
    component: Myn
  },
  {
    path: '/niq',
    name: 'niq',
    component: Niq
  },
  {
    path: '/studie',
    name: 'studie',
    component: Studie
  },
  {
    path: '/findjob',
    name: 'find',
    component: Find
  },
]

const router = new VueRouter({
  routes
})

export default router
