<template>
    <div class="chart">
        <h3 class="title">全国疫情数据</h3>
        <template>
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(item, index) in imgarr" :key="index" style="width: 100%;"><img :src="item.image"
                        alt=""></swiper-slide>
            </swiper>
            <ul class="navigator">
                <li v-for="(item, index) in imgarr" :key="index" :class="{ navigatorItem: true, active: index == currtIndex }"
               @click="clickHandle(index)"  >{{ item.title }}</li>
            </ul>
        </template>
    </div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
import api from '../api/index'
export default {
    data() {
        const that = this
        return {
            imgarr: [],
            currtIndex: 0,
            swiperOption: {
                on: {
                    slideChangeTransitionEnd: function () {
                        that.currtIndex = this.activeIndex
                    }
                }

            }
        }
    },

    mounted() {
        api.getline().then(res => {
            this.imgarr = res.result
        })
    }
    , methods: {
       clickHandle(index){
       this.swiper.slideTo(index,1000,false)
       this.currtIndex=index
       }
    },
    computed:{
        swiper(){
            return this.$refs.mySwiper.$swiper
        }
    }
}
</script>

<style scoped lang="less">
.chart{
    box-sizing: border-box;
    padding: 1rem;
    .title{
        font-size: 20px;
        text-align: center;
        text-shadow: 0 0 2px rgba(0, 0, 0, .3);
    }
}
img {
    width: 100% !important;
}

.swiper-slide {
    width: 100% !important;
}

.swiper-wrapper {
    display: flex;
    width: 100px;
}

.navigator {
    display: flex;
    justify-content: space-around;
    padding: 0.8rem;

    .navigatorItem {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 18%;
        padding: 0.2rem 0;
        border: 1px solid #f1f1f1;
        font-size: 0.75rem;
        text-align: center;
        background: #f1f1f1;

    }

    .active {
        color: blue;
        background: rgba(62, 154, 211, .1);
    }
}
</style>