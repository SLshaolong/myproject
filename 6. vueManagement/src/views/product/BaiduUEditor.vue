<template>
    <div>
        <vue-ueditor-wrap v-model="msg" :config="editorConfig"></vue-ueditor-wrap>
    </div>
</template>

<script>
import VueUeditorWrap from 'vue-ueditor-wrap'
export default {
    data() {
        return {
            msg: '<h2>Hello World!</h2>',
            editorConfig:{
                UEDITOR_HOME_URL: "/UEditor/",
                serverUrl: "",
                autoHeightEnabled:true,
                initialFrameHeight:240,
                initialFrameWidth:'100%'
            }
        }
    },
    components: {
        VueUeditorWrap
    },
}
</script>

<style>

</style>