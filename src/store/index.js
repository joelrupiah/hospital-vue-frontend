import { createStore, createLogger } from 'vuex'
import admin from './modules/admin'
import auth from './modules/auth/index'

// const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
  modules: {
    auth,
    admin,
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})

export default store