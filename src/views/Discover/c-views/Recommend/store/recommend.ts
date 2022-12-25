import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { GETBanner } from '../service/recommend'

export const fetchRecommendBanners = createAsyncThunk(
  'recommends/banners',
  async (args, { dispatch }) => {
    const res = await GETBanner()
    dispatch(storeBanners(res.banners))
    return res.banners
  }
)

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    banners: []
  },
  reducers: {
    storeBanners(state, action: PayloadAction<[]>) {
      state.banners = action.payload
    }
  },
  // 设置异步状态进入state，官方推荐的方法，但是代码量会增大很多
  extraReducers(builder) {
    return builder.addCase(fetchRecommendBanners.fulfilled, (state, action) => {
      state.banners = action.payload
    })
  }
})

const { storeBanners } = recommendSlice.actions

export default recommendSlice.reducer
