import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'personal',
      component: () => import('../views/PersonalView.vue')
    },
    {
      path: '/skill',
      name: 'skill',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/KeahlianView.vue')
    },
    {
      path: '/sosmed',
      name: 'sosmed',
      component: () => import('../views/HomeView.vue')
    },
  ]
})

export default router
