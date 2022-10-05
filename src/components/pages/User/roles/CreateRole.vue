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
                                            <el-select v-model="value" class="m-2"
                                                placeholder="Highest level of education" size="default"
                                                style="width:100%">
                                                <el-option label="certificate" />
                                                <el-option label="diploma" />
                                                <el-option label="degree" />
                                                <el-option label="masters" />
                                                <el-option label="doctorate" />
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
                                            <el-select v-model="value" class="m-2"
                                                placeholder="Choose specialization" size="default"
                                                style="width:100%">
                                                <el-option label="Daktari wa mifupa" />
                                                <el-option label="Daktari wa watoto" />
                                            </el-select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Job <span
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
                                            <el-select v-model="value" class="m-2"
                                                placeholder="Choose job description" size="default"
                                                style="width:100%">
                                                <el-option label="part-time" />
                                                <el-option label="full-time" />
                                                <el-option label="contract" />
                                                <el-option label="internship" />
                                                <el-option label="attachment" />
                                            </el-select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Email <span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-9">
                                            <vs-input color="dark" label-placeholder="rupiahjeremiah@gmail.com" size="small"
                                                style="width:100%" />
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
                                            <el-select v-model="value" class="m-2"
                                                placeholder="Choose country of origin" size="default"
                                                style="width:100%">
                                                <el-option label="Kenya" />
                                                <el-option label="Uganda" />
                                                <el-option label="Rwanda" />
                                                <el-option label="Burundi" />
                                                <el-option label="Tanzania" />
                                            </el-select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Nationality <span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-9">
                                            <el-select v-model="value" class="m-2"
                                                placeholder="Choose nationality" size="default"
                                                style="width:100%">
                                                <el-option label="Kenyan" />
                                                <el-option label="Ugandan" />
                                                <el-option label="Rwandese" />
                                                <el-option label="Burundian" />
                                                <el-option label="Tanzanian" />
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
                                            <vs-input color="dark" label-placeholder="Kiambu/Nairobi/Kakamega" size="small"
                                                style="width:100%" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">City/Town<span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-9">
                                            <vs-input color="dark" label-placeholder="Juja/Nairobi/Kakamega" size="small"
                                                style="width:100%" />
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
                                            <vs-input type="password" color="dark" label-placeholder="joerup" size="small"
                                                style="width:100%" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Password<span
                                                class="text-danger">*</span> </label>
                                        <div class="col-sm-9">
                                            <vs-input color="dark" label-placeholder="12345678" size="small"
                                                style="width:100%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <vs-button color="dark" type="filled" size="small">
                                        Create Doctor
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
    export default {
        name: 'CreateRole',
        data(){
            return{}
        }
    }
</script>