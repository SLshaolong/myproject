<template>
    <div class="content">
        <h3 class="title">疫情出行防疫政策</h3>
        <cascder label="出发城市" :options="options" @onValue="getfrom" />
        <cascder label="到达城市" :options="options" @onValue="beforeto" />
        <van-button type="info" block @click="nextray">查看政策</van-button>
    </div>
</template>

<script>
import cascder from '../views/Cascader.vue';
import citys from '../plugins/citys'
export default {
    components: {
        cascder
    },
    data() {
        return {
            options: [],
            fr: '',
            toto: ''
        }
    },
    mounted() {
        const cityss = []
        for (let i = 0; i < citys.length; i++) {
            let dirt = {}
            dirt.text = citys[i].province
            dirt.value = citys[i].province_id
            dirt['children'] = []

            for (let j = 0; j < citys[i].citys.length; j++) {
                let dict = {}
                dict.text = citys[i].citys[j].city
                dict.value = citys[i].citys[j].city_id
                dirt.children.push(dict)
            }
            cityss.push(dirt)

        }
        this.options = cityss
    },
    methods: {
        getfrom(from) {
            this.fr = from
        },

        beforeto(to) {
            this.toto = to
        }, nextray() {
            this.$router.push({
                name: 'Gselect',
                params: {
                    from: this.fr,
                    to: this.toto
                }
            })
        }
    }
}
</script>

<style scoped lang="less">
.content {
    width: 100%;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;

    .title {
        font-size: 1rem;
        margin: 0 0 0.5rem 1rem;
    }
}
</style>