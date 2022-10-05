import { createStore, createLogger } from 'vuex'
// import cart from './modules/cart'
// import products from './modules/products'
import { admin } from './modules/admin'

// const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    admin
    // cart,
    // products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})