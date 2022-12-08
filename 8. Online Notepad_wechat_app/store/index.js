import Vue from 'vue'
import vuex from 'vuex'
import LoginModule from './modules/LoginModule'
import PageModule from './modules/PageModule'
Vue.use(vuex)

export default new vuex.Store({
	modules:{
		LoginModule,
		PageModule
	}
})