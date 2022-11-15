<template>
  <div class="home">
    <Headers/>
    <Ncov/>
    <CaseNum/>
    <Maps/>
    <Swiper/>
    <Trim/>
    <NewsVue/>
</div>
</template>

<script>
// @ is an alias to /src

import Headers from '../components/Header.vue'
import Ncov from '../components/Ncov.vue'
import CaseNum from '../components/CaseNum.vue'
import Maps from '../components/Map.vue'
import Trim from '../components/Trim.vue'
import Swiper from '../components/MySwiper.vue'
import NewsVue from '../components/News.vue'

export default {
  name: 'HomeView',
  components: {
    Headers,
    Ncov,
    CaseNum,
    Maps,
    Swiper,
    Trim,
    NewsVue
  }
}
</script>
