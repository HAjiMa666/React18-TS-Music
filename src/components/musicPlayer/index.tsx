import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MusicPlayerWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const MusicPlayer: FC<IProps> = () => {
  return <MusicPlayerWrapper>MusicPlayer</MusicPlayerWrapper>
}

export default memo(MusicPlayer)
