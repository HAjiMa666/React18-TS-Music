import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const MusicList: FC<IProps> = () => {
  return <>MusicList</>
}

export default memo(MusicList)
