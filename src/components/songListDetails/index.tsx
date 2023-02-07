import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { SongDetailsWrapper } from './style'
import { Drawer } from 'antd'

interface IProps {
  children?: ReactNode
  open: boolean
  changeOpen?: () => void
  dataSource: any
}

const SongListDetails: FC<IProps> = (props) => {
  const { open, changeOpen, dataSource } = props
  return (
    <SongDetailsWrapper>
      <Drawer
        title="测试Drawer"
        placement="right"
        open={open}
        onClose={() => {
          if (changeOpen) changeOpen()
        }}
        // getContainer={() => document.querySelector('.songCard') as HTMLElement}
      >
        {dataSource.map((item: any) => {
          return item.name
        })}
      </Drawer>
    </SongDetailsWrapper>
  )
}

export default memo(SongListDetails)
