import React, { memo, Suspense, useEffect, useState } from 'react'
import LayoutStyle from './style'
import { ConfigProvider, Layout, Menu, theme, Switch } from 'antd'
import { BulbFilled } from '@ant-design/icons'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import navData from '@/assets/homepageNav.json'
import MusicPlayer from '@/views/musicPlayer'
import { Music } from '@/assets/icons'
import LoginModal from '@/views/PersonalInfo/components/LoginModal'

const { Sider, Content, Header } = Layout

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
        <Layout>
          <Header className="header">
            <div className="title">
              <Music width={30} height={30} className="musicIcon" />
              <h3>简约音乐播放器</h3>
            </div>
            <div className="options">
              <div className="login">
                <LoginModal
                  getLoginStatus={() => {
                    console.log(1)
                  }}
                />
              </div>
              <div className="lightMode">
                <BulbFilled
                  className="111"
                  style={{
                    fontSize: '22px'
                  }}
                />
              </div>
            </div>
          </Header>
          <Layout className="antdLayout">
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={(isCollapse) => {
                setCollapsed(isCollapse)
              }}
              theme={'light'}
              className="antdLayout-sider"
            >
              <Menu
                theme="light"
                defaultSelectedKeys={['/discover']}
                items={navData}
                onClick={(obj) => {
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
        </Layout>
        <MusicPlayer />
      </LayoutStyle>
    </ConfigProvider>
  )
})

export default Index
