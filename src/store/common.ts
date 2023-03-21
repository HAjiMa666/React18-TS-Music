import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  GETSongUrl,
  GETSongPlayListAllSongs,
  GETSongPlayListDetails,
  SongPlayListAllSongParams,
  SongPlayListParams
} from '@/services/modules/common'
import type { SongUrlParams } from '@/services/modules/common'
import { SongListDetails } from '@/types/recommend'
import { Song } from '@/types/common'
import { checkLoginStatus } from '@/views/PersonalInfo/services/personInfo'
interface InitialStateProps {
  songListDetailsOpen: boolean
  currentSong: any
  allSongs: Song[]
  songListDetails: SongListDetails | undefined
  loginStatus: any
}

const initialState: InitialStateProps = {
  songListDetailsOpen: false,
  currentSong: '',
  allSongs: [],
  songListDetails: undefined,
  loginStatus: ''
}

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

export const fetchSongUrl = createAsyncThunk(
  'song/url',
  async (params: SongUrlParams) => {
    const res = await GETSongUrl(params)
    return res.data
  }
)

export const fetchLoginStatus = createAsyncThunk(
  'login/status',
  async (cookie: string) => {
    const res = await checkLoginStatus(cookie)
    return res.data
  }
)

const CommonStore = createSlice({
  name: 'commonData',
  initialState: initialState,
  reducers: {
    changeDetailsOpen: (state) => {
      state.songListDetailsOpen = !state.songListDetailsOpen
    }
  },
  extraReducers(builder) {
    return builder
      .addCase(fetchSongUrl.fulfilled, (state, action) => {
        state.currentSong = action.payload
      })
      .addCase(fetchAllSongs.fulfilled, (state, action) => {
        state.allSongs = action.payload
      })
      .addCase(fetchSongListDetails.fulfilled, (state, action) => {
        state.songListDetails = action.payload
      })
      .addCase(fetchLoginStatus.fulfilled, (state, action) => {
        state.loginStatus = action.payload
      })
  }
})

export const { changeDetailsOpen } = CommonStore.actions

export default CommonStore.reducer
