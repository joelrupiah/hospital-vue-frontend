<template>
    <div class="container-scroller">
    
    <!-- ADMIN HEADER -->
    <admin-header v-if="!['AdminLogin', 'DoctorLogin'].includes($route.name)"></admin-header>

    <div class="container-fluid page-body-wrapper">
      
      <!-- SIDEBAR -->

      <admin-sidebar v-if="!['AdminLogin', 'DoctorLogin'].includes($route.name)"></admin-sidebar>

      <div class="main-panel">

        <router-view></router-view>
        
        <!-- ADMINFOOTER -->
        <admin-footer v-if="!['AdminLogin', 'DoctorLogin'].includes($route.name)"></admin-footer>

      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>

<script>
    import AdminHeader from './inc/AdminHeader.vue';
    import AdminSidebar from './inc/AdminSidebar.vue';
    import AdminFooter from './inc/AdminFooter.vue';
    export default{
        name: 'AdminMaster',
        components: {
            AdminHeader,
            AdminSidebar,
            AdminFooter
        },
        data(){
            return{}
        },
    }
</script>