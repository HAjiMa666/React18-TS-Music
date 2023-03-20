import { zxRequest } from '@/services'

export function getQRCodeKey() {
  return zxRequest.get({
    url: `/login/qr/key?timeStamp=${new Date().getTime()}`
  })
}

export function getQRCodeImg(key: string | number, qrimg?: boolean) {
  return zxRequest.get({
    url: `/login/qr/create?timeStamp=${new Date().getTime()}&&key=${key}&&qrimg=${qrimg}`
  })
}

export function checkIsScanQRCode(key: string | number) {
  return zxRequest.get({
    url: `/login/qr/check?timeStamp=${new Date().getTime()}&&key=${key}`
  })
}
