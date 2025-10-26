import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router'

const app = createApp(App)
const pinia = createPinia() // EZT add hozzá

app.use(pinia)              // EZT előbb kell, mint app.use(router)
app.use(router)
app.mount('#app')
