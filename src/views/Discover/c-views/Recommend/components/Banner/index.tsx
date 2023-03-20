import React, { memo, useEffect, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/es/carousel'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import BannerWrapper, { BannerContent } from './style'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchRecommendBanners } from '@/views/Discover/c-views/Recommend/store/recommend'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const Banners: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(fetchRecommendBanners())
  }, [])

  const carouselRef = useRef<CarouselRef>(null)
  return (
    <BannerWrapper>
      <Carousel className="banners" effect="fade" ref={carouselRef}>
        {banners.map((item) => {
          return (
            <BannerContent
              key={item.imageUrl}
              blurImg={`${item.imageUrl}?imageView&blur=40x20`}
            >
              <LeftOutlined
                onClick={() => {
                  carouselRef.current?.prev()
                }}
              />
              <img src={item.imageUrl} />
              <RightOutlined
                onClick={() => {
                  carouselRef.current?.next()
                }}
              />
            </BannerContent>
          )
        })}
      </Carousel>
    </BannerWrapper>
  )
}

export default memo(Banners)
