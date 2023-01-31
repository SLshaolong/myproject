/**
 * 个人介绍页面的富文本编译器
 */

import '@wangeditor/editor/dist/css/style.css'
import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import api from '../api'
export default function EditorIntroduce(props:any) {
    const [editor, setEditor] = useState<IDomEditor | null>(null)
    const [html, setHtml] = useState('<p>hello</p>')
    const {changVal}=props
    
    
    


    useEffect(() => {
        api.getIntroduce().then((res: any) => {
            if (res.status == 200) {
                setHtml(res.result[0].info)
            }
        })
    }, [])

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
    editorConfig.onChange = (editor: any) => {
        changVal(editor?.getHtml())

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
                    style={{ height: '300px', overflowY: 'hidden' }}
                />
            </div>
        </>
    )
}