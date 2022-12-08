export default {
	namespaced:true,
	state:{
		nickname:'',
		flag:false,
		id:''
	},
	mutations:{
		setToken(state,params){
			state.nickname=params.nickname,
			state.flag=params.flag,
			state.id=params.id
		}
	},
	getters:{
		getFlag(state){
			return state.flag
		},
		getname(state){
			return state.nickname
		},
		getId(state){
			return state.id
		}
	}
	
}