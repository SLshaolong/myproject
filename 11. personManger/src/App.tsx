import React from 'react'
import './css/App.scss'
import { Outlet } from 'react-router-dom'
import SliderLeft from './components/SliderLeft'
export default function App() {
  return (
    <div className='Layout'>
      <div className="slider-left">
        <SliderLeft />
      </div>
      <div className="rightMain">
        <Outlet />
      </div>
    </div>
  )
}
