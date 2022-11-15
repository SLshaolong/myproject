import axios from "../utils/axios";
import base from "./base";
const allRequest={
    getUserInfo(params){
        return axios.post(base.baseUrl+base.getUserInfo,params)
    },
    registUserInfo(params){
        return axios.post(base.baseUrl+base.registUser,params)
    },
    ListSelect(params){
        return axios.get(base.baseUrl+base.SelectList,{
            params
        })
    },
    Details(params){
        return axios.get(base.baseUrl+base.Detail,{
            params
        })
    },
    AllData(params){
        return axios.get(base.baseUrl+base.allData,{
            params
        })
    },
    InSert(params){
        return axios.get(base.baseUrl+base.insert,{
            params
        })
    },
    Delete(params){
        return axios.get(base.baseUrl+base.Delete,{
            params
        })
    }
}
export default allRequest