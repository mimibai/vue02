import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/AppLogin.vue')
  },
  {
    path: '/eide',
    name: 'eide',
    component: () => import('../views/Eide.vue'),
    meta: {
      title: '修改密码',
      needLogin: true
    },
  },
  {
    path: '/pri',
    name: 'pri',
    component: () => import('../views/pri.vue')
  },
  {
    path: '/child',
    name: 'child',
    component: () => import('../views/child.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
