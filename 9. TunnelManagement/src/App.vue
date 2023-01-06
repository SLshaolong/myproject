<script setup>
import { RouterView } from 'vue-router'
</script>

<template>

  <RouterView />
</template>

<style >
body,html,#app{
  height: 100%;
}
.el-menu{
border-right: 0 !important;
}
.is-current .el-tree-node__content{
  background: #337ecc !important;
  color: #fff;
}
</style>
