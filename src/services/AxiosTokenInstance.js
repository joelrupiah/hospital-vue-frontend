import axios from "axios"
import store from "../store"
import { GET_ADMIN_TOKEN_GETTER } from "../store/storeConstants"

const axiosInstance = axios.create({})

axiosInstance.interceptors.request.use(config => {
    let params = new URLSearchParams()
    let token = store.getter[`auth/${GET_ADMIN_TOKEN_GETTER}`]
    params.append('auth', token)
    config.params = params
    return config
})

export default axiosInstance