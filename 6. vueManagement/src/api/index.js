import axios from "../utils/request";
import base from "./base";

const api = {
    //登录
    login(params) {
        return axios.post(base.baseUrl + base.login, params)
    },
    // 注册
    registe(params) {
        return axios.post(base.baseUrl + base.registe, params)
    },
    // 商品列表
    productlist(params) {
        return axios.get(base.baseUrl + base.productlist, {
            params
        })
    },
    // 商品总数
    total() {
        return axios.get(base.baseUrl + base.total)
    },
    // 模糊查询
    search(params) {
        return axios.get(base.baseUrl + base.search, {
            params
        })
    },
    // 类目查询
    selectItem(params) {
        return axios.get(base.baseUrl + base.selectItem, {
            params
        })
    },
    // updateImg:base.baseUrl+base.UpdateImg,
    setProduct(params) {
        return axios.get(base.baseUrl + base.InsertProduct, {
            params
        })
    },
    delectProduct(params) {
        return axios.get(base.baseUrl + base.delectProduct, {
            params
        })
    },
    // 更新数据接口
    ProductReset(params) {
        return axios.get(base.baseUrl + base.reset, {
            params
        })
    },
    // 预更新查询接口
    resetSelect(params) {
        return axios.get(base.baseUrl + base.resetSelect, {
            params
        })
    },
    GetparamsList(params) {
        return axios.get(base.baseUrl + base.paramsList, {
            params
        })
    },
    // 规格参数模糊查询
    GetSelectParams(params) {
        return axios.get(base.baseUrl + base.ParamsSelect, {
            params
        })
    },
    // 规格参数添加接口
    AddParams(params) {
        return axios.get(base.baseUrl + base.AddParams, {
            params
        })
    },
    // 规格参数总数查询接口
    SelectParamsAll() {
        return axios.get(base.baseUrl + base.SelectionParams)
    },
    // 规格参数删除接口
    DeleteParams(params) {
        return axios.get(base.baseUrl + base.DeleteParams, {
            params
        })
    },
    // 内容分类查询
    SelectContent() {
        return axios.get(base.baseUrl + base.Selectcontent)
    },
    // 内容分类删除接口
    DeltectContent(params) {
        return axios.get(base.baseUrl + base.DeltectContent, {
            params
        })
    },
    // 内容分类添加接口
    AddContent(params) {
        return axios.get(base.baseUrl + base.AddContent, {
            params
        })
    },
    // 内容列表查询接口
    searchlist(params) {
        return axios.get(base.baseUrl + base.searchlist, {
            params
        })
    },
    // 内容列表删除接口
    deletelist(params) {
        return axios.get(base.baseUrl + base.deletelist, {
            params
        })
    },
    // 内容列表增加接口
    addlist(params) {
        return axios.get(base.baseUrl + base.addlist, {
            params
        })
    }

}
export default api