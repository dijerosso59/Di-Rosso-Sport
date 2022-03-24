import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/muscle',
      name: 'Muscle',
      component: () => import('../views/Muscle.vue')
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import('../views/Form.vue')
    },
    {
      path: '/work',
      name: 'Work',
      component: () => import('../views/Work.vue')
    },
    {
      path: '/repos',
      name: 'Repos',
      component: () => import('../views/Repos.vue')
    }
  ]
})

export default router
