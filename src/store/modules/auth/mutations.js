import { SET_USER_TOKEN_DATA_MUTATION } from "../../storeConstants";

export default {
    [SET_USER_TOKEN_DATA_MUTATION](state, payload){
        state.email = payload.email,
        state.name = payload.name,
        state.token = payload.token,
        state.id = payload.id,
        state.avatar = payload.avatar
    }
}