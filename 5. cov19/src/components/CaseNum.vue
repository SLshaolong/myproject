<template>
    <div class="case-num">
        <div class="container">
            <div class="title">
                <span>截至 {{getnowDate()}} 全国数据统计 </span>
            </div>
            <div class="num">
                <ul>
                    <li v-for="(item,index) in alldatas" :key="index" >

                        <div class="i-title">
                            较昨日<span :class="item.activeclass">{{item.up>0?'+'+item.up:item.up}}</span>
                        </div>
                        <div :class="item.activeclass" class="NUM">
                            {{item.middle}}
                        </div>
                        <div class="now">{{item.title}}</div>

                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../api/index'
export default {
    data() {
        return {
            alldatas: [
                {
                    up: "",
                    middle: '',
                    title: '现存确诊',
                    activeclass: 'color1'
                }, {
                    title: '累计确诊',
                    activeclass: 'color2'
                }, {
                    title: '累计境外输入',
                    activeclass: 'color3'
                }, {
                    title: '累计治愈',
                    activeclass: 'color4'
                }, {
                    title: '累计死亡',
                    activeclass: 'color5'
                }, {
                    title: '现存无症状',
                    activeclass: 'color6'
                }
            ]
        }
    },
    mounted() {
        api.getNcov2({
            key: 'fb54463a34c6c9787a92613aae19641d'
        }).then(res => {
            this.alldatas[0].up = res.newslist[0].desc.currentConfirmedIncr
            this.alldatas[0].middle = res.newslist[0].desc.currentConfirmedCount
            this.alldatas[1].middle = res.newslist[0].desc.confirmedCount
            this.alldatas[1].up = res.newslist[0].desc.confirmedIncr
            this.alldatas[2].middle = res.newslist[0].desc.suspectedCount
            this.alldatas[2].up = res.newslist[0].desc.yesterdaySuspectedCountIncr
            this.alldatas[3].middle = res.newslist[0].desc.curedCount
            this.alldatas[3].up = res.newslist[0].desc.curedIncr
            this.alldatas[4].middle = res.newslist[0].desc.deadCount
            this.alldatas[4].up = res.newslist[0].desc.deadIncr
            this.alldatas[5].middle = res.newslist[0].desc.seriousCount
            this.alldatas[5].up = res.newslist[0].desc.seriousIncr

        })
    }, methods: {
        getnowDate() {
            let date = new Date()
            let year = date.getFullYear();
            let mouth = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
            let day = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate()
            let hour = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours()
            let minute = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes()
            return `${year}-${mouth}-${day}  ${hour}:${minute}`
        }
    }
}
</script>

<style scoped lang="less">
.case-num {
    padding: 1rem;

    .container {
        .title {
            padding: 0.05rem 0 1rem;
            color: #666;
            font-size: 12px;


        }

        .num {
            position: relative;
            text-align: center;
            border: 1px solid rgb(235, 235, 235);
            border-radius: 8px;
            box-shadow: 0 0 2px rgba(0, 0, 0, .2);
            padding: 0.5rem;

            ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                padding: 5px;

                li {
                    .i-title {
                        font-size: 9px;
                    }

                    .NUM {
                        font-size: 20px;
                        font-weight: 600;

                    }

                    .now {
                        font-size: 11px;
                        font-weight: 600;
                        color: #333
                    }

                    width: 32%;
                    flex-direction: column;
                    display: flex;
                    margin-bottom: 10px;
                    flex-wrap: wrap;
                    justify-content: center;

                    

                }

                .color1 {
                    color: rgb(247, 76, 49);
                }

                .color2 {
                    color: rgb(247, 76, 49);
                }

                .color3 {
                    color: rgb(162, 90, 78);
                }

                .color4 {
                    color: rgb(174, 33, 44);
                }

                .color5 {
                    color: rgb(93, 112, 146);
                }

                .color6 {
                    color: rgb(40, 183, 163);
                }

            }
        }
    }
}
</style>