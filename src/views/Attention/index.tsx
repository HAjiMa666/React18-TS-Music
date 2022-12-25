import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Attention: FC<IProps> = () => {
  return <>Attention</>
}

export default memo(Attention)
