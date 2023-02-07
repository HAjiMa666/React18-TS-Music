import { createSlice } from '@reduxjs/toolkit'

interface InitialStateProps {
  songListDetailsOpen: boolean
}

const initialState: InitialStateProps = {
  songListDetailsOpen: false
}

const CommonStore = createSlice({
  name: 'commonData',
  initialState: initialState,
  reducers: {
    changeDetailsOpen: (state) => {
      state.songListDetailsOpen = !state.songListDetailsOpen
    }
  }
})

export const { changeDetailsOpen } = CommonStore.actions

export default CommonStore.reducer
