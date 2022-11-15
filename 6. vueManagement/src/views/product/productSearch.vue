<template>
    <div>
        <el-dialog title="商品添加" :visible.sync="dialogVisible" width="70%" :before-close="handleClose" @open="resetFrom">
            <!-- 表单 -->
            <el-form label-width="70px" :model="addFrom" ref="addFrom" >
                <el-form-item label="商品类目">
                    <el-button class="category" type="primary" @click="dialogShow">类目选择</el-button>
                    <span>{{ TreeData.name }}</span>
                    <el-dialog title="类目选择" :visible.sync="dialogshow" width="50%" :before-close="dialogClose"
                        append-to-body>

                        <productTree @ontree='treedata' />

                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogshow = false">取 消</el-button>
                            <el-button type="primary" @click="dialogshow = false">确 定</el-button>
                        </span>
                    </el-dialog>
                </el-form-item>
                <el-form-item label="商品名称">
                    <el-input v-model="addFrom.name"></el-input>
                </el-form-item>
                <el-form-item label="商品卖点">
                    <el-input v-model="addFrom.sellPoint"></el-input>
                </el-form-item>
                <el-form-item label="商品价格">
                    <el-input v-model="addFrom.price"></el-input>
                </el-form-item>
                <el-form-item label="商品数量">
                    <el-input v-model="addFrom.num"></el-input>
                </el-form-item>
                <el-form-item label="上传图片">

                    <el-button type="primary" @click="imgShowHandle">上传图片</el-button> <span>{{ imgShowData.url }}</span>
                    <el-dialog title="上传图片" :visible.sync="imgShow" width="50%" :before-close="imgClose" append-to-body>

                        <productImgVue @uploadImg="ImgUpLoad" />

                        <span slot="footer" class="dialog-footer">
                            <el-button @click="imgShow = false">取 消</el-button>
                            <el-button type="primary" @click="imgShow = false">确 定</el-button>
                        </span>
                    </el-dialog>
                </el-form-item>
                <el-form-item label="商品描述">
                    <!-- <BaiduUEditorVue/> -->
                    <wangEditor @wangEdi='infoChange' />
                </el-form-item>

            </el-form>


            <!-- 关闭操作 -->
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addHandle">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import productTree from './productTree.vue'
import productImgVue from './productImg.vue';
// import BaiduUEditorVue from './BaiduUEditor.vue';
import wangEditor from './wangEditor.vue'
import base from '../../api/base';
import api from '../../api/index'
export default {
    data() {
        return {
            dialogVisible: false,
            dialogshow: false,
            addFrom: {},
            imgShow: false,
            TreeData: '',
            imgShowData: {},
            editInfo: '',
            msg:''
        }
    },
    components: {
        productTree,
        productImgVue,
        wangEditor,
        // BaiduUEditorVue
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        dialogClose(done) {
            done()
        },
        dialogShow() {
            this.dialogshow = true
        },
        imgClose(done) {
            done()
        },
        imgShowHandle() {
            this.imgShow = true
        },
        treedata(data) {
            console.log(data);
            this.TreeData = data
        },
        addHandle() {
            if (this.addFrom.name && this.addFrom.sellPoint && this.addFrom.price && this.addFrom.num && this.editInfo && this.TreeData.cid) {
                api.setProduct({
                    title: this.addFrom.name,
                    sellPoint: this.addFrom.sellPoint,
                    price: this.addFrom.price,
                    num: this.addFrom.num,
                    desc: this.editInfo,
                    image: this.imgShowData.url,
                    cid: this.TreeData.cid

                }).then(res => {
                    if (res.data.status == 200) {
                        this.$message({
                            message: '添加成功',
                            type: 'success'
                        });
                        this.$store.commit('productModule/setProduct', {
                            title: this.addFrom.name,
                            sellPoint: this.addFrom.sellPoint,
                            price: this.addFrom.price,
                            num: this.addFrom.num,
                            desc: this.editInfo,
                            image: this.imgShowData.url,
                            cid: this.TreeData.cid,
                            id:res.data.id
                        })
                    } else {
                        this.$message({
                            message: '添加失败',
                            type: 'error'
                        });
                    }
                })

            } else {
                this.$message({
                    message: '请确保每一项不为空',
                    type: 'warning'
                });
            }
            this.dialogVisible = false

        }, ImgUpLoad(data) {
            if (data.url) {
                data.url = data.url.replace("upload", base.baseUrl)
            }
            this.imgShowData = data
        }, infoChange(data) {
            this.editInfo = data
        },resetFrom(){
            this.addFrom={}
        }
    }
    , mounted() {
        this.$bus.$on("msg", res => { this.dialogVisible = res })

    }
}
</script>

<style>

</style>