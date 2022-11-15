<template>
    <div class="box">
        <h3>龙城在线记事本</h3>
        <van-tabs v-model:active="active" @click-tab="onClickTab" background="transparent" title-active-color="#fff" title-inactive-color="#f0f0f0">
            <van-tab title="登录">
                <LoginFrom/>
            </van-tab>
            <van-tab title="注册">
                <ResgistVue/>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script >
import { UserStore } from '../store/index';
import { ref } from 'vue';
import LoginFrom from './LoginViews/LoginFrom.vue'
import ResgistVue from './LoginViews/Resgist.vue';
export default {
    setup() {
        const store = UserStore();
        const active = ref(0);
        const onClickTab = (data) => {
        }
        return {
            store,
            active,
            onClickTab,
        }
    },
    components: {
        LoginFrom,
        ResgistVue
    }
}


</script>

<style scoped lang="less">
.box {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 50px 20px;

    h3 {
        text-align: center;
        color:transparent ;
        background-clip: text;
        -webkit-background-clip:text;
        background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 50px;
    }

    background-image: url(../assets/images/backgroundImage.png);
    background-size:100%;

    .van-tabs {
        background-color: rgba(0, 0, 0, .3);
        border-radius: 8px;
        padding: 20px 0;
    }
}
</style>