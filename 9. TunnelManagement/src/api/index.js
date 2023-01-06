import base from "./base";
import axios from '../utils/request'
const api={
    getLoginDate(params){
        return axios.post(base.BASE_URL+base.Login,params)
    },
    getRouter(params){
        return axios.get(base.BASE_URL+base.routerChange,{params})
    },
    getLineData(){
        return axios.get(base.BASE_URL+base.lineDate)
    },
    getallProject(params){
        return axios.get(base.BASE_URL+base.projectInfo,{params})
    },
    getSearchInfo(params){
        return axios.get(base.BASE_URL+base.searchProject,{params})
    },
    getAllPage(){
        return axios.get(base.BASE_URL+base.allpage)
    },
    addFromData(params){
        return axios.get(base.BASE_URL+base.addFrom,{params})
    },
    deleteFromData(params){
        return axios.get(base.BASE_URL+base.delectFrom,{params})
    },
    getBeforeUpdateData(params){
        return axios.get(base.BASE_URL+base.beforeUpdate,{params})
    },
    UpdateData(params){
        return axios.put(base.BASE_URL+base.update+params.id,params)
    },
    getTree(){
        return axios.get(base.BASE_URL+base.tree)
    },
    getTreeChild(params){
        return axios.get(base.BASE_URL+base.treeChild,{params})
    },
    getContentData(params){
        return axios.get(base.BASE_URL+base.content,{params})
    },
    uploadContentUrl(params){
        return axios.get(base.BASE_URL+base.uploadcontent,{params})
    },getPdfData(params){
        return axios.get(base.BASE_URL+base.pdfData,{params})
    },
    getAllUserData(){
        return axios.get(base.BASE_URL+base.userData)
    },
    getDimUser(params){
        return axios.get(base.BASE_URL+base.dimUser,{params})
    },
    putAddUserData(params){
        return axios.put(base.BASE_URL+base.addUser,params)
    },
    getBeforeUpdateUserData(params){
        return axios.get(base.BASE_URL+base.beforeUploadUser,{params})
    },
    putUpdateUserDate(params){
        return axios.put(base.BASE_URL+base.updateUser,params)
    },
    putDeleteUserData(params){
        return axios.put(base.BASE_URL+base.deleteUser,params)
    }
}

export default api