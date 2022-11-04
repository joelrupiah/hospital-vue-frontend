import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const auth = {
    namespaced: true,
    state() {
        return {
            token: '',
            id: '',
            email: '',
            name: '',
            avatar: ''
        }
    },
    mutations,
    getters,
    actions
}

export default auth