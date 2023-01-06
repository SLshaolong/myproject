<template>
    <div class="setting">
        <el-button @click="drawer = true" type="primary" class="setting-btn" circle :icon="Setting">
        </el-button>
        <el-drawer v-model="drawer" title="系统设置" size="15%">
            <h3>Logo显示隐藏</h3>
            <el-switch v-model="systemstore.toggle" />
        </el-drawer>
    </div>
</template>
<script lang='ts' setup>
import { ref, watch } from 'vue'
import { Setting } from '@element-plus/icons-vue'
import {useSystem} from '../../stores/SystemStore'
const drawer = ref(<boolean>false)
const value1 = ref(<boolean>true)
const systemstore=useSystem()

</script>
<style scoped>
.setting {
    position: fixed;
    right: 0;
    top: 300px;
    z-index: 100;
}

.setting-icon {
    font-size: 20px;
}
</style>