import {defineStore} from 'pinia'

export const MenuStore=defineStore("menu",{
    state:():any=>{
        return{
            isCollapse:false,
            breadvrumb:'',
            menus:[]
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'menus',
                storage: localStorage
            }
        ]
    },
})