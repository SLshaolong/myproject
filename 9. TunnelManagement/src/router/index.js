import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView/index.vue'
import Layout from '../views/Layout.vue'
import Login from '../views/LoginInfo/index.vue'
import {
  userLoginStore
} from '../stores/loginStore.ts'
import {
  MenuStore
} from '../stores/MenuStore.ts'
import dynamicRoute from './dynamicRoute'
const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [{
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
          requiresAuth: true,
          key: '首页'
        }

      }, {
        path: '/project',
        name: 'Project',
        component: () => import("../views/ProjectInfo/index.vue"),
        meta: {
          requiresAuth: true,
          key: '项目基础信息'
        }
      },
      {
        path: '/tunnel',
        name: 'Tunnel',
        component: () => import("../views/TunnerInfo/index.vue"),
        meta: {
          requiresAuth: true,
          key: '隧道设计信息'
        }
      },

      {
        path: '/build',
        name: 'Build',
        component: () => import("../views/BuildManage/index.vue"),
        meta: {
          requiresAuth: true,
          key: '施工监控管理'
        }
      },
      {
        path: '/geological',
        name: 'Geological',
        component: () => import("../views/GeologicallInfo/index.vue"),
        meta: {
          requiresAuth: true,
          key: '超前地质管理'
        }
      },
      {
        path: '/system',
        name: 'System',
        component: () => import("../views/SystemManage/index.vue"),
        meta: {
          requiresAuth: true,
          key: '系统信息管理'
        }
      }, {
        path: '/ucenter',
        name: 'UserCenter',
        component: () => import('../views/UserCenter/index.vue'),
        meta: {
          requiresAuth: true,
          key: '个人中心'
        }
      }, {
        path: '/plan',
        name: 'Plan',
        component: () => import('../views/BuildManage/PlanText/index.vue'),
        meta: {
          requiresAuth: true,
          key: '计划检测'
        }

      }, {
        path: '/section',
        name: 'Section',
        component: () => import('../views/BuildManage/SectionTest/index.vue'),
        meta: {
          requiresAuth: true,
          key: '切面检测'
        }
      }
    ]
  }, {
    path: '/login',
    name: 'Login',
    component: Login

  },{
    path:'/pdf/:id',
    name:'Pdf',
    component:()=>import('../views/TunnerInfo/PdfView/index.vue'),
    meta:{
      requiresAuth:true
    }
  }, {
    path: '/:pathMatch(.*)*',
    name: 'notFond',
    component: () => import('../views/NotFound/index.vue')
  }]
})
router.beforeEach((to, from, next) => {
  const store = userLoginStore()
  if (to.meta.requiresAuth) {
    if (!store.token) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  // 存储路径
  localStorage.setItem("active", to.path)
  const store = MenuStore()
  if (to.meta.key) {
    // 存储仓库
    store.breadvrumb = to.meta.key
  }
})

export default router