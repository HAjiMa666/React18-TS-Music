import React, { memo, useEffect, useMemo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { MusicPlayerWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { changePlayState, changeSongPlayWay } from '@/views/musicPlayer/store'
import { Slider, Typography } from 'antd'
import { formatLyric, formatSongDuration } from '@/utils/tools'
import { fetchSongLyric } from '@/store/common'
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
  Stop,
  CloseSound
} from '@/assets/icons'
import { shallowEqual } from 'react-redux'

const MusicPlayer: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { songData, allSongs, playState, songPlayWay, songLyric } =
    useAppSelector(
      (state) => ({
        songData: state.common.currentSong,
        allSongs: state.common.allSongs,
        playState: state.musicPlayer.playState,
        songPlayWay: state.musicPlayer.songPlayWay,
        songLyric: state.common.lyric
      }),
      shallowEqual
    )
  const musicPlayerRef = useRef<HTMLAudioElement>(null)
  useEffect(() => {
    if (musicPlayerRef.current?.src) {
      musicPlayerRef.current.play()
      dispatch(changePlayState())
    }
  }, [songData])
  useEffect(() => {
    if (songData[0]?.id) dispatch(fetchSongLyric(songData[0]?.id))
  }, [songData])
  const [currentSongPlayTime, setSongPlayTime] = useState(0)
  const [dragMusicProgress, setDragMusicProgress] = useState(false)
  const [currentSound, setCurrentSound] = useState({
    volume: 1,
    isClickSound: false
  })
  const currentSongInfo = useMemo(() => {
    return allSongs.find((item) => item.id === songData[0]?.id)
  }, [songData])
  return (
    <MusicPlayerWrapper>
      <div className="audioProgress">
        <Slider
          min={0}
          max={songData[0]?.time}
          value={currentSongPlayTime}
          onAfterChange={(value) => {
            setDragMusicProgress(false)
            if (musicPlayerRef.current?.currentTime) {
              musicPlayerRef.current.currentTime = value / 1000
            }
          }}
          onChange={(value) => {
            setSongPlayTime(value)
            setDragMusicProgress(true)
          }}
          tooltip={{
            formatter: (value) => {
              if (value) return formatSongDuration(value, 'millisecond')
            }
          }}
          defaultValue={0}
        />
      </div>
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
          {currentSound.isClickSound ? (
            <CloseSound
              width={25}
              height={25}
              className="sound"
              onClick={() => {
                setCurrentSound({
                  ...currentSound,
                  isClickSound: false
                })
                if (musicPlayerRef.current !== null) {
                  musicPlayerRef.current.volume = currentSound.volume
                }
              }}
            />
          ) : (
            <Sound
              width={25}
              height={25}
              className="sound"
              onClick={() => {
                setCurrentSound({
                  // 这里不设置音量 为了保留上次留存下来调节的音量
                  ...currentSound,
                  isClickSound: true
                })
                if (musicPlayerRef.current !== null) {
                  musicPlayerRef.current.volume = 0
                }
              }}
            />
          )}
        </div>
      </div>
      {songLyric && <div>{JSON.stringify(formatLyric(songLyric))}</div>}

      <audio
        src={songData[0]?.url}
        ref={musicPlayerRef}
        onVolumeChange={() => {
          console.log('音量发生改变')
        }}
        onTimeUpdate={() => {
          if (musicPlayerRef.current?.currentTime) {
            if (dragMusicProgress) return
            const musicTime = musicPlayerRef.current?.currentTime * 1000
            setSongPlayTime(musicTime)
            if (currentSongInfo?.dt && musicTime >= currentSongInfo?.dt) {
              // 歌曲播放结束 改变播放状态
              dispatch(changePlayState())
            }
          }
        }}
      />
    </MusicPlayerWrapper>
  )
}

export default memo(MusicPlayer)
