export default {
	namespaced:true,
	state:{
		pages:1,
		flag:false
	},
	mutations:{
		setPage(state,page){
			state.pages=page
		},
		setFlag(state,flag){
			state.flag=flag
		}
	},
	getters:{
		getPage(state){
			return state.pages
		},
		getflag(state){
			return state.flag
		}
	}
}