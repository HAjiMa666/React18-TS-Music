/*
 * @Author: czx
 * @Date: 2022-11-28 15:33:16
 * @LastEditTime: 2022-11-28 20:38:35
 * @LastEditors: czx
 * @Description:
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { HashRouter } from 'react-router-dom'
import 'normalize.css'
import 'antd/dist/reset.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <HashRouter>
    <App />
  </HashRouter>
)
