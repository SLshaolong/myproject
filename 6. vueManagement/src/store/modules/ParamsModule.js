export default{
    namespaced:true,
    state:{
        DataChange:[],
        flag:false
    },
    mutations:{
        ChangeData(state,data){
            state.DataChange=data
        },
        ChangeFlag(state,data){
            state.flag=data
        }
    }
    
}