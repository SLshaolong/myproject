<template>
  <div class="head">
        <el-form ref="searchFrom" :model="search" @submit.native.prevent>
            <el-form-item>
                <el-input v-model="search.content" @keyup.enter.native="OnSubSearch">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="OnSubSearch">
                    {{$t('message.select')}}
                </el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="addProductHandle">
                    {{$t('message.add')}}
                </el-button>
            </el-form-item>
        </el-form>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    data(){
        return{
            search:{
                content:''
            }
        }
    },
    methods:{
        ...mapMutations("productModule",["setSearch"]),
        OnSubSearch(){
            this.setSearch(this.search.content)
        },
        addProductHandle(){
            this.$bus.$emit("msg",true)
        }
    }

}
</script>

<style scoped lang="less">
.el-form{
    overflow: hidden;
    clear:both;
    display: flex;
    
    .el-form-item{
        float: left;
        margin-right: 10px;
        .el-input{
            width: 1100px;
        }
    }
}
.head{
    margin-top: 20px;
    width: 100%;
}

</style>