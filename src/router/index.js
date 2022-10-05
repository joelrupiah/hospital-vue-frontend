import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin-login',
      name: 'AdminLogin',
      component: () => import('../components/pages/Auth/AdminLogin.vue')
    },
    {
      path: '/doctor-login',
      name: 'DoctorLogin',
      component: () => import('../components/pages/Auth/DoctorLogin.vue')
    },
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../components/pages/Dashboard.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../components/pages/User/Profile.vue')
    },
    {
      path: '/doctors-list',
      name: 'DoctorList',
      component: () => import('../components/pages/Doctor/DoctorList.vue')
    },
    {
      path: '/create-doctor',
      name: 'CreateDoctor',
      component: () => import('../components/pages/Doctor/CreateDoctor.vue')
    },
    {
      path: '/update-doctor',
      name: 'EditDoctor',
      component: () => import('../components/pages/Doctor/EditDoctor.vue')
    },
  ]
})

export default router
