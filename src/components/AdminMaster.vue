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
import LoaderComp from './LoaderComp.vue';
import { mapGetters } from 'vuex';
import { GET_ADMIN_TOKEN_GETTER } from '../store/storeConstants';
export default {
  name: 'AdminMaster',
  components: {
    AdminHeader,
    AdminSidebar,
    AdminFooter,
    LoaderComp
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('auth', {
      token: GET_ADMIN_TOKEN_GETTER
    })
  }
}
</script>