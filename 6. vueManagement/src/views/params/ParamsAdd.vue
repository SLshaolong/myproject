<template>
    <el-dialog title="提示" :visible.sync="DialogFather" width="70%" :before-close="handleClose">

        <el-form :model="FormAdd" label-width="150px">
            <el-form-item label="产品关联ID">
                <el-input v-model="FormAdd.itemCatild"></el-input>
            </el-form-item>
            <el-form-item label="分类">
                <el-input v-model="FormAdd.paramData[0].value"></el-input>
            </el-form-item>
            <el-form-item v-for="(item, index) in FormAdd.paramData[1].children" :key="index" :label="item.key">
                <el-input v-model="FormAdd.paramData[1].children[item.key]"></el-input>
            </el-form-item>
            <el-button @click="PushNewFrom">新增</el-button>
            <el-input v-model="values" style="width:100px;margin-left: 20px;"></el-input>
        </el-form>






        <span slot="footer" class="dialog-footer">
            <el-button @click="DialogFather = false">取 消</el-button>
            <el-button type="primary" @click="addFrom">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import api from '../../api/index'
export default {
    data() {
        return {
            DialogFather: false,
            FormAdd: {
                paramData: [{}, { children: [] }]
            },
            values: ''
        };
    },
    methods: {
        handleClose(done) {
            done();
        }, addFrom() {
            let arr = [];
            for (let i = 0; i < this.FormAdd.paramData[1].children.length; i++) {
                let msg = {}
                msg[this.FormAdd.paramData[1].children[i].key] = this.FormAdd.paramData[1].children[this.FormAdd.paramData[1].children[i].key],
                    arr.push(msg)
            }
            let paramData = [
                { "value": this.FormAdd.paramData[0].value },
                { "children": arr }
            ]
            paramData = JSON.stringify(paramData)

            api.AddParams({
                itemCatild: this.FormAdd.itemCatild,
                paramData
            }).then(res => res.data).then(data => {
                if (data.status == 200) {
                    this.DialogFather = false
                    this.$message({
                        type: 'success',
                        message: '添加成功'
                    })
                    this.$store.commit("ParamsModule/ChangeFlag",true)

                } else {
                    this.$message({
                        type: 'error',
                        message: '添加失败'
                    })
                }
            })
        }, PushNewFrom() {
            this.FormAdd.paramData[1].children.push({
                value: '',
                key: this.values || "key"
            });
            this.values=""
        }
    },
    mounted() {
        this.$bus.$on("openDialog", res => this.DialogFather = res)
    },

}
</script>

<style>

</style>