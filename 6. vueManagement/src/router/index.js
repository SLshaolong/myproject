import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/index.vue'
import Layout from '../views/layout.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  name: 'login',
  component: Login
}, {
  path: '/',
  name: 'Layout',
  component: Layout,
  redirect: '/product' ,
  meta: {
    requiresAuth: true
  },
  children: [{
      path: '/product',
      name: 'Product',
      component: () => import('../views/product/index.vue'),
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/params',
      name: 'Params',
      component: () => import("../views/params/index.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'content',
      name: 'Cpntent',
      component: () => import("../views/Content/index.vue"),
      meta: {
        requiresAuth: true
      }
    }

  ]
}, {
  path: '/user',
  name: 'User',
  component: () => import("../views/ucenter/index.vue"),
  meta: {
    requiresAuth: true
  }

}]

const router = new VueRouter({
  routes
})

export default router