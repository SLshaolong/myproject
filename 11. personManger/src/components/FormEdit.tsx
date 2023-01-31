import { Form, Modal, Input, Button, Space, message } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api from '../api';
import { changeFlag, changeTitle } from '../store/TitleSlice'
import Edit from './Edit';
export default function FormEdit(props: any) {
    const dispath = useDispatch()
    const flag = useSelector((state: any) => state.Title.flag)
    const titles = useSelector((state: any) => state.Title.title)
    const [info, setInfo] = useState('')
    const [messageAbi, context] = message.useMessage()
    const form = Form.useForm()
    const { Datareq, pageData, desc, technology, title, id } = props
    const handleOk = (value: any) => {
        submitHandle(form)
    }

    const CloseHandle = () => {
        dispath(changeFlag(false))
        dispath(changeTitle(''))
    }
    const ChangeVal = (value: any) => {
        setInfo(value);
    }
    const submitHandle = async (value: any) => {

        if (titles === '添加项目') {
            const data = Object.assign(value, { info })
            const result: any = await api.putAdd(data)
            if (result.status == 200) {
                messageAbi.success(result.msg)
                CloseHandle()
                Datareq()
                pageData()

            } else {
                messageAbi.error(result.msg)
            }
        } else {
            const data = Object.assign(value, { info,id })
            const result: any = await api.putUpdate(data)
            if (result.status == 200) {
                messageAbi.success(result.msg)
                CloseHandle()
                Datareq()
                pageData()

            } else {
                messageAbi.error(result.msg)
            }
        }



    }
    const getValues = () => {
        return {
            title, desc, technology
        }
    }

    return (
        <div>
            {context}
            <Modal open={flag} title={titles} onOk={handleOk} onCancel={CloseHandle} footer={[]} destroyOnClose>
                <Form
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                    style={{ maxWidth: 600 }}
                    onFinish={submitHandle}
                    autoComplete="off"
                    initialValues={getValues()}
                >
                    <Form.Item
                        label="标题"
                        name="title"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="技术栈"
                        name="technology"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="介绍"
                        name="desc"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="详情" name="info">
                        <Edit ChangeVal={ChangeVal} info={props.info} />
                    </Form.Item>
                    <Form.Item style={{ textAlign: 'center' }}>
                        <Space size={30}>
                            <Button type='primary' htmlType='submit'>提交</Button>
                            <Button onClick={CloseHandle}>关闭</Button>
                        </Space>
                    </Form.Item>
                </Form>

            </Modal>
        </div>
    )
}
