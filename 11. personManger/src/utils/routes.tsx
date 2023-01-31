import React, { lazy, Suspense, useEffect } from 'react'
import { useRoutes, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import App from '../App'
import Login from '../view/Login'
import ProductIntroduce from '../view/ProductIntroduce'
const Project=React.lazy(()=>import('../view/Project'))
const Introduce=React.lazy(()=>import('../view/Introduce'))
export default function routes() {
    const flag = useSelector((state: any) => state.User.flag)
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (!flag) {
            if (location.pathname != '/login') {
                navigate('/login')
            }
        }else{
            if (location.pathname == '/login') {
                navigate('/')
            }
        }

    }, [location.pathname])
    const routes = useRoutes([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    index:true,
                    element: <ProductIntroduce/>
                },{
                    path:'/introduce',
                    element:<Suspense fallback={<div>loading</div>}><Introduce/></Suspense>
                }
                ,{
                    path:'/project',
                    element:<Suspense fallback={<div>loading</div>}><Project/></Suspense>
                }
            ]
        }, {
            path: '/login',
            element: <Login/>
        }
    ])
    

    return routes
}
