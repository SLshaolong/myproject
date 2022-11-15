<template>
    <div>
        <div class="container" @click="backTo">
            <p>{{ from.text }}</p>------
            <p>{{ to.text }}</p>
        </div>
        <div class="cont">
            <h1>出发地政策</h1>
            <div class="from">
                <p>{{fromhigh_in_desc?fromhigh_in_desc:''}}</p>
            <p>{{fromlow_in_desc?fromlow_in_desc:''}}</p>
            <p>{{fromout_desc?fromout_desc:''}}</p>
            </div>
            <h1>目的地政策</h1>
            <div class="to">
                <p>{{tohigh_in_desc?tohigh_in_desc:''}}</p>
            <p>{{tolow_in_desc?tolow_in_desc:''}}</p>
            <p>{{toout_desc?toout_desc:''}}</p>
            </div>
        </div>
        <div class="content">
            <h3>小编提醒</h3>
            <ul>
                <li>
                    避免拥挤场所以及通风条件差的密闭场所
                </li>
                <li>在公共场所尽量与他人保持至少一米的距离</li>
                <li>在2022冠状病毒病广泛传播且无法保持足够身体距离的公共场所，应佩戴口罩 ...</li>
                <li>经常用肥皂和水洗手或使用含酒精的免洗洗手液 ...</li>
                <li>
                    避免触摸面部(眼部、口鼻)
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
import api from '../api/index'
export default {
    data() {
        return {
            fromhigh_in_desc:'1',
            fromlow_in_desc:'1',
            fromout_desc:'1',
            tohigh_in_desc:'1',
            tolow_in_desc:'1',
            toout_desc:'1'
        }
    },
    props: {
        from: {
            default: '出发地'
        },
        to: {
            default: '目标地点'
        }
    },
    mounted() {
        api.getcityinfo(this.$props.from.value,this.$props.to.value).then(res=>{
            console.log(res.result.from_info);
            console.log(res.result.to_info);
            this.fromhigh_in_desc=res.result.from_info.high_in_desc
            this.fromlow_in_desc=res.result.from_info.low_in_desc
            this.fromout_desc=res.result.from_info.out_desc


            this.tohigh_in_desc=res.result.to_info.high_in_desc
            this.tolow_in_desc=res.result.to_info.low_in_desc
            this.toout_desc=res.result.to_info.out_desc
        })
    },methods:{
        backTo(){
            this.$router.back()
        }
    }
}
</script>

<style scoped lang="less">
div {
    padding: 1rem;
    box-sizing: border-box;

    h3 {
        font-size: 1.75rem;
        text-align: center;

    }

    .container {
        background: rgba(0, 0, 200, .3);
        display: flex;
        justify-content: space-between;

        p:nth-child(1) {
            color: red;
        }

        p:nth-child(2) {
            color: green;
        }
    }

    .content {
        background: rgba(60, 60, 0, 0.3);
        margin-top: 0.5rem;

        h3 {
            color: #333;
            font-size: 1rem;
            text-align: center;
            margin-bottom: 1.5rem;
        }

        ul {
            margin-top: 10px;

            li {
                list-style: none;
                margin: 10px;
            }
        }
    }
    .cont{
        box-sizing: border-box;
        h1{
            font-size: 20px;
            text-align: center;
            padding: 10px;
        }
        .from{
            padding: 0.5rem;
            font-size: 0.75rem;
            color: #333;
            background: #f1f1f1;
            p{
                line-height: 1.5rem;
                line-break: auto;
            }
        }
        .to{
            padding: 0.5rem;
            font-size: 0.75rem;
            color: rgb(35, 66, 181);
            background: #b0e5a3;
            p{
                line-height: 1.5rem;
                line-break: auto;
            }
        }
    }
}
</style>