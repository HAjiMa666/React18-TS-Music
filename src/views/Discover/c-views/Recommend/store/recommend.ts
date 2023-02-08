import {
  GETSongPlayListAllSongs,
  GETSongPlayListDetails,
  SongPlayListAllSongParams
} from '@/services/modules/common'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { GETBanner, GETHotRecommend } from '../service/recommend'
import { Banner, HotRecommends, SongListDetails } from '../types/recommend'
import type { SongPlayListParams } from '@/services/modules/common'

export const fetchRecommendBanners = createAsyncThunk(
  'recommends/banners',
  async () => {
    const res = await GETBanner()
    return res.banners
  }
)

export const fetchHotRecommend = createAsyncThunk('recommend/hot', async () => {
  const res = await GETHotRecommend(10)
  return res.result
})

export const fetchAllSongs = createAsyncThunk(
  'songList/allSongs',
  async (params: SongPlayListAllSongParams) => {
    const res = await GETSongPlayListAllSongs(params)
    return res.songs
  }
)

export const fetchSongListDetails = createAsyncThunk(
  'songList/details',
  async (params: SongPlayListParams) => {
    const res = await GETSongPlayListDetails(params)
    return res.playlist
  }
)

type InitialProps = {
  banners: Banner[]
  hotRecommend: HotRecommends[]
  allSongs: any
  songListDetails: SongListDetails | undefined
}

const initialState: InitialProps = {
  banners: [],
  hotRecommend: [],
  allSongs: [],
  songListDetails: undefined
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: initialState,
  reducers: {},
  // 设置异步状态进入state，官方推荐的方法，但是代码量会增大很多
  extraReducers(builder) {
    return builder
      .addCase(fetchRecommendBanners.fulfilled, (state, action) => {
        state.banners = action.payload
      })
      .addCase(fetchHotRecommend.fulfilled, (state, action) => {
        state.hotRecommend = action.payload
      })
      .addCase(fetchAllSongs.fulfilled, (state, action) => {
        state.allSongs = action.payload
      })
      .addCase(fetchSongListDetails.fulfilled, (state, action) => {
        state.songListDetails = action.payload
      })
  }
})

export default recommendSlice.reducer
