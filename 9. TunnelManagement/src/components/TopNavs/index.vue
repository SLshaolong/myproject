<template>
    <div class="nav">
        <div class="toggle-menu">
            <div class="toggle-menu-toggle">
                <el-icon v-if="menustore.isCollapse" class="icon" @click="closeMenu(false)">
                    <Expand />
                </el-icon>
                <el-icon v-else class="icon" @click="closeMenu(true)">
                    <Fold />
                </el-icon>
            </div>
        </div>
        <div class="toggle-menu-breadvrumb">
            <el-breadcrumb>
                <el-breadcrumb-item>当前</el-breadcrumb-item>
                <el-breadcrumb-item>{{menustore.breadvrumb}}</el-breadcrumb-item>
            </el-breadcrumb>

        </div>
        <div class="user">
            <el-dropdown>
                <span class="el-dropdown-link">
                    {{store.username}}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>
                            <router-link to="/ucenter">个人中心</router-link>
                        </el-dropdown-item>
                        <el-dropdown-item @click="loginoutHandle">退出登录</el-dropdown-item>

                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {userLoginStore} from '../../stores/loginStore' 
import {MenuStore} from '../../stores/MenuStore'
import {useRouter} from 'vue-router'
const store=userLoginStore();
const menustore=MenuStore()
const router=useRouter()
/**
 * 退出登录
 */

const loginoutHandle=():void=>{
    // 清空存储信息 回到登录页
    store.token='';
    store.permission='';
    store.username='';
    router.push({
        name:'Login'
    })
}
/**
 * 关闭菜单
 */
const closeMenu=(flag:boolean):void=>{
menustore.isCollapse=flag
}
</script>

<style scoped>
.nav{
    width: 100%;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 /12%),0 0 3px 0 rgb(0 0 0 /4%);
}
.toggle-menu{
    padding-top: 17.5px;
    padding-left: 10px;
}
.icon{
    font-size: 25px;
}
.toggle-menu-toggle{
    float: left;
}
.toggle-menu-breadvrumb{
    float: left;
    line-height: 60px;
    margin-top: 6px;
    margin-left: 20px;
}
.user{
    font-size: 15px;
    position: absolute;
    right: 20px;
    top: 20px;
}
</style>