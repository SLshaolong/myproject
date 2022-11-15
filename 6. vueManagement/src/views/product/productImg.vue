<template>
    <el-upload ref="upload" action="http://182.92.103.212:3030/api/upload" :on-success="handlePreview" :auto-upload="false" :file-list="fileList">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    </el-upload>

</template>

<script>
import api from '../../api/index'
export default {
    data() {
        return {
            action: api.updateImg,
            fileList:[]
            
        }
    },
    methods: {
        handlePreview(res,file) {
            this.$emit('uploadImg',res)
        }, submitUpload() {
            this.$refs.upload.submit();
        }
    }
}
</script>

<style>

</style>