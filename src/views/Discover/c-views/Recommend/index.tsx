import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import Banners from './components/Banner'
import HotRecommend from './components/HotRecommend'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  return (
    <RecommendWrapper>
      <Banners />
      <HotRecommend />
    </RecommendWrapper>
  )
}

export default memo(Recommend)
