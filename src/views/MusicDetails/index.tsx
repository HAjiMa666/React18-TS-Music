import React, { memo, useEffect, useMemo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { MusicDetailsWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { formatLyric } from '@/utils/tools'
import { Record } from '@/assets/icons'
interface IProps {
  children?: ReactNode
}

const MusicDetails: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { songLyric, songInfo, allSongs } = useAppSelector((state) => ({
    songLyric: state.common.lyric,
    songInfo: state.common.currentSong,
    allSongs: state.common.allSongs
  }))
  const [currentLyric, setLyric] = useState<any>([])
  useEffect(() => {
    if (!songLyric) return
    setLyric(formatLyric(songLyric))
  }, [songLyric])
  const currentSongInfo = useMemo(() => {
    return allSongs.find((item) => item.id === songInfo[0]?.id)
  }, [songInfo])
  return (
    <MusicDetailsWrapper>
      <div className="musicRecord">
        <div className="recordIcon">
          <img src={currentSongInfo?.al.picUrl} />
        </div>
      </div>

      <div className="lyric">
        {currentLyric.map((item: any) => {
          console.log(item)
          return <div key={item?.time}>{item?.content}</div>
        })}
      </div>
    </MusicDetailsWrapper>
  )
}

export default memo(MusicDetails)
