import React, { useState } from 'react'
import {HomeOutlined,RocketOutlined,SettingOutlined} from '@ant-design/icons'
import {Menu} from 'antd';
import {useNavigate} from 'react-router-dom';
interface menus {
    label: string,
    key: string,
    icon?:any
}
export default function SliderLeft() {
    const navigate=useNavigate()
    const [menus, changeMenus] = useState([{
        label: '首页',
        key: '',
        icon:<HomeOutlined/>
    }, {
        label: '个人介绍',
        key: 'introduce',
        icon:<RocketOutlined/>
    }, {
        label: '项目管理',
        key: 'project',
        icon:<SettingOutlined/>
    }])
    const defineMenu=(menus:Array<menus>):any=>{
       return menus.map(e=>{
            return {
                key:e.key,
                label:e.label,
                icon:e.icon
            }
            
        })
       
    }
    const ChangeItem=(e:any)=>{
        navigate('/'+e.key)
    }
    return (
        <Menu onClick={ChangeItem}
        style={{ width: 256 }}
        defaultSelectedKeys={['']}
        mode='inline'
        items={defineMenu(menus)}
        theme="dark"
        >

        </Menu>
    )
}
