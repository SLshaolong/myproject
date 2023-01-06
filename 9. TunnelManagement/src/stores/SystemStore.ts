import {defineStore} from 'pinia'

export const useSystem=defineStore('system',{
    state:():any=>{
        return{
            toggle:true
        }
    }   
})