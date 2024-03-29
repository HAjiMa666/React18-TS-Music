import React, { memo, Suspense, useEffect, useState } from 'react'
import LayoutStyle from './style'
import { ConfigProvider, Layout, Menu, theme, Switch } from 'antd'
import { BulbFilled } from '@ant-design/icons'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import MusicPlayer from '@/views/musicPlayer'
import { Music } from '@/assets/icons'
import LoginModal from '@/views/PersonalInfo/components/LoginModal'

const { Header } = Layout

const Index = memo(() => {
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
          <Suspense fallback="">
            <Outlet />
          </Suspense>
        </Layout>
        <MusicPlayer />
      </LayoutStyle>
    </ConfigProvider>
  )
})

export default Index
