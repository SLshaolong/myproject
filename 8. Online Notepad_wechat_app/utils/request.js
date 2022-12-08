import axios from 'axios'
import qs from 'qs'
const intance=axios.create({
	
})
intance.interceptors.request.use(config=>{
	if(config.method=='post'){
		config.data=qs.stringify(config.data)
		return config
	}
	return config
})

export default intance