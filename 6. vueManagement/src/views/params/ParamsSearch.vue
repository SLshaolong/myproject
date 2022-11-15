<template>
    <div class="form">
        <el-form @submit.native.prevent>
            <el-input v-model="input" @keydown.enter.native="SearchInfo"></el-input>
            <el-button type="primary" round @click="SearchInfo">搜索</el-button>
            <el-button type="primary" round @click="openAddDilalog">添加</el-button>
        </el-form>
    </div>
</template>

<script>
import api from '../../api/index'
export default {
    data() {
        return {
            input: ''
        }
    },
    methods: {
        SearchInfo() {
            api.GetSelectParams({
                search: this.input
            }).then(res => res.data).then(data => {
                this.$store.commit("ParamsModule/ChangeData", data.result)
            })
        }, openAddDilalog() {
            this.$bus.$emit("openDialog",true)
        }
    }
}
</script>

<style scoped lang="less">
form {
    margin-bottom: 20px;
}

.el-form {
    display: flex;

    .el-input {
        margin-right: 20px;
    }
}
</style>