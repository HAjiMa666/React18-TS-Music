/*
 * @Author: czx
 * @Date: 2022-11-29 10:25:08
 * @LastEditTime: 2022-11-29 14:17:14
 * @LastEditors: czx
 * @Description:
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

const countSlice = createSlice({
  name: 'counts',
  initialState: {
    defaultCount: 1,
    sum: 100
  },
  reducers: {
    add(state, action: PayloadAction<number>) {
      state.sum += action.payload
    }
  }
})

export const { add } = countSlice.actions
export const selectCount = (state: RootState) => state.count.sum
export default countSlice.reducer
