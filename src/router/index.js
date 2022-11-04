import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'
import { GET_ADMIN_TOKEN_GETTER } from '../store/storeConstants'

const routes = [
  {
    path: '/admin-login',
    name: 'AdminLogin',
    component: () => import('../components/pages/Auth/AdminLogin.vue'),
    meta: { requiresAdminVisitor: true }
  },
  {
    path: '/doctor-login',
    name: 'DoctorLogin',
    component: () => import('../components/pages/Auth/DoctorLogin.vue')
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../components/pages/Dashboard.vue'),
    meta: { requiresAdminAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../components/pages/User/Profile.vue')
  },
  {
    path: '/permissions-list',
    name: 'PermissionList',
    component: () => import('../components/pages/spatie/permission/PermissionList.vue')
  },
  {
    path: '/create-permissions',
    name: 'CreatePermission',
    component: () => import('../components/pages/spatie/permission/CreatePermission.vue')
  },
  {
    path: '/edit-permissions/:id',
    name: 'EditPermission',
    component: () => import('../components/pages/spatie/permission/EditPermission.vue')
  },
  {
    path: '/roles-list',
    name: 'RoleList',
    component: () => import('../components/pages/spatie/roles/RoleList.vue')
  },
  {
    path: '/create-roles',
    name: 'CreateRole',
    component: () => import('../components/pages/spatie/roles/CreateRole.vue')
  },
  {
    path: '/edit-roles/:id',
    name: 'EditRole',
    component: () => import('../components/pages/spatie/roles/EditRole.vue')
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
    path: '/update-doctor/:id',
    name: 'EditDoctor',
    component: () => import('../components/pages/Doctor/EditDoctor.vue')
  },
]

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes
})

router.beforeEach(() => {
  // console.log(store.state.admin) // access store data
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAdminAuth)) {
    if (GET_ADMIN_TOKEN_GETTER) {
      next({
        path: '/admin-login'
      })
    }
    else{
      next()
    }
  }
  else if (to.matched.some(record => record.meta.requiresAdminVisitor)){
    if (GET_ADMIN_TOKEN_GETTER) {
      next({
        path: '/'
      })
    }
    else{
      next()
    }
  }
  else{
    next()
  }
})

export default router
