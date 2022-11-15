import router from ".";
import store from '../store'

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //判断用户登录
        const token=store.state.loginModule.token;
        return token?next():next({path:'/login'})
    } else {
        next()
    }

})