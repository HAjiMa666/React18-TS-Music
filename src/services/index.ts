/*
 * @Author: czx
 * @Date: 2022-11-27 15:30:38
 * @LastEditTime: 2022-11-27 15:49:00
 * @LastEditors: czx
 * @Description:
 */
import ZXRequest from './request'
import { BASE_URL, MOCK_URL, TIME_OUT } from './config'

const zxRequest = new ZXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

const mockRequest = new ZXRequest({
  baseURL: MOCK_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      console.log('mock request config', config)
      return config
    },
    responseSuccessFn: (config) => {
      console.log('mock response config', config)
      return config
    }
  }
})

export { zxRequest, mockRequest }
