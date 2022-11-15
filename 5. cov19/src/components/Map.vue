<template>
    <div class="container">
        <p class="title">
            <i></i>疫情地图
        </p>
        <tabs :currentIndex='currentIndex' @getindex="IndexHnadele" >
            <tab index="1" label="中国地图">
                <div id="map" class="map">

                </div>
            </tab>
            <tab index="2" label="世界地图">
                <div id="worldmap" class="mapworld">
                    <!-- <h3>数据缺失</h3> -->
                </div>
            </tab>
        </tabs>

        <div class="desc">
            此数据更新来自于网易
        </div>
    </div>
</template>

<script>
import api from '../api/index'
export default {
    data() {
        return {
            currentIndex: "1"
        }
    },
    methods: {
        IndexHnadele(index) {
            this.currentIndex = index
        }
    },
    mounted() {
        api.getNcov19().then(res => res.data.areaTree[2].children).then(data => {
            const appid = []
            for (let i = 0; i < data.length; i++) {
                const appdir = {}
                appdir.name = `${data[i].name}`
                appdir.value = data[i].today.confirm
                appid.push(appdir)
            }
            this.$charts.chinaMap("map", appid)
            
           
        })

    },

}
</script>

<style scoped lang="less">

.map {
    width: 100%;
    height: 400px;

}

#worldmap{
    width: 100%;
    height: 400px;
}

.container {
    .title {
        font-size: 1.2rem;

        i {
            display: inline-block;
            width: 0.2rem;
            height: 1rem;
            margin-right: 0.2rem;
            margin-top: 0.04rem;
            background: #4169e2;
        }
    }

    padding: 0.5rem;
    ;
    border-top: 1px solid #f1f1f1;
}

.desc {
    font-size: .75rem;
    margin: 5px;
    border: 1px solid #f1f1f1;
    padding: 5px;
    text-align: center;
    box-shadow: 0 0 1.5px rgba(0, 0, 0, .3);
    background: rgb(245, 207, 135);
}
</style>