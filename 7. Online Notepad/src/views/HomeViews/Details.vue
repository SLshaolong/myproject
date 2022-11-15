<template>
    <div class="header" @click="BackHome">
        <van-icon name="arrow-left" /><span>返回目录页</span>
    </div>
    <div class="box">
        <van-cell-group title="创建时间">
            <van-cell :value="time" />
        </van-cell-group>
        <van-cell-group title="标题">
            <van-cell :value="title" />
        </van-cell-group>
        <van-cell-group title="描述">
            <van-cell :value="desc" />
        </van-cell-group>
    </div>

    <div class="btn" @click="DeleteHandle">
        <van-button icon="delete-o" round type="danger"></van-button>

    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import api from '../../api'
import { UserStore } from '../../store/index'
import { Toast } from 'vant';
import 'vant/es/toast/style';
export default {
    props: {
        cid: String
    },
    setup(props, ctx) {
        let time = ref("创建时间")
        const store = UserStore()
        let title = ref("标题")
        let desc = ref("描述")
        const cid = props.cid;
        const router = useRouter()
        const BackHome = () => {
            router.push('/params/home')
        }
        const getInfo = () => {
            api.Details({ cid: cid }).then(res => res.data).then(data => {
                if (data.status == 200) {
                    time.value = data.result[0].time;
                    title.value = data.result[0].title;
                    desc.value = data.result[0].desc
                }
            })
        }
        getInfo()
        const DeleteHandle = () => {
            api.Delete({
                id: store.id,
                cid: cid
            }).then(res => res.data).then(data => {
                if (data.status == 200) {
                    Toast.success("删除成功")
                    router.push({
                        name:'Home'
                    })
                } else {
                    Toast.fail("删除失败")
                }
            })
        }

        return {
            BackHome,
            time,
            title, desc, DeleteHandle

        }
    }
}
</script>

<style scoped lang="less">
.header {
    color: #fff;
    height: 30px;
    display: inline-block;
    margin-bottom: 30px;

    .van-icon {
        margin-left: 20px;
        line-height: 30px;
        font-size: 18px;
    }

    span {
        line-height: 30px;
        margin-left: 30px;
    }
}

.box {
    width: 90%;
    margin: 0 auto;

}

.btn {
    position: absolute;
    right: 30px;
    margin-top: 20px;
}
</style>