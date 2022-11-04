<template>
    <div class="content-wrapper">
        <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h4 class="card-title">Roles List</h4>
                            <vs-input icon-after="true" label-placeholder="Search" icon="search" color="dark"
                                placeholder="Search" />
                        </div>

                        <p class="card-description">
                            <RouterLink to="/create-roles">
                                <vs-button color="dark" type="filled" size="small">
                                    Create Role
                                </vs-button>
                            </RouterLink>

                        </p>

                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Permissions</th>
                                        <th>Date Created</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(role, index) in roles">
                                        <td>{{index+1}}</td>
                                        <td>{{role.name}}</td>
                                        <td>
                                            <el-tag 
                                                v-for="permission in role.permissions" 
                                                :key="permission.name" 
                                                class="mx-1"
                                                type="success" 
                                                effect="dark">
                                                {{ permission.name }}
                                            </el-tag>
                                        </td>
                                        <td class="text-success">
                                            {{ moment(role.created_at).format("ddd MMM DD, YYYY [at] HH:mm a") }}
                                        </td>
                                        <td>
                                            <RouterLink :to="`/edit-roles/${role.id}`">
                                                <vs-button color="warning" type="filled" size="small">
                                                    Edit
                                                </vs-button>
                                            </RouterLink>

                                            <vs-button class="ms-1" color="danger" type="filled" size="small">
                                                Delete
                                            </vs-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <el-pagination small background layout="prev, pager, next" :total="50" class="mt-4 ms-3" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
import moment from "moment"

export default {
    name: 'RoleList',
    data() {
        return {
            roles: [],
        }
    },
    methods: {
        getRoles() {
            Axios.get('http://127.0.0.1:8000/api/admin/get-roles')
                .then((response) => {
                    this.roles = response.data.roles
                })
        }
    },
    mounted() {
        this.getRoles()
    },
    created() {
        this.moment = moment
    }
}
</script>