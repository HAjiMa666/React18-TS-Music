import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import {
  SongDetailsWrapper,
  SongListHeadWrapper,
  ListInfo,
  SongWrapper
} from './style'
import { SongListDetails } from '@/types/recommend'
import { Drawer, Typography } from 'antd'
import { formatIndex } from '@/utils/tools'
import { useAppDispatch } from '@/store/hooks'
import { fetchSongUrl } from '@/store/common'

interface IProps {
  children?: ReactNode
  open: boolean
  changeOpen?: () => void
  allSongs: any
  songListDetails: SongListDetails | undefined
}
interface SongListHeadProps {
  cover: string | undefined
  title: string | undefined
  author: ReactNode | undefined
}
interface SongProps {
  name: string
  id: number
  index?: number
}

const SongListHead: FC<SongListHeadProps> = memo((props) => {
  const { cover, title, author } = props
  return (
    <SongListHeadWrapper>
      <ListInfo bgUrl={`${cover}?imageView&blur=40x20`}>
        <div className="cover">
          <img src={cover} alt="" />
        </div>
        <div className="info">
          <div className="title">{title}</div>
          <div className="author">{author}</div>
        </div>
      </ListInfo>
      <div className="options"></div>
    </SongListHeadWrapper>
  )
})

const Song: FC<SongProps> = memo((props) => {
  const dispatch = useAppDispatch()
  const { name, index, id } = props
  if (index)
    return (
      <SongWrapper
        onClick={() => {
          dispatch(fetchSongUrl({ id }))
        }}
      >
        <span className="index">{formatIndex(index)}</span>

        <div className="name">
          <Typography.Text ellipsis={true} title={name}>
            {name}
          </Typography.Text>
        </div>
      </SongWrapper>
    )
  else return <SongWrapper>{name}</SongWrapper>
})

const SongListDetailsCpn: FC<IProps> = (props) => {
  const { open, changeOpen, allSongs, songListDetails } = props
  return (
    <SongDetailsWrapper className="songDetails">
      <Drawer
        title={
          <SongListHead
            cover={songListDetails?.coverImgUrl}
            title={songListDetails?.name}
            author={songListDetails?.creator.nickname}
          />
        }
        placement="right"
        closable={false}
        open={open}
        onClose={() => {
          if (changeOpen) changeOpen()
        }}
        getContainer={() =>
          document.querySelector('.songDetails') as HTMLDivElement
        }
      >
        {allSongs.map((item: any, index: number) => {
          return (
            <Song
              name={item.name}
              id={item.id}
              key={item.id}
              index={index + 1}
            />
          )
        })}
      </Drawer>
    </SongDetailsWrapper>
  )
}

export default memo(SongListDetailsCpn)
