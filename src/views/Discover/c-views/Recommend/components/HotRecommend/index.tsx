import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import HotRecommendWrapper from './style'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchHotRecommend } from '@/views/Discover/c-views/Recommend/store/recommend'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { hotRecommend } = useAppSelector((state) => ({
    hotRecommend: state.recommend.hotRecommend
  }))
  useEffect(() => {
    dispatch(fetchHotRecommend())
  }, [])

  return <HotRecommendWrapper>HotRecommend</HotRecommendWrapper>
}

export default memo(HotRecommend)
