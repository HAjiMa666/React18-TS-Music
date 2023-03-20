import { zxRequest } from '@/services'

export function QRCodeLogin() {
  return zxRequest.get({
    url: '/login/qr/key'
  })
}
