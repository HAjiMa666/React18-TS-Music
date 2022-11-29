/*
 * @Author: czx
 * @Date: 2022-11-29 09:38:44
 * @LastEditTime: 2022-11-29 11:25:44
 * @LastEditors: czx
 * @Description:
 */
import { configureStore } from '@reduxjs/toolkit'

import countReducer from './modules/count'

const store = configureStore({
  reducer: {
    count: countReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
