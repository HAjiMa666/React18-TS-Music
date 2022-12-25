import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const MyMusic: FC<IProps> = () => {
  return <>MyMusic</>
}

export default memo(MyMusic)
