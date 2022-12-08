import axios from '../utils/request.js'
import base from './base.js'
const api={
	UpLoad(params){
		return axios.post(base.baseUrl+base.Login,params).then(res=>res.data)
	},
	Regist(params){
		return axios.post(base.baseUrl+base.regist,params).then(res=>res.data)
	}
}

export default api