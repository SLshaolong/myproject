<template>
 <div class="login-container">
    <el-form class="user" size="large" :model="user">
        <div class="title-container">
            <h3 class="title">隧道后台管理系统</h3>
        </div>
        <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="user.username" placeholder="请输入用户名" type="text" name="username"/>
        </el-form-item>
        <el-form-item prop="password">
            <el-input :prefix-icon="Lock" v-model="user.password" placeholder="请输入密码" type="password" name="password"/>
        </el-form-item>
        <el-button type="primary" @click="handleLogin" style="width:100%;margin-bottom:30px">登录</el-button>
    </el-form>
    
 </div>

</template>

<script setup>
import { reactive} from 'vue'
import api from '../../api'
import {User,Lock} from '@element-plus/icons-vue'
import {userLoginStore} from '../../stores/loginStore.ts'
import {useRouter} from 'vue-router'
const store=userLoginStore();
const router=useRouter();
const user=reactive({
    username:'',
    password:''
})
const handleLogin=()=>{
    const {username,password}=user;
    api.getLoginDate({username,password}).then(res=>{
        if(res.status==200)
        {
            store.token=res.token;
            store.username=res.username;
            store.permission=res.permission
            // 存储数据到pinia
            router.push("/")
        }else{
            ElMessage.error(res.msg)
        }
    })
}
</script>

<style scoped lang="less">
.login-container{
    width: 100%;
    height: 100%;
    background: #2d3a4b;
}
.user{
    position: relative;
    width: 400px;
    padding: 160px 35px 0;
    margin: 0 auto;
    .title{
        font-size: 30px;
        color: #fff;
        text-align: center;
        margin: 20px;
    }
}
</style>