import { zxRequest } from '@/services'

export function GETBanner() {
  return zxRequest.get({
    url: '/banner'
  })
}

export function GETHotRecommend(limit = 30) {
  return zxRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}
