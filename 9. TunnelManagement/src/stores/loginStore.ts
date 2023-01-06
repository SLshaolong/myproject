import { defineStore } from 'pinia'

interface state{
    token: string,
    username: string,
    permission: string
}
export const userLoginStore=  defineStore("login",{
    state: (): state => {
        return {
            token:<string> '',
            username:<string> '',
            permission:<string> ''
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'login',
                storage: localStorage
            }
        ]
    },
   
})