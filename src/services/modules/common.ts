import { zxRequest } from '@/services'

export interface SongPlayListParams {
  id?: number
  limit?: number
  offset?: number
}

// 获取歌单详情
export function GETSongPlayListDetails(params: SongPlayListParams) {
  const { id, limit = 10, offset = 1 } = params
  return zxRequest.get({
    url: `/playlist/track/all?id=${id}&limit=${limit}&offset=${offset}`
  })
}
