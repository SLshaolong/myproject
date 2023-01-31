import React, { useState, useEffect } from 'react'
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
export default function Edit(props:any) {
    const [editor, setEditor] = useState<IDomEditor | null>(null)
    const [html, setHtml] = useState(props.info||'<p></p>')
    const {ChangeVal}=props
    const toolbarConfig: Partial<IToolbarConfig> = {}
    const editorConfig: Partial<IEditorConfig> = {
        placeholder: '请输入内容...',
    }
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])
    editorConfig.onChange=(editor:IDomEditor)=>{
        ChangeVal(editor.getHtml())
        
    }
    return (
        <>
            <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '1px solid #ccc' }}
                />
                <Editor
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={setEditor}
                    onChange={editor => setHtml(editor.getHtml())}
                    mode="default"
                    style={{ height: '200px', overflowY: 'hidden' }}
                />
            </div>
            
        </>
    )
}
