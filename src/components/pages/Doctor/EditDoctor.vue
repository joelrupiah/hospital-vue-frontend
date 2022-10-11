<template>
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Create a Doctor</h4>
                        <form class="form-sample">
                            <p class="card-description">
                                Personal info
                            </p>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">First Name <span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-9">
                                            <vs-input color="dark" label-placeholder="Joel" size="small"
                                                style="width:100%" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Last Name <span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-9">
                                            <vs-input color="dark" label-placeholder="Rupiah" size="small"
                                                style="width:100%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Middle Name</label>
                                        <div class="col-sm-9">
                                            <vs-input color="dark" label-placeholder="Jeremiah" size="small"
                                                style="width:100%" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Date of Birth <span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-9">
                                            <el-date-picker color="dark" type="date" placeholder="Pick a day"
                                                size="default" style="width:100%;margin-top: 15px;" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Education <span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-9">
                                            <!-- <el-select v-model="value" class="m-2" placeholder="Select" size="small">
                                                <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"
                                                />
                                            </el-select> -->
                                            <el-select v-model="form.education" class="m-2"
                                                placeholder="Highest level of education" size="default"
                                                style="width:100%">
                                                <el-option label="certificate" value="certificate" />
                                            </el-select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Category <span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-9">
                                            <!-- <el-select v-model="value" class="m-2" placeholder="Select" size="small">
                                                <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"
                                                />
                                            </el-select> -->
                                            <el-select v-model="form.specialization" class="m-2"
                                                placeholder="Choose specialization" size="default" style="width:100%">
                                                <el-option label="Oncologist" value="oncologist" />
                                            </el-select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Job <span class="text-danger">*</span>
                                        </label>
                                        <div class="col-sm-9">
                                            <!-- <el-select v-model="value" class="m-2" placeholder="Select" size="small">
                                                <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"
                                                />
                                            </el-select> -->
                                            <el-select v-model="form.job_desc" class="m-2"
                                                placeholder="Choose job description" size="default" style="width:100%">
                                                <el-option label="part-time" value="part-time" />
                                            </el-select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Email <span class="text-danger">*</span>
                                        </label>
                                        <div class="col-sm-9">
                                            <vs-input color="dark" label-placeholder="rupiahjeremiah@gmail.com"
                                                size="small" style="width:100%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">ID Number <span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-9">
                                            <vs-input color="dark" label-placeholder="33498198" size="small"
                                                style="width:100%" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Mobile No. <span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-9">
                                            <vs-input color="dark" label-placeholder="+254715733257" size="small"
                                                style="width:100%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Country <span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-9">
                                            <el-select v-model="form.country" class="m-2"
                                                placeholder="Choose country of origin" size="default"
                                                style="width:100%">
                                                <el-option label="Kenya" value="kenya" />
                                            </el-select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Nationality <span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-9">
                                            <el-select v-model="form.nationality" class="m-2"
                                                placeholder="Choose nationality" size="default" style="width:100%">
                                                <el-option label="Kenyan" value="kenyan" />
                                            </el-select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Region/State/County<span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-9">
                                            <vs-input color="dark" label-placeholder="Kiambu/Nairobi/Kakamega"
                                                size="small" style="width:100%" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">City/Town<span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-9">
                                            <vs-input color="dark" label-placeholder="Juja/Nairobi/Kakamega"
                                                size="small" style="width:100%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Passport No.</label>
                                        <div class="col-sm-9">
                                            <vs-input color="dark" label-placeholder="2342kj334rj4h" size="small"
                                                style="width:100%" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Visa No.</label>
                                        <div class="col-sm-9">
                                            <vs-input color="dark" label-placeholder="2342kj334rj4h" size="small"
                                                style="width:100%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Username<span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-9">
                                            <vs-input v-model="form.name" type="text" color="dark"
                                                label-placeholder="joerup" size="small" style="width:100%" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Password<span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-9">
                                            <vs-input v-model="form.password" type="password" color="dark" label-placeholder="12345678"
                                                size="small" style="width:100%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Email<span class="text-danger">*</span>
                                        </label>
                                        <div class="col-sm-9">
                                            <vs-input v-model="form.email" type="email" color="dark"
                                                label-placeholder="joerup@gmail.com" size="small" style="width:100%" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Assign Role<span
                                                class="text-danger">*</span>
                                        </label>
                                        <div class="col-sm-9">
                                            <el-select v-model="form.role" class="m-2" placeholder="Select a role"
                                                size="default" style="width:100%">
                                                <el-option v-for="role in roles" :key="role.value" :label="role.name"
                                                    :value="role.id" />
                                            </el-select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group row">
                                        <label class="col-sm-12 col-form-label">Assign Permissions<span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-12">
                                            <el-checkbox v-for="permission in permissions" v-model="form.permissions"
                                                :label="permission.name" :key="permission.name" :value="permission.name"
                                                size="small" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <vs-button @click.prevent="updateDoctor" color="dark" type="filled" size="small">
                                        Update Doctor
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
    name: 'EditDoctor',
    data() {
        return {
            permissions: [],
            roles: [],
            form: {
                name: '',
                email: '',
                password: '',
                role: '',
                permissions: [],
                // education: '',
                // specialization: '',
                // job_desc: '',
                // country: '',
                // nationality: ''
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
        getRoles() {
            Axios.get('http://127.0.0.1:8000/api/admin/get-roles')
                .then((response) => {
                    this.roles = response.data.roles
                })
        },
        getDoctor(){
            Axios.get('http://127.0.0.1:8000/api/admin/get-doctor/' + this.$route.params.id)
                .then((response) => {
                    console.log(response)
                    this.form.name = response.data.name
                    this.form.email = response.data.email
                    this.form.password = response.data.password
                    this.form.role = response.data.roles[0].id
                    for (let permission of response.data.permissions ) {
                        this.form.permissions.push(permission.name)
                    }
                })
        },
        updateDoctor(){
            Axios.post('http://127.0.0.1:8000/api/admin/update-doctor/' + this.$route.params.id, this.form)
                .then(() => {})
                .catch(() => {})
        }
    },
    mounted() {
        this.getPermissions()
        this.getRoles()
        this.getDoctor()
    }
}
</script>