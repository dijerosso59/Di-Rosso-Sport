import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/css/style.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')