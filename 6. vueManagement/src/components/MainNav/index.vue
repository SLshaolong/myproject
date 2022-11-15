<template>
    <div>
        <div class="header">
            <div class="login">
                <el-dropdown class="lang" @command="ChangeLangula">
                    <span class="el-dropdown-link">
                        切换语言<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="zh">中文</el-dropdown-item>
                        <el-dropdown-item command="en">英文</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-badge :value="12" class="item">
                    <i class="el-icon-message-solid"></i>
                </el-badge>
                <span class="user-name">{{ username }}</span>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        {{$t("message.ucenter")}}
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <router-link to="/user" tag="span">
                                {{$t("message.ucenter")}}
                            </router-link>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div @click="lgout">{{$t("message.exit")}}</div>
                        </el-dropdown-item>

                    </el-dropdown-menu>

                </el-dropdown>

            </div>
        </div>

        <el-menu :default-active="currentIndex" class="el-menu-vertical-demo" background-color="#545c64"
            text-color="#fff" active-text-color="#ffd04b" router>
            <el-menu-item index="/product">
                <i class="el-icon-s-cooperation"></i>
                <span>{{ $t("message.project") }}</span>

            </el-menu-item>
            <el-menu-item index="/params">
                <i class="el-icon-info"></i>
                <span>{{ $t("message.params") }}</span>
            </el-menu-item>
            <el-menu-item index="/content">
                <i class="el-icon-edit-outline"></i>
                <span>{{ $t("message.content") }}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            currentIndex: '/product',
            username: ''
        }
    },
    mounted() {
        this.username = this.$store.state.loginModule.username
        this.currentIndex=this.$route.path
    },
    methods: {
        ...mapMutations("loginModule", ["clearToken", 'clearUserName']),
        lgout() {
            window.localStorage.removeItem('ego')
            this.clearToken()
            this.clearUserName()
            this.$router.push("/login")
        }, ChangeLangula(lang) {
           this.$i18n.locale = lang
        }
    }
}
</script>

<style scoped>
.el-menu-vertical-demo {
    width: 200px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;

}

.lang {
    margin-right: 10px;
}

.header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #fff;
    box-shadow: 0px 0px 5px 1px #999;
}

.header .user-name {
    color: #fff;
    margin-right: 10px;
    font-size: 12px;
    border: 1px solid #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: inline-block;
    line-height: 40px;
    background: rgb(26, 115, 232);
    text-align: center;
}

.header .login {
    height: 50px;
    float: right;
    margin-right: 20px;
}

.header .login .item {
    height: 25px;
    margin-right: 30px;

}

.header .login .item i {
    display: block;
    font-size: 25px;
}
</style>