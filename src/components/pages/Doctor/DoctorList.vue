<template>
    <div class="content-wrapper">
        <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h4 class="card-title">Doctors</h4>
                            <vs-input icon-after="true" label-placeholder="Search" icon="search" color="dark"
                                placeholder="Search" />
                        </div>

                        <p class="card-description">
                            <RouterLink to="/create-doctor">
                                <vs-button color="dark" type="filled" size="small">
                                    Create Doctor
                                </vs-button>
                            </RouterLink>
                        </p>
                        <div class="row">
                            <div class="col-md-4" v-for="(doctor, index) in doctors">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                        class="image" style="width:100%" />
                                    <div style="padding: 14px">
                                        <div class="d-flex justify-content-between">
                                            <span>{{doctor.name}}</span>
                                            <span>{{doctor.role}}</span>
                                        </div>
                                        <div class="bottom">
                                            <el-button type="primary" text class="button">
                                                View
                                            </el-button>
                                            <RouterLink :to="`/update-doctor/${doctor.id}`" style="text-decoration:none">
                                                <el-button type="warning" text class="button">Edit</el-button>
                                            </RouterLink>
                                            <el-button type="danger" text class="button">Delete</el-button>
                                        </div>
                                    </div>
                                </el-card>
                            </div>
                            <el-pagination small background layout="prev, pager, next" :total="50" class="mt-4 ms-3" />
                        </div>
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
    name: 'DoctorList',
    data() {
        return {
            doctors: []
        }
    },
    methods: {
        getDoctors() {
            Axios.get('http://127.0.0.1:8000/api/admin/get-doctors')
                .then((response) => {
                    this.doctors = response.data.doctors
                })
        }
    },
    mounted() {
        this.getDoctors()
    },
    created() {
        this.moment = moment
    }
}
</script>