import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
pinia.use(() => ({
  router: markRaw(router),
}))

createApp(App).use(createPinia()).use(router).mount('#app')
