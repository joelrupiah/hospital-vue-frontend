import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../components/pages/Dashboard.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../components/pages/User/Profile.vue')
    },
    {
      path: '/doctors-list',
      name: 'doctorlist',
      component: () => import('../components/pages/Doctor/DoctorList.vue')
    },
    {
      path: '/create-doctor',
      name: 'createdoctor',
      component: () => import('../components/pages/Doctor/CreateDoctor.vue')
    },
  ]
})

export default router
