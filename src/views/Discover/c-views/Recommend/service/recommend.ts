import { zxRequest } from '@/services'

export function GETBanner() {
  return zxRequest.get({
    url: '/banner'
  })
}
