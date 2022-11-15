<template >
    <div class="top">
        <h3>我的线上笔记</h3>
        <span class="right">{{ name }}</span>
        <VanButton class="btn" size="mini" type="primary" @click="ReMoveToLogin">退出</VanButton>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { UserStore } from '../../store/index'
import {  ref } from 'vue'
export default {
    setup() {
        const name = ref("")
        const store = UserStore();
        const router = useRouter()
        const ReMoveToLogin = () => {
            localStorage.removeItem("token")
            store.$patch({
                token: false,
                id: 0,
                nickname: ''
            })
            router.push("/login")
            
        }
        return {
            ReMoveToLogin,
            name,
            store
        }
    },
    mounted(){
       this.name=this.store.nickname.charAt(this.store.nickname.length-1)
    }


}
</script>

<style scoped lang="less">
.top {
    height: 40px;
    border-bottom: 2px solid #fff;
    box-shadow: 0px 0px 5px #fff;
    background-color: #7effaf;
    align-items: center;
    display: flex;

    h3 {
        text-align: center;
        line-height: 40px;
        font-size: 20px;
        margin-left: 3rem;
        flex: 1;
    }

    .right {
        display: flex;
        justify-content: center;
        overflow: hidden;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
        font-size: 18px;
        color: #fff;
        margin-right: 40px;
        background-color: rgb(243, 154, 154);
    }

    .btn {
        margin-right: 20px;

    }
}
</style>