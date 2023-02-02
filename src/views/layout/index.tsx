import React, { memo, Suspense, useEffect, useState } from 'react'
import LayoutStyle, { Title } from './style'
import { ConfigProvider, Layout, Menu, theme } from 'antd'
import { CustomerServiceOutlined } from '@ant-design/icons'
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
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ff0000'
        },
        algorithm: theme.darkAlgorithm
      }}
    >
      <LayoutStyle>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(isCollapse) => {
              setCollapsed(isCollapse)
            }}
            theme={'light'}
          >
            <Title>
              {collapsed ? <CustomerServiceOutlined /> : '网易云音乐'}
            </Title>
            <Menu
              theme="light"
              defaultSelectedKeys={['/discover']}
              items={navData}
              onClick={(obj) => {
                console.log('点击的对象', obj)
                navigate(obj.key)
              }}
            />
          </Sider>

          <Content className="container">
            <Suspense fallback="">
              <Outlet />
            </Suspense>
          </Content>
        </Layout>
      </LayoutStyle>
    </ConfigProvider>
  )
})

export default Index
