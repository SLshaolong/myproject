<template>
    <van-form @submit="onSubmit" show-error :submit-on-enter='flag' label-width="4em">
        <van-cell-group inset  >
            <van-field v-model="username" name="username" label="手机号" placeholder="请输入手机号" 
                :rules="[{pattern:/^(1)(\d){10}/, message:'请输入正确的手机号' }]"/>
            <van-field v-model="nickName" name="nickName" label="昵称" placeholder="请输入您的昵称" 
                :rules="[{ required: true, message: '请输入昵称' }]"/>
            <van-field v-model="password" type="password" name="password" label="密码" placeholder="请输入密码"
                :rules="[{pattern:/^[a-zA-Z]/, message: '只能以字母开头' }]" />
            <van-field v-model="resetpassword" type="password" name="resetpassword" label="重复密码" placeholder="请再次输入您的密码"
                :rules="[{ validator:validatorMessage, message: '两次密码校验失败' }]" />
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
import {Toast} from 'vant'
export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const nickName=ref("");
    const resetpassword=ref("")
    const flag=ref(false); //设置回车不提交表单
    const onSubmit = (values) => {

      console.log('submit', values);
      api.registUserInfo({
        username:values.username,
        password:values.password,
        nickname:values.nickName

      }).then(res=>res.data).then(data=>{
        if(data.status==200){
            // 注册成功
            Toast.success('注册成功')
        }else if(data.status==203){
        // 手机号重复
        Toast({
            message:'手机号已被注册',
            icon:'star'
        })
        }else{
            // 注册失败
            Toast.fail("注册失败")
        }
      })
    };
    const validatorMessage=(data)=>{
       if(password.value!=data){
        return "两次密码校验失败"
       }
    }

    return {
      username,
      password,
      onSubmit,
      flag,
      nickName,
      resetpassword,
      validatorMessage
    };
  },
};
</script>

<style scoped lang="less">
.van-field{
    margin-top: 10px;
    border-radius: 8px;
    
}
.van-cell-group{
    background-color: transparent;
}
</style>