import Axios from "axios"
import { LOGIN_ACTION, LOGOUT_ACTION, SET_USER_TOKEN_DATA_MUTATION } from "../../storeConstants"

export default {
    [LOGOUT_ACTION](context){
        context.commit(SET_USER_TOKEN_DATA_MUTATION, {
            email: null,
            token: null,
            name: null,
            id: null,
            avatar: null
        })
    },
    async [LOGIN_ACTION](context, payload){
        // console.log(payload)
        let postData = {
            email: payload.email,
            password: payload.password
        }
        // console.log(postData)
        let response = ''
        try {
            response = await Axios.post('http://127.0.0.1:8000/api/admin/login', postData)
        } catch (error) {
            console.log(error.response.data.error[0])
        }
        
        // console.log(response)
        if(response.status === 200){
            context.commit(SET_USER_TOKEN_DATA_MUTATION, {
                email: response.data.email,
                token: response.data.token,
                name: response.data.name,
                id: response.data.id,
                avatar: response.data.avatar
            })
        }
    }
}