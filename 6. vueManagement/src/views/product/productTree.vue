<template>
    <div>
        <el-tree :props="props" :load="loadNode" @node-click="ClickHandle" lazy>
        </el-tree>
    </div>
</template>

<script>
import api from '../../api/index';
export default {
    data() {
        return {
            props: {
                label: 'name',
                children: 'zones',
                isLeaf: 'leaf'
            },
        }

    },
    methods: {
        loadNode(node, resole) {
            // 第一次加载
            if (node.level === 0) {
                api.selectItem().then(res => res.data).then(data => {
                    if (data.status == 200) {
                        return resole(data.result)
                    } else {
                        return resole([])
                    }
                })
            } else if (node.level >= 0) {
                api.selectItem({
                    id: node.data.cid
                }).then(res => res.data).then(data => {
                    if (data.status == 200) {
                        return resole(data.result)

                    } else {
                        return resole([])
                    }
                })
            }
        },
        ClickHandle(data){
            this.$emit('ontree',data)
        }
    },
}
</script>

<style>

</style>