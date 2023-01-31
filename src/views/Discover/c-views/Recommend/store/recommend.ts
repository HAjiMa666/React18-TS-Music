import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { GETBanner, GETHotRecommend } from '../service/recommend'
import { Banner, HotRecommends } from '../types/recommend'

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

type InitialProps = {
  banners: Banner[]
  hotRecommend: HotRecommends[]
}

const initialState: InitialProps = {
  banners: [],
  hotRecommend: []
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
  }
})

export default recommendSlice.reducer
