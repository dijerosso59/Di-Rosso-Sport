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
      path: '/select',
      name: 'Select',
      component: () => import('../views/Select.vue')
    },
    {
      path: '/run',
      name: 'Run',
      component: () => import('../views/Run.vue')
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
      path: '/exercices',
      name: 'Exercices',
      component: () => import('../views/Exercices.vue')
    },
    {
      path: '/work',
      name: 'Work',
      component: () => import('../views/Work.vue')
    }
  ]
})

export default router
