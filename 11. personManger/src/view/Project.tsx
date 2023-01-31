import React, { useState, useEffect, Suspense } from 'react'
import '../css/Project.scss'
import { Space, Table, Modal, message, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import api from '../api';
import { useDispatch } from 'react-redux'
import { changeFlag, changeTitle } from '../store/TitleSlice';
const FormEdit = React.lazy(() => import('../components/FormEdit'))
interface DataType {
    key: React.Key;
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    tags: string[];
}
export default function Project() {
    const dispath = useDispatch()
    const [messageApi, coutText] = message.useMessage()
    const [data, setData] = useState<any>([] as any)
    const [pages, setPages] = useState<any>(0)
    const [editParams, setEdit] = useState<any>({})
    const http = async (id?: number) => {
        const result: any = await api.getList({ page: id })
        if (result.status == 200) {
            setData(result.result)
        } else {
            messageApi.error('暂无数据')
        }
    }
    const getPage = () => {
        api.getAll().then((res: any) => {
            if (res.status == 200) {
                setPages(res.count)
            }
        })
    }
    useEffect(() => {
        http(1)
        getPage()

    }, [])
    const onselectChange = (e: any) => {
        http(e.current)
    }
    const getAllNum = (): any => {
        return {
            columns: [{
                title: '标题',
                dataIndex: 'title',
                width: 150,
                ellipsis: true
                ,
            }, {
                title: '技术栈',
                dataIndex: 'technology',
                width: 150,
                ellipsis: true
            }, {
                title: '介绍',
                dataIndex: 'desc',
                width: 300,
                ellipsis: true
            }, {
                title: '详情',
                dataIndex: 'info',
                ellipsis: true

            }, {
                title: '编辑',
                width: 100,
                render: (_: any, record: any) => (
                    <Space size='middle'>
                        <Button type='primary' shape="circle" icon={<EditOutlined />} onClick={() => {
                            editData(_);
                        }}></Button>
                        <Button type='primary' shape="circle" danger icon={<DeleteOutlined />} onClick={() => { deleteData(_) }}></Button>
                    </Space>
                )
            }],
            dataSource: data,
            rowKey: 'id',
            ellipsis: true,
            pagination: {
                total: pages,
                pageSize: 10
            },
            size: 'small'
        }
    }
    const deleteData = async (e: any) => {
        const result: any = await api.putDelete({ id: e.id })
        if (result.status == 200) {
            messageApi.success(result.msg)
            http(1)
            getPage()
        } else {
            messageApi.error(result.msg)
        }

    }
    const editData = async (data: any) => {
        const result: any = await api.getSerach({ id: data.id })
        if (result.status == 200) {
            setEdit(result.result)
            dispath(changeFlag(true))
            dispath(changeTitle('编辑项目'))
        } else {
            messageApi.error('预查询失败')
        }
    }
    const addData = () => {
        dispath(changeFlag(true))
        dispath(changeTitle('添加项目'))
        setEdit({})
    }

    return (
        <div className='Project'>
            {coutText}
            <h3>项目管理</h3>
            <div className="btn">
                <Button type='primary' onClick={addData}>添加</Button>
            </div>
            <Table {...getAllNum()} onChange={onselectChange}></Table>

            <FormEdit Datareq={http} pageData={getPage} {...editParams} />

        </div>
    )
}
