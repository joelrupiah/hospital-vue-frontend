<template>
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Create Role</h4>
                        <form class="form-sample">

                            <div class="row">
                                <div class="col-md-8">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Role Name <span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-9">
                                            <vs-input color="dark" label-placeholder="create users" size="small"
                                                style="width:100%" v-model="form.name" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-form-label">Assign Permission/s to Role <span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-12">
                                            <el-checkbox 
                                                v-for="permission in permissions" 
                                                v-model="form.permissions"
                                                :label="permission.name" 
                                                :key="permission.name" 
                                                :value="permission.name"
                                                size="small" 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <vs-button color="dark" type="filled" size="small" @click.prevent="createRole">
                                        Create Role
                                    </vs-button>
                                    <vs-button class="ms-2" color="warning" type="filled" size="small">
                                        Cancel
                                    </vs-button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    name: 'CreateRole',
    data() {
        return {
            permissions: [],
            form: {
                name: '',
                permissions: []
            }
        }
    },
    methods: {
        getPermissions() {
            Axios.get('http://127.0.0.1:8000/api/admin/get-permissions')
                .then((response) => {
                    this.permissions = response.data.permissions
                })
        },
        createRole() {
            Axios.post('http://127.0.0.1:8000/api/admin/create-role', this.form)
                .then((response) => {
                    console.log(response)
                })
        }
    },
    mounted() {
        this.getPermissions()
    }
}
</script>