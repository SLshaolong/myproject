<template>
  <UserHeaderVue />
  <UserListVue />
</template>

<script>
import UserHeaderVue from './UserHeader.vue';
import UserListVue from './UserList.vue';
export default {
  setup() {
    return {}
  },
  components: {
    UserHeaderVue,
    UserListVue
  }
}
</script>

<style scoped lang="less">

</style>