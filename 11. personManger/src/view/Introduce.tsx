import React, { useEffect, useState, Suspense } from 'react'
import api from '../api'
import { message, Button, Modal } from 'antd'
import '../css/Introd.scss'
import EditorIntroduce from '../utils/EditIntroduce'
export default function Introduce() {
    const [info, setInfo] = useState('暂无信息')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage()
    useEffect(() => {
        https()
    }, [])
    const https = () => {
        api.getIntroduce().then((res: any) => {
            if (res.status == 200) {
                messageApi.success('加载数据成功')
                setInfo(res.result[0].info)

            } else {
                messageApi.error('服务器链接出错啦！')
            }
        })
    }
    const handleOk = async () => {
        const result: any = await api.putIntroduce({
            data: info
        })
        if (result.status == 200) {
            messageApi.success('修改成功')
            https()
            setIsModalOpen(false)
        } else {
            messageApi.error('修改失败')
        }

    }
    const handleCancel = () => {
        setIsModalOpen(false)

    }
    const changeVal = (value: any) => {
        setInfo(value)
    }
    return (
        <div className='Introd'>
            {contextHolder}
            <h1>个人介绍</h1>
            <div className='info' dangerouslySetInnerHTML={{ __html: info }}></div>
            <div className="btn">
                <Button type='primary' onClick={() => { setIsModalOpen(true) }}>编辑</Button>
            </div>


            <Modal title="修改个人介绍" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Suspense fallback={<div>loading</div>}>
                    <EditorIntroduce changVal={changeVal} />
                </Suspense>
            </Modal>

        </div>

    )
}
