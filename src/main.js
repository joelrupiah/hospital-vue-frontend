import { createApp } from 'vue'
import AdminMaster from './components/AdminMaster.vue'
import router from './router'

import Vuesax from 'vuesax3'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import 'vuesax3/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

const app = createApp(AdminMaster)

app.component('admin-master', AdminMaster)

app.use(Vuesax)
app.use(ElementPlus)

app.use(router)

app.mount('#admin')