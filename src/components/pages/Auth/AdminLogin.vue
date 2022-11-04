<template>
    <div class="content-wrapper">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
            <div class="content-wrapper d-flex align-items-center auth px-0">
                <div class="row w-100 mx-0">
                    <div class="col-lg-4 mx-auto">
                        <div class="auth-form-light text-left py-5 px-4 px-sm-5" id="div-with-loading">
                            <div class="brand-logo">
                                <img src="/images/logo.svg" alt="logo">
                            </div>
                            <!-- <h4>Hospital Admin Login {{nameInAuthModule}}</h4> -->
                            <h4>Hospital Admin Login</h4>
                            <form class="pt-3">
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-lg" id="exampleInputEmail1"
                                        v-model.trim="form.email" placeholder="Username">
                                    <span class="errors" v-if="errors.email">{{ errors.email }}</span>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control form-control-lg"
                                        v-model.trim="form.password" id="exampleInputPassword1" placeholder="Password">
                                    <span class="errors" v-if="errors.password">{{ errors.password }}</span>
                                </div>
                                <div class="mt-3">
                                    <vs-button color="dark" type="filled" size="small" @click.prevent="login">
                                        Admin Login
                                    </vs-button>
                                    <vs-button class="ms-2" color="warning" type="filled" size="small">
                                        Clear From
                                    </vs-button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- content-wrapper ends -->
        </div>
    </div>

</template>

<script>
import Axios from 'axios'
import { mapActions } from 'vuex'
import LoginValidations from '../../../services/LoginValidations'
import { LOGIN_ACTION } from '../../../store/storeConstants'
export default {
    name: 'AdminLogin',
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            errors: []
        }
    },
    methods: {
        ...mapActions('auth', {
            loginAdmin: LOGIN_ACTION
        }),
        async login() {
            // validate
            // let validations = new LoginValidations(this.email, this.password)

            // this.errors = validations.checkValidations()

            // if ('email' in this.errors || 'password' in this.errors) {
            //     return false
            // }
            // login admin
            try {
                await this.loginAdmin({ email: this.form.email, password: this.form.password })
            } catch (error) {
                console.log(error)
            }
            this.$router.push('/')
            
        }
    },

}
</script>