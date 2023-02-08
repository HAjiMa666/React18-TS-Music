import { zxRequest } from '@/services'

export interface SongPlayListAllSongParams {
  id: number
  limit?: number
  offset?: number
}
export interface SongPlayListParams {
  id: number
  s?: number //该歌单的最近几个收藏者
}
export interface SongUrlParams {
  id: number
  level: 'standard' | 'higher' | 'exhigh' | 'lossless' | 'hires'
}

// 获取歌单中所有歌曲
export function GETSongPlayListAllSongs(params: SongPlayListAllSongParams) {
  const { id, limit = 10, offset = 1 } = params
  return zxRequest.get({
    url: `/playlist/track/all?id=${id}&limit=${limit}&offset=${offset}`
  })
}

export function GETSongPlayListDetails(params: SongPlayListParams) {
  const { id, s = 10 } = params
  return zxRequest.get({
    url: `/playlist/detail?id=${id}&s=${s}`
  })
}

// /song/url 获取歌曲URL
export function GETSongUrl(params: SongUrlParams) {
  const { id, level } = params
  return zxRequest.get({
    url: `/song/url/v1?id=${id}&level=${level}`
  })
}
