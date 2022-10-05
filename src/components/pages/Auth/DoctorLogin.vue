<template>
    <div class="content-wrapper">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
            <div class="content-wrapper d-flex align-items-center auth px-0">
                <div class="row w-100 mx-0">
                    <div class="col-lg-4 mx-auto">
                        <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                            <div class="brand-logo">
                                <img src="/images/logo.svg" alt="logo">
                            </div>
                            <h4>Hospital Doctor Login</h4>
                            <form class="pt-3">
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-lg" v-model="form.email"
                                        placeholder="Email Address">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control form-control-lg" v-model="form.password"
                                        placeholder="Password">
                                </div>
                                <div class="mt-3">
                                    <vs-button color="dark" type="filled" size="small">
                                        Doctor Login
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
export default {
    name: 'AdminLogin',
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        openLoadingInDiv() {
            this.$vs.loading({
                container: '#div-with-loading',
                scale: 0.6
            })
        }
    }
}
</script>