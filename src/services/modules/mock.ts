import { mockRequest } from '..'

mockRequest
  .request({
    url: '/getInfo',
    method: 'get',
    interceptors: {
      requestSuccessFn: (config) => {
        console.log('单次请求的请求拦截器')
        return config
      },
      responseSuccessFn: (config) => {
        console.log('单次请求的回应拦截器')
        return config
      }
    }
  })
  .then((res) => {
    console.log('mockRequest', res)
  })
