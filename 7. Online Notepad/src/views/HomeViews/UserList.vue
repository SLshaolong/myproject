<template>
    <div class="box">
        <h1>列表数据</h1>
        <p class="ii" >{{listarr.length>0?"":"暂无数据,试试下方添加吧"}}</p>
        <div v-for="(item, index) in listarr" :key="index" class="father" @click="GoToDetails(item.cid)">
            <div class="left"><span>{{ item.time }}</span>
            </div>
            <div class="right">{{ item.title }}</div>
        </div>
        
        <div class="bottom">
            <div class="page">
                <van-pagination v-model="currentPage" :page-count="allpage" mode="simple" @change="ChangeIndex" />
            </div>
            <div class="btn">
                <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" to="/add">
                    添加笔记
                </van-button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'
import api from '../../api'
import { UserStore } from '../../store/index'
import { useRouter } from 'vue-router'
export default {
    setup() {
        let listarr = reactive([])
        let allpage = ref(0)
        let currentPage = ref(0)
        const store = UserStore()
        const router = useRouter()
        const http = (page) => {
            api.ListSelect({
                id: store.id,
                page
            }).then(res => res.data).then(data => {
                if (data.status == 200) {
                    listarr.push(...data.result)
                }
            })
            api.AllData({ id: store.id }).then(res => res.data).then(data => {
                if (data.status == 200) {
                    allpage.value = Math.ceil((data.result[0]["count(*)"]) / 10)
                }
            })

        };
        const GoToDetails = (cid) => {
            router.push({
                path: '/params/details/' + cid,
            })
        }
        const ChangeIndex = (e) => {
            console.log(e);
        }
        return {
            listarr,
            http,
            GoToDetails,
            currentPage,
            ChangeIndex,
            allpage
        }
    },
    mounted() {
        this.http(1)
    }
}
</script>

<style scoped lang="less">
.box {
    margin-top: 10px;
    box-sizing: border-box;
    color: #fff;
    box-shadow: 0 0 2px rgba(255, 255, 255, .4);
    position: relative;
    .ii{
        text-align: center;
        font-size: 20px;
        color: red;
    }
    h1 {
        font-size: 16px;
        text-align: center;
        padding: 5px;
    }

    .father {
        display: flex;
        width: 90%;
        margin: 0 auto;
        margin-top: 10px;
        border: 1px solid #f1f1f1;
        border-radius: 3px;
        height: 2.8em;

        .left {
            width: 35%;
            line-height: 2.8em;
            text-align: center;
            font-size: 12px;
            color: red;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .right {
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis; //文本溢出显示省略号
            white-space: nowrap; //文本不会换行
            line-height: 2.8em;
        }
    }

    .bottom {
        position: fixed;
        height: 40px;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f1f1f1b4;

        .page {

            width: 50%;
            float: left;
        }
        .btn{
            float: right;
        }
    }
}
</style>