import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store/hooks'
import { fetchRecommendBanners } from './store/recommend'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendBanners())
  }, [])

  return <>Recommend</>
}

export default memo(Recommend)
