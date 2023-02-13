import { createSlice } from '@reduxjs/toolkit'
import type { MusicPlayerInitialState } from '@/types/musicPlayer'

const initialState: MusicPlayerInitialState = {
  playState: false,
  songPlayWay: 0
}

const MusicPlayer = createSlice({
  name: 'musicPlayer',
  initialState: initialState,
  reducers: {
    changePlayState: (state) => {
      state.playState = !state.playState
    },
    changeSongPlayWay: (state) => {
      switch (state.songPlayWay) {
        case 0:
          state.songPlayWay = 1
          break
        case 1:
          state.songPlayWay = 2
          break
        case 2:
          state.songPlayWay = 0
          break
      }
    }
  }
})

export const { changePlayState, changeSongPlayWay } = MusicPlayer.actions
export default MusicPlayer.reducer
