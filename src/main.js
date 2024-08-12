// Import global CSS
import './assets/main.css'

// import createPinia method Pinia
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
.use(createPinia())
.mount('#app')
