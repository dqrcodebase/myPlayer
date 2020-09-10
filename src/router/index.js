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
        path: '/layoutAsiden',
        component: () => import('@/layout/components/layoutAsiden.vue'),
        children: [
          {
            path: '/category',
            component: () => import('@/views/category/index.vue')
          },
          {
            path: '/liveList',
            component: () => import('@/views/liveList/index.vue'),
          },
        ]
      },
      {
        path: '/list',
        component: () => import('@/views/list/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router
