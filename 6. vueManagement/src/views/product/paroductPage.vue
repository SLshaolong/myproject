<template>
    <div class="page">
        <el-pagination @current-change="changePage" background layout="prev, pager, next" :total="num">
        </el-pagination>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import api from '../../api/index'
export default {
    data() {
        return {
            num:10
        }
    },
    methods: {
        ...mapMutations("productModule", ['setpage']),
        changePage(val) {
            // this.$bus.$emit("onPage",val)
            this.setpage(val)
        }
    },
    mounted(){
        api.total().then(res=>res.data).then(data=>{
            if(data.status==200)
            {
                this.num=data.num
            }else{
                this.num=10
            }
        })
    }
}
</script>

<style scoped>
.page {
    text-align: center;
    margin-top: 30px;
}
</style>