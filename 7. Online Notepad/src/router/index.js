import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import HomeView from '../views/HomeViews/Base.vue'
const router = createRouter({
  history: createWebHashHistory(
    import.meta.env.BASE_URL),

  routes: [{
      path: '/params',
      name: 'params',
      component: HomeView,
      meta: {
        requiresAuth: true
      },
      children: [{
        path: 'home',
        name: 'Home',
        component: () => import("../views/HomeViews/index.vue"),
        meta: {
          requiresAuth: true
        }
      },{
        path:'details/:cid',
        name:'Detail',
        component:()=>import('../views/HomeViews/Details.vue'),
        props:true
      } ]
    },
    {
      path: '/add',
      name: 'Add',
      component: () => import("../views/HomeViews/Main.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../views/Login.vue")
    },{
      path:'/',
      name:'主页',
      redirect:{path:'/params/home'}
    }

  ]
})

export default router