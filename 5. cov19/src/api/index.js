import axios from '../utils/request'
import base from './base'
const api={
    getNcov(){
        return axios.get('http://182.92.103.212/getcvid')
    },
    getNcov2(params){
        return axios.get(base.nCoVNow,{
            params
        })
    },
    getNcov19(){
        return axios.get("http://182.92.103.212/cov19")
    },
    getline(){
        return axios.get(base.linecov)
    },
    getcityinfo(from,to){
        return axios.get(base.city+`?from=${from}&to=${to}`)
    }
    
}
export default api