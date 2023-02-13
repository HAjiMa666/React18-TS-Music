import React, { memo, useMemo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { MusicPlayerWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { changePlayState, changeSongPlayWay } from '@/views/musicPlayer/store'
import { Typography } from 'antd'
interface IProps {
  children?: ReactNode
}
import {
  Add,
  Circle,
  CircleOne,
  LastSong,
  Love,
  NextSong,
  Play,
  Random,
  Sound,
  Stop
} from '@/assets/icons'

const MusicPlayer: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { songData, allSongs, playState, songPlayWay } = useAppSelector(
    (state) => ({
      songData: state.common.currentSong,
      allSongs: state.common.allSongs,
      playState: state.musicPlayer.playState,
      songPlayWay: state.musicPlayer.songPlayWay
    })
  )
  const musicPlayerRef = useRef<HTMLAudioElement>(null)
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
        <div className="playOption">
          {songPlayWay === 0 && (
            <Circle
              width={20}
              height={20}
              className="circle"
              onClick={() => {
                dispatch(changeSongPlayWay())
              }}
            />
          )}
          {songPlayWay === 1 && (
            <CircleOne
              width={20}
              height={20}
              className="circle"
              onClick={() => {
                dispatch(changeSongPlayWay())
              }}
            />
          )}
          {songPlayWay === 2 && (
            <Random
              width={20}
              height={20}
              className="circleOne"
              onClick={() => {
                dispatch(changeSongPlayWay())
              }}
            />
          )}
          <LastSong width={20} height={20} className="lastSong" />
          {playState ? (
            <Play
              width={20}
              height={20}
              className="play"
              onClick={() => {
                dispatch(changePlayState())
                musicPlayerRef.current?.pause()
              }}
            />
          ) : (
            <Stop
              width={20}
              height={20}
              className="stop"
              onClick={() => {
                dispatch(changePlayState())
                musicPlayerRef.current?.play()
              }}
            />
          )}
          <NextSong width={20} height={20} className="nextSong" />
        </div>
        <div className="audioOptions">
          <Love width={20} height={20} className="love" />
          <Add width={20} height={20} className="add" />
          <Sound width={25} height={25} className="sound" />
        </div>
      </div>
      <audio src={songData[0]?.url} ref={musicPlayerRef} />
    </MusicPlayerWrapper>
  )
}

export default memo(MusicPlayer)
