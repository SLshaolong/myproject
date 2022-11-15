<template >
    <div style="border: 1px solid #ccc;">
        <Toolbar style="border-bottom: 1px solid #ccc" :editor="editor" :defaultConfig="toolbarConfig" :mode="mode" />
        <Editor style="height: 320px; overflow-y: hidden;" v-model="html" :defaultConfig="editorConfig" :mode="mode"
            @onCreated="onCreated" />
    </div>
    
</template>

<script>
import Vue from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

export default Vue.extend({
    components: { Editor, Toolbar },
    data() {
        return {
            editor: null,
            html: '<p></p>',
            toolbarConfig: {},
            editorConfig: { placeholder: '请输入内容...' },
            mode: 'simple', // or 'simple'
        }
    },
    props:{
        msg:{
            default:'',
            type:String
        }
    },
    methods: {
        onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
        },
        
    },
    beforeDestroy() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器
    },
    computed:{
        GetChange(){
            return this.html
        }
    },
    watch:{
        GetChange(newVal){
            this.$emit('wangEdi',newVal)
        },
        msg(newVal){
            this.html=newVal
        }
      
    }
})
</script>

<style>

</style>
<style src="@wangeditor/editor/dist/css/style.css" ></style>