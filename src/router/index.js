import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/liveList',
        component: () => import('@/views/liveList/index.vue')
      },
      {
        path: '/index',
        component: () => import('@/views/text/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router
