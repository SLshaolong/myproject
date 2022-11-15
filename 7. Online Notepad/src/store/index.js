import { defineStore } from 'pinia'

export const UserStore = defineStore('counter', {
  state: () => ({ token: false ,nickname:'',id:0}),
  getters: {
    changeToken: (state,data) => state.token=data,
  },
})
