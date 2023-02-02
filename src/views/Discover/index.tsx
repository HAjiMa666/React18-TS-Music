import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { NavLink, Outlet } from 'react-router-dom'
import { useAppSelector } from '@/store/hooks'
import { shallowEqual } from 'react-redux'
import { DiscoverStyle } from './style'
import { useToken } from 'antd/es/theme/internal'
interface IProps {
  children?: ReactNode
}

const items: MenuProps['items'] = [
  {
    label: <NavLink to={'/discover/recommend'}>推荐</NavLink>,
    key: '/discover/recommend'
  },
  {
    label: <NavLink to={'/discover/rankList'}>排行榜</NavLink>,
    key: '/discover/rankList'
  },
  {
    label: <NavLink to={'/discover/musicList'}>歌单</NavLink>,
    key: '/discover/musicList'
  },
  {
    label: <NavLink to={'/discover/newAlbum'}>新碟上架</NavLink>,
    key: '/discover/newAlbum'
  }
]

const Discover: FC<IProps> = (props) => {
  return (
    <DiscoverStyle>
      <Menu
        mode="horizontal"
        items={items}
        defaultSelectedKeys={['/discover/recommend']}
      />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </DiscoverStyle>
  )
}

export default memo(Discover)
