export default {
    namespaced:true,
    state:{
        username:'',
        token:''
    },
    mutations:{
       UpdateUserName(state,usernmae){
        state.username=usernmae
       },
       clearUserName(state){
        state.username=""
       },
       UpdateToken(state,token){
        state.token=token
       },
       clearToken(state){
        state.token=''
       }
    }


}