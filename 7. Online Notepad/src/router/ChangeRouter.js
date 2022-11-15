import router from "./index.js";
import {UserStore} from "../store/index"
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const token = UserStore().id;
        return token ? next() : next({
            path: '/login'
        })

    } else {
        next()
    }
})
export default router