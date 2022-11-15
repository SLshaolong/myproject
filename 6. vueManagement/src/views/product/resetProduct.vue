<template>
    <div>
        <el-dialog title="商品修改" :visible.sync="selectVisible" width="70%" :before-close="handleClose">
            <!-- 表单 -->
            <el-form label-width="70px" :model="addFrom" ref="addFrom">
                <el-form-item label="商品类目">
                    <el-button class="category" type="primary" @click="selectshowHandle">类目选择</el-button>
                    <span>{{ TreeData.name }}</span>
                    <el-dialog title="类目选择" :visible.sync="selectshow" width="50%" :before-close="dialogClose"
                        append-to-body>

                        <productTree @ontree='treedata' />

                        <span slot="footer" class="dialog-footer">
                            <el-button @click="selectshow = false">取 消</el-button>
                            <el-button type="primary" @click="selectshow = false">确 定</el-button>
                        </span>
                    </el-dialog>
                </el-form-item>
                <el-form-item label="商品名称">
                    <el-input v-model="addFrom.title"></el-input>
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
                    <wangEditor @wangEdi='infoChange' :msg='msg' />
                </el-form-item>

            </el-form>


            <!-- 关闭操作 -->
            <span slot="footer" class="dialog-footer">
                <el-button @click="selectVisible = false">取 消</el-button>
                <el-button type="primary" @click="changeHandle">确 定</el-button>
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
            selectVisible: false,
            selectshow: false,
            addFrom: {},
            imgShow: false,
            TreeData: {
                name: ''
            },
            imgShowData: {
                url: ''
            },
            editInfo: '',
            msg: ''
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
        selectshowHandle() {
            this.selectshow = true
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
        changeHandle() {
            api.ProductReset({
                id: this.addFrom.id,
                title: this.addFrom.title,
                image: this.imgShowData.url,
                sellPoint: this.addFrom.sellPoint,
                price: this.addFrom.price,
                num: this.addFrom.num,
                desc: this.editInfo,
                cid: this.addFrom.cid
            }).then(res => res.data).then(data => {
                if (data.status == 200) {
                    this.selectVisible = false
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    });
                    this.$emit("reslovehttp",true)
                } else {
                    this.$message({
                    message: '修改失败',
                    type: 'error'
                });
                 }
               
            })

        }, ImgUpLoad(data) {
            if (data.url) {
                data.url = data.url.replace("upload", base.baseUrl)
            }
            this.imgShowData = data
        }, infoChange(data) {
            this.editInfo = data
        }, resetFrom() {
            this.addFrom = {}
        }
    }
    , mounted() {
        this.$bus.$on("showSele", res => {
            this.selectVisible = true
            api.resetSelect({ id: res.id }).then(res => res.data).then(data => {
                if (data.status == 200) {
                    this.addFrom = data.result[0]
                    this.TreeData.name = data.result[0].cid
                    this.imgShowData.url = data.result[0].image
                    this.msg = data.result[0].desc
                }
            })
        })

    }
}
</script>

<style>

</style>