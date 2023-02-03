import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { SongCardWrapper, Box } from './style'
import { CustomerServiceOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'

interface IProps {
  children?: ReactNode
  description: string
  imgUrl: string
  playCount: string
  onClick: () => void
}

const SongCard: FC<IProps> = (props) => {
  const { imgUrl, description, playCount, onClick } = props
  const [open, setOpen] = useState(false)
  return (
    <SongCardWrapper className="songCard">
      <div
        className="container"
        onClick={() => {
          setOpen(true)
          onClick()
        }}
      >
        <Box imgUrl={imgUrl}>
          <div className="mask"></div>
          <div className="playCount">
            <CustomerServiceOutlined className="icon" />
            {playCount}
          </div>
        </Box>
        <div className="description">{description}</div>
      </div>
      <Drawer
        title="测试Drawer"
        placement="right"
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        getContainer={() => document.querySelector('.songCard') as HTMLElement}
      ></Drawer>
    </SongCardWrapper>
  )
}

export default memo(SongCard)
