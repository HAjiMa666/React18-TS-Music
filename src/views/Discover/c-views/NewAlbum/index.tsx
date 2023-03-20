import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  return <>NewAlbum</>
}

export default memo(NewAlbum)
