import axios from 'axios';
import qs from 'qs'
const instance=axios.create({

})
instance.interceptors.request.use(data=>{
    if(data.method=='post')
    {
        data.data=qs.stringify(data.data)
    }
    return data
})
export default instance