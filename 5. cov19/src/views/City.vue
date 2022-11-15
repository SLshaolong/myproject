<template>
    <div>
        <div class="header">
            <i @click="backHome">back</i>
            <h3>省份疫情数据展示</h3>
            <p>{{this.cityName}}</p>
        </div>
        <div class="city" id="city">

        </div>
    </div>
</template>

<script>
import api from '../api/index'
import Vue from 'vue'
export default {
    name: 'City',
    props: {
        cityName: {
            default: 'beijing',
            type: String
        }
    },
    mounted() {
        api.getNcov19().then(res => res.data.areaTree[2].children).then(data => {
            const arr = [];
            for (let i = 0; i < data.length; i++) {
                arr.push(data[i].name)
            }
            const value = arr.indexOf(this.cityName)
            return data[value].children

        }).then(info=>{
            const allinfo=[]
            for(let i=0;i<info.length;i++)
            {
                let dirt={}
                dirt.name=info[i].name
                dirt.value=info[i].today.confirm
                allinfo.push(dirt)
            }
            Vue.nextTick(()=>{
                this.$charts.provideMap("city", allinfo, this.cityName)

            })
        })

    },methods:{
        backHome(){
            this.$router.back()
        }
    }
}

</script>

<style scoped lang="less">

    .city {
    width: 100%;
    height: 500px;
    
}
.header{
    padding: 1rem;
    background: #08e1de;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    border-bottom: 1px solid #f1f1f1;
    i{
        position:absolute;
        color:red;
        font-size: 0.5rem;
        top: 50%;
        transform: translateY(5-50%);
        
    }
    h3{
        text-align: center;
        font-size: 1.5rem;
        color:#333;

    }
    p{
        text-align: right;
        font-size: 0.75rem;
        color: green;
        
    }
}

</style>