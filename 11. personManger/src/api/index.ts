import axios from '../utils/request';
import base from './base';
interface introduce{
    data:string
}
interface User{
    user:string,
    password:string
}
interface Id{
    id:number|string
}
interface Add{
    title:string,
    technology:string,
    desc:string,
    info?:any
}
export default {
    getIntroduce:()=>{          //个人介绍接口                          
        return axios.get(base.BASE_URL+base.INTRODUCE)
    },
    putIntroduce:(params:introduce)=>{
        return axios.put(base.BASE_URL+base.UPINTRODUCE,params)
    },
    postLogin:(params:User)=>{
        return axios.post(base.BASE_URL+base.LOGIN,params) // 登录接口
    },
    getList:(params?:any)=>{                                           //获取列表信息接口
        return axios.get(base.BASE_URL+base.LIST,{params})
    },
    getAll:()=>{
        return axios.get(base.BASE_URL+base.ALL)
    },
    putDelete:(params:Id)=>{
        return axios.put(base.BASE_URL+base.DELETE,params)
    },
    putAdd:(params:Add)=>{
        return axios.put(base.BASE_URL+base.ADD,params)
    },
    getSerach:(params:Id)=>{
        return axios.get(base.BASE_URL+base.SEARCH,{params})
    },
    putUpdate:(params:any)=>{
        return axios.put(base.BASE_URL+base.UPDATE,params)
    }
}