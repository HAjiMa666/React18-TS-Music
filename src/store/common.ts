import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
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
interface InitialStateProps {
  songListDetailsOpen: boolean
  currentSong: any
  allSongs: Song[]
  songListDetails: SongListDetails | undefined
  musicPlayerRef: HTMLAudioElement | undefined
}

const initialState: InitialStateProps = {
  songListDetailsOpen: false,
  currentSong: '',
  allSongs: [],
  songListDetails: undefined,
  musicPlayerRef: undefined
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

const CommonStore = createSlice({
  name: 'commonData',
  initialState: initialState,
  reducers: {
    changeDetailsOpen: (state) => {
      state.songListDetailsOpen = !state.songListDetailsOpen
    },
    setMusicPlayerRef: (state, action) => {
      state.musicPlayerRef = action.payload
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
  }
})

export const { changeDetailsOpen, setMusicPlayerRef } = CommonStore.actions

export default CommonStore.reducer
