import React from 'react'
import '../css/Login.scss'
import api from '../api';
import {useDispatch} from 'react-redux'
import {changeUser} from '../store/UserSlice'
import { Form, Input, Button,message } from 'antd';
import {useNavigate} from 'react-router-dom'
export default function Login() {
    const navigate=useNavigate()
    const dispath=useDispatch()
    const [messageApi,contextHolder]=message.useMessage()
    const onFinish=async (value:any)=>{
       const result:any= await api.postLogin({user:value.username,password:value.password})
        if(result.status==200){
            dispath(changeUser())
            localStorage.setItem('isLogin','login')
            navigate('/')
        }else{
            messageApi.open({
                type: 'error',
                content: result.msg,
              });
        }
        
    }
    return (
       
        <div className='LoginModule'>
             {contextHolder}
            <h1>登录</h1>
            <Form className='From'
            onFinish={onFinish}
            initialValues={{username:'admin'}}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
