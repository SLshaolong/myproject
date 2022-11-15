<template>
    <div class="info">
        <p class="title">
            <i></i>
            病毒信息
        </p>
        <div class="content">
            <li v-for="(item,index) in Ncovinfo" :key="index">{{item}}</li>
        </div>
    </div>
</template>

<script>
import api from '../api/index'
export default {
    data() {
        return {
            Ncovinfo: {
                info: '',info1:"", info2: '', info3: ''
            }
        }
    },
    mounted() {
        api.getNcov().then(res => {
            this.Ncovinfo.info = res.data.info
            this.Ncovinfo.info1 = res.data.info1
            this.Ncovinfo.info2 = res.data.info2
            this.Ncovinfo.info3 = res.data.info3
        })
    }
}
</script>

<style scoped lang="less">
.info {
    padding: 0.5rem;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;

    .title {
        font-size: 1.2rem;

        i {
            display: inline-block;
            width: 0.2rem;
            height: 1rem;
            margin-right: 0.03rem;
            margin-top: 0.04rem;
            background: #4169e2;
        }
    }

    .content {
        padding: 6px 1rem;

        li {
            font-size: 13px;
            margin: 5px 0;
        }
    }
}
</style>