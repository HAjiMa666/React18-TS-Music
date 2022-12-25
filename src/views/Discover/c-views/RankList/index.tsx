import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const RankList: FC<IProps> = () => {
  return <>RankList</>
}

export default memo(RankList)
