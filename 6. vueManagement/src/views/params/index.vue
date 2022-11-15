<template>

  <div>
    <ParamsSearchVue/>
    <paramsListVue />
    <ParamsAddVue/>

  </div>
</template>

<script>
import paramsListVue from './paramsList.vue';
import ParamsSearchVue from './ParamsSearch.vue';
import ParamsAddVue from './ParamsAdd.vue';
export default {
  components: {
    paramsListVue,
    ParamsSearchVue,
    ParamsAddVue
    
  }
}
</script>

<style>

</style>