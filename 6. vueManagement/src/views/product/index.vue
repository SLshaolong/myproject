<template>
  <div>
    <productHeadVue/>
    <prductlistVue/>
    <productlist />
    <productSearchVue/>

  </div>
</template>

<script>
import prductlistVue from './prductlist.vue';
import productlist from './paroductPage.vue';
import productHeadVue from './productHead.vue';
import productSearchVue from './productSearch.vue';

export default {
  components:{
    prductlistVue,
    productlist,
    productHeadVue,
    productSearchVue

  }

}
</script>

<style>

</style>