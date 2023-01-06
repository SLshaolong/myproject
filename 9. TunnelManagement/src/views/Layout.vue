<template>
    <div class="layout-container">
        <Drawer/>
        <SliderNav />

        <div class="right-container" :style="{ marginLeft: menustore.isCollapse ? '64px' : '' }">
            <TopNav />
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
import SliderNav from '../components/SliderNavs/index.vue';
import TopNav from '../components/TopNavs/index.vue'
import Drawer from '../views/DrawerSettings/index.vue'
import { MenuStore } from '../stores/MenuStore.ts';
import { userLoginStore } from '../stores/loginStore.ts'
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import dynamicRoute from '../router/dynamicRoute'
import api from '../api';
const menustore = MenuStore()
const userStore = userLoginStore();
const router = useRouter()


onMounted(() => {
    if (userStore.permission == 'admin') {
        router.addRoute('Layout', dynamicRoute)

    }
    api.getRouter({
        user: userStore.permission
    }).then(res => {
        if (res.status == 200) {
            menustore.menus = res.menuData.menus

        }

    })
})
</script>

<style scoped lang="less">
.layout-container {


    .right-container {
        margin-left: 210px;
        transition: 0.3s ease-in;
    }

    .container {
        padding: 10px;
    }
}
</style>