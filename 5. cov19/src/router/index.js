import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/city/:cityName',
    name:'City',
    component:()=>import('../views/City.vue'),
    props:true
  },{
    path:'/go/:from/:to',
    name:'Gselect',
    component:()=>import("../components/Fromcity.vue"),
    props:true
  }
  
]

const router = new VueRouter({
  routes
})

export default router
