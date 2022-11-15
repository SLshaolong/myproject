<template>

  <div>
    <MainNav />
    <div class="box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainNav from '../components/MainNav/index.vue'
export default {
  components: {
    MainNav
  }
}
</script>

<style scoped>
  .box{
    margin-left: 210px;
    margin-top: 10px;
    margin-right: 10px;
  }
</style>