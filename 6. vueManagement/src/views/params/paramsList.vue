<template>
    <div>
        <el-table :data="ListData">
            <el-table-column prop="id" label="规格参数ID" width="100"></el-table-column>
            <el-table-column prop="itemCatild" label="产品关联ID" width="100"></el-table-column>
            <el-table-column prop="paramData" label="规格参数" show-overflow-tooltip></el-table-column>
            <el-table-column label="删除" width="80" style="margin-left=20px">
                <template slot-scope="scope">
                    <el-button type="danger" icon="el-icon-delete" circle @click="Deleterow(scope.row)" size="small"></el-button>
                </template>
            </el-table-column>

        </el-table>
        <el-pagination class="table" background layout="prev, pager, next" :total="alldata" @current-change="ClickChnageHandle">
        </el-pagination>
    </div>

</template>

<script>
import api from '../../api/index'
import { mapState } from 'vuex'
export default {
    data() {
        return {
            ListData: [{}],
            alldata:0
        }
    },
    computed: {
        ...mapState("ParamsModule", ["DataChange", "flag"]),
        ResetDataChange() {
            return this.DataChange
        },
        FlagChanges() {
            return this.flag
        }
    },
    watch: {

        ResetDataChange(newVal, OldVal) {
            if (newVal == OldVal) {

            } else {
                this.ListData = newVal
            }
        },
        FlagChanges(newVal) {
            if (newVal == true) { this.httpreq(1) }
            this.$store.commit("ParamsModule/ChangeFlag", false)
        }

    }, methods: {
        httpreq(params) {
            api.GetparamsList({
                page: params
            }).then(res => res.data).then(data => {
                if (data.status == 200) {
                    this.ListData = data.result
                }
            })
        },
        Deleterow(data) {
            api.DeleteParams({
                id:data.id
            }).then(res=>res.data).then(data=>{
                if(data.status==200)
                {
                    this.$message({
                        type:'success',
                        message:'删除成功'
                    })
                    this.httpreq(1)
                }else{
                    this.$message({
                        type:'error',
                        message:'删除失败'
                    })
                }
            })
        },
        ClickChnageHandle(data){
           this.httpreq(data)
        }
    },
    mounted() {
        this.httpreq(1),
        api.SelectParamsAll().then(res=>res.data).then(data=>{
            // this.alldata=data
            this.alldata=data.result[0]["count(*)"]
        })
    },
}
</script>

<style scoped >
.table{
    text-align: center;
    margin-top: 10px;
}
</style>