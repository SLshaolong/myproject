import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/init.css'
import App from './App.vue'
import router from './router'
import piniaPersist from 'pinia-plugin-persist'
import icons from './plugins/icons.ts'
import echarts from './plugins/echart.ts'
import 'element-plus/theme-chalk/index.css'
const app = createApp(App)
const pinia =createPinia()
pinia.use(piniaPersist)
app.use(pinia)
app.use(router)
app.use(icons)
app.use(echarts)
app.mount('#app')
