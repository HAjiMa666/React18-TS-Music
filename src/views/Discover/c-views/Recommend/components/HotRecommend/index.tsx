import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import HotRecommendWrapper from './style'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchHotRecommend } from '@/views/Discover/c-views/Recommend/store/recommend'
import ModelHead from '@/components/modelHead'
import SongCard from '@/components/songCard'
import { formatNum } from '@/utils/tools'
import {
  changeDetailsOpen,
  fetchAllSongs,
  fetchSongListDetails
} from '@/store/common'
import SongListDetails from '@/components/songListDetails'
import { shallowEqual } from 'react-redux'
interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { hotRecommend, allSongs, songListDetails, songListDetailsOpen } =
    useAppSelector(
      (state) => ({
        hotRecommend: state.recommend.hotRecommend,
        allSongs: state.common.allSongs,
        songListDetails: state.common.songListDetails,
        songListDetailsOpen: state.common.songListDetailsOpen
      }),
      shallowEqual
    )
  useEffect(() => {
    dispatch(fetchHotRecommend())
  }, [])

  return (
    <HotRecommendWrapper>
      <ModelHead title={'推荐歌单'} link={''} />
      <div className="cards">
        {hotRecommend.map((item) => {
          return (
            <SongCard
              key={item.id}
              description={item.name}
              imgUrl={item.picUrl}
              playCount={formatNum(item.playCount)}
              onClick={() => {
                dispatch(fetchAllSongs({ id: item.id }))
                dispatch(fetchSongListDetails({ id: item.id }))
                dispatch(changeDetailsOpen())
              }}
            />
          )
        })}
      </div>
      <SongListDetails
        open={songListDetailsOpen}
        changeOpen={() => {
          dispatch(changeDetailsOpen())
        }}
        allSongs={allSongs}
        songListDetails={songListDetails}
      />
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
