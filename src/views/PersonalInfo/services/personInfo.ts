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
    url: `/login/qr/check?timeStamp=${new Date().getTime()}&&key=${key}`,
    withCredentials: true
  })
}

export function getPersonInfo(cookie: string) {
  return zxRequest.post({
    url: '/user/account',
    withCredentials: true,
    data: {
      cookie
    }
  })
}

export function checkLoginStatus(cookie: string) {
  return zxRequest.post({
    url: '/login/status',
    data: {
      cookie
    }
  })
}
