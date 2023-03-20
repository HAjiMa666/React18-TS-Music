import { configureStore } from '@reduxjs/toolkit'

import commonReducer from './common'
import recommendReducer from '@/views/Discover/c-views/Recommend/store/recommend'
import musicPlayerReducer from '@/views/musicPlayer/store'

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    common: commonReducer,
    musicPlayer: musicPlayerReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
