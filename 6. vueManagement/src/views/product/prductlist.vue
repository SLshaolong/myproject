<template>
    <div>
        <el-table :data='tableDate' style="width: 100%;">
            <el-table-column prop="id" label="商品ID" show-overflow-tooltip width="80">
            </el-table-column>
            <el-table-column prop="title" label="商品标题" show-overflow-tooltip width="150">
            </el-table-column>
            <el-table-column prop="image" label="商品图片" show-overflow-tooltip width="100">
                <template slot-scope="scope">
                    <a :href="scope.row.image" target='_blank'>
                        <img :src="scope.row.image" alt="">
                    </a>

                </template>
            </el-table-column>
            <el-table-column prop="sellPoint" label="商品卖点" show-overflow-tooltip width="200">
            </el-table-column>
            <el-table-column prop="price" label="商品价格" show-overflow-tooltip width="80">
            </el-table-column>
            <el-table-column prop="num" label="商品数量" show-overflow-tooltip width="80">
            </el-table-column>
            <el-table-column prop="desc" label="商品描述" show-overflow-tooltip>
                <template slot-scope="scope">
                    <div v-html="scope.row.desc"></div>
                </template>
            </el-table-column>
            <el-table-column prop="id" label="按钮操作" show-overflow-tooltip width="120">
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" circle @click="resetHandle(scope.row)"></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle @click="delectHandle(scope)"></el-button>
                </template>

            </el-table-column>
        </el-table>
        <resetProductVue @reslovehttp="resethttp"/>
    </div>
</template>

<script>
import api from '../../api/index'
import { mapState } from 'vuex'
import resetProductVue from './resetProduct.vue'
export default {
    data() {
        return {
            tableDate: []
        }
    }, components: {
        resetProductVue
    },
    mounted() {

        this.http(1)
        // this.$bus.$on('onPage', (res) => {
        //     api.productlist({
        //         page: res
        //     }).then(res => res.data).then(data => {
        //         this.tableDate = data.result
        //     })
        // })

    },
    computed: {
        ...mapState("productModule", ['page', 'search', 'product']),
        pageChange() {
            return this.page
        },
        searchChange() {
            return this.search
        },
        productChange() {
            return this.product
        }

    },
    watch: {
        pageChange(newVal, oldVal) {
            if (newVal == oldVal) { }
            else {
                this.http(newVal)
            }
        },
        searchChange(newVal, oldVal) {
            api.search({ search: newVal }).then(res => res.data).then(data => {
                this.tableDate = data.result
            })
        },
        productChange(newVal) {
            console.log(newVal);
            if (newVal == "") { } else {
                this.tableDate.unshift(newVal)

            }
        }
    },
    methods: {

        http(page) {
            api.productlist({ page }).then(res => res.data).then(data => {
                this.tableDate = data.result
            })
        },
        delectHandle(data) {
            api.delectProduct({
                id: data.row.id
            }).then(res => res.data).then(data => {
                if (data.status == 200) {
                    this.tableDate.shift()
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    });
                } else {
                    this.$message({
                        message: '删除失败',
                        type: 'success'
                    });
                }
            })
        },
        resetHandle(row){
            // console.log(row);
            this.$bus.$emit("showSele",row)
        },resethttp(){
            this.http(1)
        }
    }

}
</script>

<style scoped>
img {
    width: 50%;
    margin: 0 auto;
    height: 30px;
}
</style>