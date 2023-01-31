import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './UserSlice'
import TitleSlice from './TitleSlice'
export default configureStore({
    reducer:{
        User:UserSlice,
        Title:TitleSlice
    }
})