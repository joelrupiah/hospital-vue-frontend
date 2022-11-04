import { GET_ADMIN_TOKEN_GETTER, IS_ADMIN_AUTHENTICATED_GETTER } from "../../storeConstants";

export default {
    [GET_ADMIN_TOKEN_GETTER]: (state) => {
        return state.token
    },
    [IS_ADMIN_AUTHENTICATED_GETTER](state) {
        return !!state.token // !! for sending if token is present
    }
}