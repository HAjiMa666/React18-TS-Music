import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const HeadFooterLayout = lazy(() => import('@/views/layout'))
const BasicLayout = lazy(() => import('@/views/layout/mainLayout'))
const Discover = lazy(() => import('@/views/Discover'))
const Recommend = lazy(() => import('@/views/Discover/c-views/Recommend'))
const RankList = lazy(() => import('@/views/Discover/c-views/RankList'))
const MusicList = lazy(() => import('@/views/Discover/c-views/MusicList'))
const NewAlbum = lazy(() => import('@/views/Discover/c-views/NewAlbum'))
const MyMusic = lazy(() => import('@/views/MyMusic'))
const Attention = lazy(() => import('@/views/Attention'))
const PersonalInfo = lazy(() => import('@/views/PersonalInfo'))
const MusicDetails = lazy(() => import('@/views/MusicDetails'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HeadFooterLayout />,
    children: [
      {
        path: '/',
        element: <BasicLayout />,
        children: [
          {
            path: '/discover',
            element: <Discover />,
            children: [
              {
                path: '/discover',
                element: <Navigate to="/discover/recommend" />
              },
              { path: '/discover/recommend', element: <Recommend /> },
              { path: '/discover/rankList', element: <RankList /> },
              { path: '/discover/musicList', element: <MusicList /> },
              { path: '/discover/newAlbum', element: <NewAlbum /> }
            ]
          },
          { path: '/personalInfo', element: <PersonalInfo /> },
          { path: '/myMusic', element: <MyMusic /> },
          { path: '/attention', element: <Attention /> },
          { path: '/musicDetails', element: <MusicDetails /> }
        ]
      }
    ]
  },
  {
    path: '/musicDetails',
    element: <HeadFooterLayout />,
    children: [
      {
        path: '/musicDetails',
        element: <MusicDetails />
      }
    ]
  }
]

export default routes
