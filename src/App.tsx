/*
 * @Author: czx
 * @Date: 2022-11-28 15:33:16
 * @LastEditTime: 2022-11-29 09:43:25
 * @LastEditors: czx
 * @Description:
 */
import React, { Suspense } from 'react'
import { Button } from 'antd'
import { useRoutes, useNavigate } from 'react-router-dom'
import routes from './router'
function App() {
  return (
    <div className="App">
      <Suspense fallback="loading">
        <div className="route">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
