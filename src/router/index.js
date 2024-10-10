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
          meta: { title: 'Home' },
          props: true,
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/Contact.vue'),
          meta: { title: 'Contact' },
          props: true
        },
        {
          path: 'job/details/:id',
          name: 'jobdetails',
          component: () => import('../views/JobDetails.vue'),
          meta: { title: 'Job Details' },
          props: true
        },
        {
          path: '/apply/now/:id',
          name: 'apply',
          component: ()=> import('../views/Apply.vue'),
          meta: { title: 'Apply Now' },
          props: true
        }
      ]
    },
    // 404 ERROR PAGE
    {
      path: '/:catchAll(.*)',
      name: '404 Not Found',
      component: () => import('../views/error/404.vue'),
      meta: { title: '404 - Page Not Found' },
    }
  ]
})


router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'Default Title';
  }
  next();
})


export default router
