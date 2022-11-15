import Vue from 'vue'
import Vuex from 'vuex'
import loginModule from './modules/loginModule'
import productModule from './modules/productModule'
import ParamsModule from './modules/ParamsModule'
Vue.use(Vuex)

export default new Vuex.Store({
 modules:{
  loginModule,
  productModule,
  ParamsModule
 }
})
