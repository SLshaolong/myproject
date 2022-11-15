import {createApp} from 'vue'
import App from './App.vue'
import router from './router/ChangeRouter'
import "./assets/css/common.css"
import { createPinia} from 'pinia'
import { Toast } from 'vant';
import {UserStore} from './store/index'
import jwt from 'jwt-decode'
// 初始化pinia


import 'vant/es/image-preview/style';

const app = createApp(App).use(createPinia())
app.use(Toast);
app.use(router)
app.mount('#app')
const store=UserStore();
if(localStorage.getItem("token"))
{
    let data=jwt(localStorage.getItem('token'))
    store.$patch({
        nickname:data.nickname,
        id:data.id,
        token:data.token
    })
}