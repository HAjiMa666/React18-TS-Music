/*
 * @Author: czx
 * @Date: 2022-11-28 20:29:13
 * @LastEditTime: 2022-11-29 08:39:53
 * @LastEditors: czx
 * @Description: 路由配置
 */

import React, { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('@/views/Home'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/home',
    element: <Home />
  }
]

export default routes
