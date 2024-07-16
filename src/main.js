import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PhosphorIcons from "@phosphor-icons/vue"

createApp(App).use(router).use(PhosphorIcons).mount('#app')
