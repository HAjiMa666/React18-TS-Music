/*
 * @Author: czx
 * @Date: 2022-11-28 20:29:13
 * @LastEditTime: 2022-11-28 20:43:44
 * @LastEditors: czx
 * @Description: 路由配置
 */

import React from 'react'
import { RouteObject } from 'react-router-dom'
import Home from '@/views/Home'

const routes: RouteObject[] = [
  {
    path: '/home',
    element: <Home />
  }
]

export default routes
