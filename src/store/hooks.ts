/*
 * @Author: czx
 * @Date: 2022-11-29 10:49:18
 * @LastEditTime: 2022-11-29 10:50:54
 * @LastEditors: czx
 * @Description:
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './index'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
