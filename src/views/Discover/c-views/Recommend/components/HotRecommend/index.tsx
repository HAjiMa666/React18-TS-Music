import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import HotRecommendWrapper from './style'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
  fetchHotRecommend,
  fetchHotRecommendDetails
} from '@/views/Discover/c-views/Recommend/store/recommend'
import ModelHead from '@/components/modelHead'
import SongCard from '@/components/songCard'
import { formatNum } from '@/utils/tools'
import { changeDetailsOpen } from '@/store/common'
import SongListDetails from '@/components/songListDetails'
import { shallowEqual } from 'react-redux'
interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { hotRecommend, hotRecommendSongDetails } = useAppSelector(
    (state) => ({
      hotRecommend: state.recommend.hotRecommend,
      hotRecommendSongDetails: state.recommend.hotRecommendDetails
    }),
    shallowEqual
  )
  const { songListDetailsOpen } = useAppSelector(
    (state) => ({
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
                dispatch(fetchHotRecommendDetails({ id: item.id }))
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
        dataSource={hotRecommendSongDetails}
      />
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
