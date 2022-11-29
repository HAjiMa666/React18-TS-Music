import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { useAppSelector } from '@/store/hooks'
import { shallowEqual } from 'react-redux'
interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  const { counts } = useAppSelector(
    (state) => ({
      counts: state.count
    }),
    shallowEqual
  )
  return (
    <div>
      <span>{`计数： ${counts.sum}`}</span>
    </div>
  )
}

export default memo(Home)
