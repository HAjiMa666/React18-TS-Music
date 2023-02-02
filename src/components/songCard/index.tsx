import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongCardWrapper, Box } from './style'
import { CustomerServiceOutlined } from '@ant-design/icons'

interface IProps {
  children?: ReactNode
  description: string
  imgUrl: string
  playCount: string
}

const SongCard: FC<IProps> = (props) => {
  const { imgUrl, description, playCount } = props
  return (
    <SongCardWrapper>
      <Box imgUrl={imgUrl}>
        <div className="mask"></div>
        <div className="playCount">
          <CustomerServiceOutlined className="icon" />
          {playCount}
        </div>
      </Box>
      <div className="description">{description}</div>
    </SongCardWrapper>
  )
}

export default memo(SongCard)
