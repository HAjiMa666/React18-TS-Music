import React, { memo, Suspense, useState } from 'react'
import LayoutStyle, { Title } from './style'
import { Layout, Menu } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'
import navData from '@/assets/homepageNav.json'

const { Sider, Content } = Layout

const Index = memo(() => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
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
