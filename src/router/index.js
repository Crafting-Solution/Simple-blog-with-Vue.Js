import Defaultlayout from '@/layout/defaultlayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Defaultlayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/Home.vue'),
          props: true,
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/Contact.vue'),
          props: true
        },
        {
          path: 'job/details/:id',
          name: 'jobdetails',
          component: () => import('../views/JobDetails.vue'),
          props: true
        },
        {
          path: '/apply/now/:id',
          name: 'apply',
          component: ()=> import('../views/Apply.vue'),
          props: true
        }
      ]
    },
    // 404 ERROR PAGE
    {
      path: '/:catchAll(.*)',
      name: '404 Not Found',
      component: () => import('../views/error/404.vue')
    }
  ]
})

export default router
