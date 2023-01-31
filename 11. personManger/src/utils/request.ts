import axios from "axios";
import qs from 'qs';
const instance = axios.create({})
instance.interceptors.request.use(config => {
    if (config.method == 'post' || config.method == 'put') {
        config.data = qs.stringify(config.data)
    }
    return config
})

instance.interceptors.response.use(config=>{
    return config.data
    
})
export default instance