import axios from "axios";
import qs from 'qs'
const instance=axios.create({
    timeout:3000,
})
instance.interceptors.request.use(config=>{

    if(config.method=='post')
    {
        config.data=qs.stringify(config.data)
    }
    return config
},error=>{return error})


export default instance