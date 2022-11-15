<template>
  <div>
    <div class="banner">龙城商品后台系统</div>
    <el-card class="box-card">
      <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
        <el-tab-pane label="用户登录" name="login">
          <!-- 用户登录表单 -->
          <el-form :model="LoginFrom" status-icon ref="LoginFrom" label-width="100px">
            <el-form-item label="用户名">
              <el-input type="text" v-model="LoginFrom.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input type="password" v-model="LoginFrom.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="medium" @click="LoginSubmitFrom('LoginFrom')">
                提交
              </el-button>
            </el-form-item>
          </el-form>

        </el-tab-pane>
        <el-tab-pane label="用户注册" name="second">
          <!-- 用户注册表单 -->
          <el-form :model="resigetForm" status-icon :rules="rules" ref="resigetForm" label-width="100px">
            <el-form-item label="用户名" prop="username">
              <el-input type="text" v-model="resigetForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="resigetForm.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkpassword">
              <el-input type="password" v-model="resigetForm.checkpassword"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input type="email" v-model="resigetForm.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="medium" @click="resigetSubmitFrom('resigetForm')">
                提交
              </el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>


      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import api from '../../api/index'
import { mapMutations } from 'vuex'
import jwt from 'jwt-decode'
export default {
  data() {
    //表单验证
    var validateUserName = (rule, value, callback) => {
      //用户名为空状态
      if (value == "") {
        callback(new Error("请输入用户名"))
      } else if (value.length < 4 || value.length > 10) {
        callback(new Error("请输入正确的用户名"))
      }
      callback()
    }
    var validateEmail = (rule, value, callback) => {
      const reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
      if (value == "") {
        callback(new Error('邮箱不能为空'))
      } else if (!reg.test(value)) {
        callback(new Error("邮箱输入不合法"))
      }
      callback()
    }
    var validatePassword = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("密码不能为空"))
      }
      callback()
    }
    var validateResetpassword = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请再次输入密码"))
      }
      else if (value != this.resigetForm.password) {
        callback(new Error("密码校验失败"))
      }
      callback()
    }




    //data返回数据
    return {
      activeName: "login",
      LoginFrom: {
        username: '',
        password: ""
      },
      resigetForm: {
        username: '',
        password: '',
        email: '',
        checkpassword: ''
      },
      rules: {
        //使用用户名验证 失去焦点触发
        username: [{ validator: validateUserName, trigger: 'blur' }],
        email: [{ validator: validateEmail, trigger: 'blur' }],
        password: [{ validator: validatePassword, trigger: 'blur' }],
        checkpassword: [{ validator: validateResetpassword, trigger: 'blur' }]
      }
    }
  },
  //事件
  methods: {
    ...mapMutations("loginModule", ["UpdateUserName", "UpdateToken"]),
    handleClick(tab, event) {
    },
    LoginSubmitFrom(formName) {
      // 登录
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.login(
            {
              username: this.LoginFrom.username,
              password: this.LoginFrom.password
            }
          ).then(res => res.data).then(data => {
            //用户登录
            if (data.status == 200) {
              this.UpdateUserName(this.LoginFrom.username)
              this.UpdateToken(data.token)//存入vuex 
              // 存入本地
              let currindex = {
                token: data.token,
                username: jwt(data.token).username
              }
              localStorage.setItem("ego", JSON.stringify(currindex))
              this.UpdateUserName(jwt(data.token).username)
              this.$router.push("/")
              this.$message({
                type: 'success',
                message: '登录成功'
              })
            } else {
              this.$message({
                type: 'error',
                message: '登陆失败'
              })
            }

          })

        } else {
          console.log('error submit!!');
          return false;
        }
      }

      )
    },
    //注册
    resigetSubmitFrom(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.registe({
            username: this.resigetForm.username,
            password: this.resigetForm.password,
            email: this.resigetForm.email
          }).then(res => res.data).then(data => {
            if (data.status == 200) {
              this.$message({
                showClose: true,
                message: '注册成功',
                type: 'success'
              });
            } else {
              this.$message({
                showClose: true,
                message: '注册失败，用户名被占用',
                type: 'error'
              });
            }
          })
        }
      })
    }

  }
}
</script>

<style scoped>
.banner {
  font-size: 30px;
  margin-top: 100px;
  text-align: center;

}

.box-card {
  width: 600px;
  margin: 0 auto;
  margin-top: 20px;
}
</style>