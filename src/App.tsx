/*
 * @Author: czx
 * @Date: 2022-11-28 15:33:16
 * @LastEditTime: 2022-11-28 20:42:54
 * @LastEditors: czx
 * @Description:
 */
import { Button } from 'antd'
import React from 'react'
import { useRoutes, useNavigate } from 'react-router-dom'
import routes from './router'
function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <Button
        type="primary"
        onClick={() => {
          navigate('./home')
        }}
      >
        主页
      </Button>
      {useRoutes(routes)}
    </div>
  )
}

export default App
