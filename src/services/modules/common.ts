import { zxRequest } from '@/services'

export interface SongPlayListParams {
  id?: number
  limit?: number
  offset?: number
}
export interface SongUrlParams {
  id: number
  level: 'standard' | 'higher' | 'exhigh' | 'lossless' | 'hires'
}

// 获取歌单详情
export function GETSongPlayListDetails(params: SongPlayListParams) {
  const { id, limit = 10, offset = 1 } = params
  return zxRequest.get({
    url: `/playlist/track/all?id=${id}&limit=${limit}&offset=${offset}`
  })
}

// /song/url 获取歌曲URL
export function GETSongUrl(params: SongUrlParams) {
  const { id, level } = params
  return zxRequest.get({
    url: `/song/url/v1?id=${id}&level=${level}`
  })
}
