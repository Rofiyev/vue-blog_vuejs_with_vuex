import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import store from './store'
import uiComponents from './ui-components'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { PrHeartFill, IoExitOutline } from 'oh-vue-icons/icons'

addIcons(PrHeartFill, IoExitOutline)

const app = createApp(App)

app.component('v-icon', OhVueIcon)
uiComponents.map((component) => app.component(component.name, component))

app.use(Vue3Toastify, {
  autoClose: 3000
})
app.use(router)
app.use(store)
app.mount('#app')
