import axios from "axios";
import qs from 'qs'

const instance=axios.create({
    timeout:5000,
    baseURL:'http://iwenwiki.com/wapicovid19/'
})
instance.interceptors.request.use(
    config=>{
        if(config.method=='post'){
            config.data=qs.stringify(config.data)
        }
        return config
    },
    error=>{
        Promise.reject(error)
    }
)
instance.interceptors.response.use(
    response=>response.status===200?Promise.resolve(response.data):Promise.reject(response),
    error=>{
        Promise.reject(error)
    }
)

export default instance