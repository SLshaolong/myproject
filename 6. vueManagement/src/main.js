import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import "../src/assets/css/common.css"
import "./router/permission"
import './utils/eventbus'
import i18n from './plugins/il8n.js'

Vue.config.productionTip = false





// 初始化
// 读取localstorage
if(localStorage.getItem("ego"))
{
  store.commit('loginModule/UpdateToken',JSON.parse(localStorage.getItem('ego')).token)
  store.commit('loginModule/UpdateUserName',JSON.parse(localStorage.getItem('ego')).username)
}
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
