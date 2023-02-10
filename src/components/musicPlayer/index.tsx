import React, { memo, useMemo } from 'react'
import type { FC, ReactNode } from 'react'
import { MusicPlayerWrapper } from './style'
import { useAppSelector } from '@/store/hooks'
import { Typography } from 'antd'
interface IProps {
  children?: ReactNode
}
import LikeIcon from '@/components/icons/Like'
import { ReactComponent as Play } from '@/assets/icons/bofang.svg'

const MusicPlayer: FC<IProps> = () => {
  const { songData, allSongs } = useAppSelector((state) => ({
    songData: state.common.currentSong,
    allSongs: state.common.allSongs
  }))
  const currentSongInfo = useMemo(() => {
    return allSongs.find((item) => item.id === songData[0]?.id)
  }, [songData])
  return (
    <MusicPlayerWrapper>
      <div className="cover">
        <img src={currentSongInfo?.al.picUrl} alt="" />
      </div>
      <div className="songInfo">
        <div className="title">
          <Typography.Text ellipsis={true}>
            {currentSongInfo?.name}
          </Typography.Text>
        </div>
        <div className="author">{currentSongInfo?.ar[0].name}</div>
      </div>
      <div className="options">
        <LikeIcon />
        <Play />
      </div>
      <audio src={songData[0]?.url} autoPlay />
    </MusicPlayerWrapper>
  )
}

export default memo(MusicPlayer)
