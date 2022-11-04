import Axios from "axios"
import { AUTH_ACTION, AUTO_LOGIN_ACTION, AUTO_LOGOUT_ACTION, LOGIN_ACTION, LOGOUT_ACTION, SET_USER_TOKEN_DATA_MUTATION } from "../../storeConstants"

export default {
    [LOGOUT_ACTION](context) {
        context.commit(SET_USER_TOKEN_DATA_MUTATION, {
            email: null,
            token: null,
            name: null,
            id: null,
            avatar: null
        })
        localStorage.removeItem('adminData')
    },
    [AUTO_LOGOUT_ACTION](context){
        context.dispatch(LOGOUT_ACTION)
    },
    async [LOGIN_ACTION](context, payload) {
        return context.dispatch(AUTH_ACTION, {
            ...payload,
            url: 'http://127.0.0.1:8000/api/admin/login'
        })
    },
    [AUTO_LOGIN_ACTION](context) {
        let adminData = localStorage.getItem('adminData')
        if (adminData) {
            context.commit(SET_USER_TOKEN_DATA_MUTATION, JSON.parse(adminData))
        }
    },
    async [AUTH_ACTION](context, payload) {
        // console.log(payload)
        let postData = {
            email: payload.email,
            password: payload.password
        }
        // console.log(postData)
        let response = ''
        try {
            response = await Axios.post([payload.url], postData)
        } catch (error) {
            console.log(error.response.data.error[0])
        }

        // console.log(response)
        if (response.status === 200) {
            // let expirationTime = +response.data.expiresIn * 1000
            // setTimeout(() => {
            //     context.dispatch(AUTO_LOGOUT_ACTION)
            // }, expirationTime)
            let tokenData = {
                email: response.data.email,
                token: response.data.token,
                name: response.data.name,
                id: response.data.id,
                // expiresIn = expirationTime,
                avatar: response.data.avatar
            }
            localStorage.setItem('adminData', JSON.stringify(tokenData))
            context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData)
        }
    }
}