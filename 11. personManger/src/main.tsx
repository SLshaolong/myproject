import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import Routes from './utils/routes'
import './assets/init.scss'
import { changeUser } from './store/UserSlice'
const flag = localStorage.getItem('isLogin')
if (flag) {
  store.dispatch(changeUser())
}


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <HashRouter>
      <Routes />
    </HashRouter>
  </Provider>,
)
