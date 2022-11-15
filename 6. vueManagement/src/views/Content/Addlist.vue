<template>
    <el-dialog title="添加组件" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
        
        <el-form :model="addFrom" label-width="80px">
            <el-form-item  label="name">
                <el-input v-model="addFrom.name"></el-input>
            </el-form-item>
            <el-form-item  label="url">
                <el-input v-model="addFrom.url"></el-input>
            </el-form-item>
            <el-form-item  label="image">
                <el-input v-model="addFrom.image"></el-input>
            </el-form-item>
        </el-form>




        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click=addClickHandle>确 定</el-button>
        </span>
    </el-dialog>

</template>

<script>
import api from '../../api/index'
export default {
    data() {
        return {
            dialogVisible: false,
            addFrom:{},
            pid:''

        };
    },
    methods: {
        handleClose(done) {
            done();
        },
        addClickHandle(){
            api.addlist({
                pid:this.pid,
                name:this.addFrom.name,
                urls:this.addFrom.url,
                image:this.addFrom.image,
            }).then(res=>res.data).then(data=>{
                if(data.status==200){
                    this.$message({
                        type:'success',
                        message:'添加成功'
                    })
                    this.dialogVisible=false
                
                }else{
                    this.$message({
                        type:'error',
                        message:'添加失败'
                    })
                }
            })
        }
    },
    mounted(){
        this.$bus.$on("showTot",res=>{
            this.dialogVisible=res[1]
           this.pid=res[0]
        })
    }

}
</script>

<style>

</style>