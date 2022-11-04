<template>
  <!-- partial:partials/_sidebar.html -->
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item">
        <RouterLink class="nav-link" to="/">
          <i class="mdi mdi-grid-large menu-icon"></i>
          <span class="menu-title">Dashboard</span>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/admin-login">
          <i class="mdi mdi-grid-large menu-icon"></i>
          <span class="menu-title">Admin Login</span>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/doctor-login">
          <i class="mdi mdi-grid-large menu-icon"></i>
          <span class="menu-title">Doctor Login</span>
        </RouterLink>
      </li>
      <li class="nav-item nav-category">Roles and Permissions</li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#permissions" aria-expanded="false"
          aria-controls="permissions">
          <i class="menu-icon mdi mdi-floor-plan"></i>
          <span class="menu-title">Permissions</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="permissions">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <RouterLink class="nav-link" to="permissions-list">Permissions List</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="create-permissions">Create Permission</RouterLink>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#roles" aria-expanded="false" aria-controls="roles">
          <i class="menu-icon mdi mdi-floor-plan"></i>
          <span class="menu-title">Roles</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="roles">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <RouterLink class="nav-link" to="roles-list">Roles List</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="create-roles">Create Roles</RouterLink>
            </li>
          </ul>
        </div>
      </li>
      <!-- <li class="nav-item nav-category" v-if="isAuthenticated">Manage Users</li>
          <li class="nav-item" v-if="isAuthenticated"> -->
      <li class="nav-item nav-category" v-if="isAuthenticated">Manage Users</li>
      <li class="nav-item" v-if="isAuthenticated">
        <a class="nav-link" data-bs-toggle="collapse" href="#doctors" aria-expanded="false" aria-controls="doctors">
          <i class="menu-icon mdi mdi-floor-plan"></i>
          <span class="menu-title">Doctors</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="doctors">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <RouterLink class="nav-link" to="doctors-list">Doctors List</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="create-doctor">Create Doctor</RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
  <!-- partial -->
</template>

<script>
import { mapGetters } from 'vuex'
import { IS_ADMIN_AUTHENTICATED_GETTER } from '../../store/storeConstants';
export default {
  name: 'AdminSidebar',
  data() {
    return {}
  },
  computed: {
    ...mapGetters('auth', {
      isAuthenticated: IS_ADMIN_AUTHENTICATED_GETTER
    })
  }
}
</script>