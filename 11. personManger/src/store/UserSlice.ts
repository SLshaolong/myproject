import {createSlice} from '@reduxjs/toolkit'
export const UserSlice=createSlice({
    name:'User',
    initialState:{
        flag:false
    },
    reducers:{
        changeUser:state=>{
            state.flag=true
        }
    }
})
export const {changeUser} =UserSlice.actions
export default UserSlice.reducer