<template>
    <div class="container">
        <h3>新闻展示</h3>
        <ul>
            <li v-for="(item, index) in news" :key="index" @click="Gto(item.sourceUrl)">
                <a :href="item.sourceUrl"><div class="le">
                    <p>{{ item.pubDateStr }}</p>
                </div>
                <div class="title">
                    {{ item.title }}
                    <p>{{ item.summary }}</p>
                </div></a>
            </li>
        </ul>
    </div>
</template>

<script>
import api from '../api/index'
export default {
    data() {
        return {
            news: {}
        }
    },
    mounted() {
        api.getNcov2({
            key: 'fb54463a34c6c9787a92613aae19641d '
        }).then(res => {
            this.news = res.newslist[0].news
        })
    }

}
</script>

<style scoped lang="less">
.container {
    padding: 1rem;
    box-sizing: border-box;


    a {
        display: flex;
        justify-content: space-around;
        height: 90px;
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid #f3f3f3;
        margin-top: 10px;
        box-shadow: inset 0 0 3px rgba(0,0,0.1);

        .le {
            width: 25%;
            text-align: right;
            font-size: 12px;
            box-sizing: border-box;
            padding: 3px 10px;
            margin-right: 5px;
            p{
                background: red;
                color: #fff;
                display: inline-block;
                padding: 2px;
                border-radius: 3px;
            }

        }

        .title {
            width: 75%;
            font-size: 16px;
            font-weight: 900;

            p {
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-all;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                font-size: 0.5rem;
                color: #333;
                font-weight: normal;
            }
        }
    }
}
</style>