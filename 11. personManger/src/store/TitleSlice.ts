import {createSlice} from '@reduxjs/toolkit'
export const TitleSlice=createSlice({
    name:'title',
    initialState:{
        title:'',
        flag:false
    },
    reducers:{
        changeFlag:(state,action)=>{
            state.flag=action.payload
        },
        changeTitle:(state,action)=>{
            state.title=action.payload
        }
    }
})
export const {changeFlag,changeTitle} =TitleSlice.actions
export default TitleSlice.reducer