import App from './App'
import store from 'store/index.js';
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
import jwt from 'jwt-decode'
if(uni.getStorageSync('note')){
	const alldate=jwt(uni.getStorageSync('note'))
	// console.log(1);
	store.commit('LoginModule/setToken',alldate)
}else{
	// console.log(2);
}

const app = new Vue({
    ...App,
	store
})

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif