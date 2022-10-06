<template>
    <div class="content-wrapper">
        <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h4 class="card-title">Permissions List</h4>
                            <vs-input icon-after="true" label-placeholder="Search" icon="search" color="dark"
                                placeholder="Search" />
                        </div>

                        <p class="card-description">
                            <RouterLink to="/create-permissions">
                                <vs-button color="dark" type="filled" size="small">
                                    Create Permission
                                </vs-button>
                            </RouterLink>

                        </p>

                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Date Created</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(permission, index) in permissions">
                                        <td>{{index+1}}</td>
                                        <td>{{permission.name}}</td>
                                        <td class="text-success">
                                            {{ moment(permission.created_at).format("ddd MMM DD, YYYY [at] HH:mm a") }}
                                        </td>
                                        <td>
                                            <RouterLink :to="`/edit-permissions/${permission.id}`">
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
    name: 'PermissionList',
    data() {
        return {
            permissions: []
        }
    },
    methods: {
        getPermissions() {
            Axios.get('http://127.0.0.1:8000/api/admin/get-permissions')
                .then((response) => {
                    this.permissions = response.data.permissions
                })
        }
    },
    mounted() {
        this.getPermissions()
    },
    created() {
        this.moment = moment
    }
}
</script>