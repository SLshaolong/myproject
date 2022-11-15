<template>
    <van-form @submit="onSubmit" show-error :submit-on-enter='flag' label-width="3em">
        <van-cell-group inset>
            <van-field v-model="username" name="username" label="手机号" placeholder="请输入手机号"
                :rules="[{ pattern: /^(1)(\d){10}/, message: '请输入正确的手机号' }]" />
            <van-field v-model="password" type="password" name="password" label="密码" placeholder="请输入密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                提交
            </van-button>
        </div>
    </van-form>
</template>

<script>
import { ref } from 'vue';
import api from '../../api/index'
import { UserStore } from '../../store/index'
import jwt from 'jwt-decode'
import { useRouter } from 'vue-router'
import { Toast } from 'vant'
import 'vant/es/toast/style';
export default {
    setup(props, ctx) {
        const router = useRouter();
        const store = UserStore();
        const username = ref('');
        const password = ref('');
        const flag = ref(false); //设置回车不提交表单
        const onSubmit = (values) => {
            api.getUserInfo(values).then(res => res.data).then(data => {
                if (data.status == 200) {
                    localStorage.setItem("token", data.token)
                    const alldata = jwt(data.token)
                    store.$patch({
                        token: alldata.flag,
                        nickname: alldata.nickname,
                        id: alldata.id
                    })
                    // 登陆成功
                    Toast.success('登陆成功');
                    router.push('/params/home')
                } else {
                    Toast.fail("登陆失败")
                }
            })



        };

        return {
            username,
            password,
            onSubmit,
            flag
        };
    },
};
</script>

<style scoped lang="less">
.van-field {
    margin-top: 20px;
    border-radius: 8px;

}

.van-cell-group {
    background-color: transparent;
}
</style>