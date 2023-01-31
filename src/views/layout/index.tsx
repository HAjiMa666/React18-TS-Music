import React, { memo, Suspense, useEffect, useState } from 'react'
import LayoutStyle, { Title } from './style'
import { Layout, Menu } from 'antd'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import navData from '@/assets/homepageNav.json'

const { Sider, Content } = Layout

const Index = memo(() => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    // 避免每次刷新进来,造成重复请求
    if (location.pathname === '/discover/recommend') return
    navigate('/discover')
  }, [])
  return (
    <LayoutStyle>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(isCollapse) => {
            setCollapsed(isCollapse)
          }}
        >
          <Title>网易云音乐</Title>
          <Menu
            theme="dark"
            defaultSelectedKeys={['/discover']}
            items={navData}
            onClick={(obj) => {
              console.log('点击的对象', obj)
              navigate(obj.key)
            }}
          />
        </Sider>
        <Content>
          <Suspense fallback="">
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </LayoutStyle>
  )
})

export default Index
