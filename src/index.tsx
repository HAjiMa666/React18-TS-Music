/*
 * @Author: czx
 * @Date: 2022-11-28 15:33:16
 * @LastEditTime: 2022-11-29 09:44:29
 * @LastEditors: czx
 * @Description:
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'normalize.css'
import 'antd/dist/reset.css'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
