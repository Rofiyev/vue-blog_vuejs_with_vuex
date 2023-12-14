import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import store from './store'
import uiComponents from './ui-components'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const app = createApp(App)

uiComponents.map((component) => app.component(component.name, component))

app.use(Vue3Toastify, {
  autoClose: 3000
})
app.use(router)
app.use(store)
app.mount('#app')
