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
          <li class="nav-item nav-category">Manage Users</li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i class="menu-icon mdi mdi-floor-plan"></i>
              <span class="menu-title">Doctors</span>
              <i class="menu-arrow"></i> 
            </a>
            <div class="collapse" id="ui-basic">
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
export default {
    name: 'AdminSidebar',
    data(){
        return{}
    }
}
</script>