import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { ZXAxiosRequestConfig, ZXRequestConfig } from './type'

class ZXRequest {
  instance: AxiosInstance

  constructor(config: ZXAxiosRequestConfig) {
    //TODO 封装axios实例
    this.instance = axios.create(config)

    //TODO 封装全局拦截器和响应器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局成功回调', config)
        return config
      },
      (err) => {
        console.log('全局失败回调', err)
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局响应成功回调', res)
        return res.data
      },
      (err) => {
        console.log('全局相应失败回调', err)
      }
    )

    //TODO 针对单个实例的拦截请求
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailFn
    )
  }

  //TODO 封装request请求
  request<T = any>(config: ZXRequestConfig<T>) {
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors?.requestSuccessFn(config)
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  //TODO 封装get请求
  get<T = any>(config: ZXRequestConfig<T>) {
    return this.request({ ...config, method: 'get' })
  }

  //TODO 封装post请求
  post<T = any>(config: ZXRequestConfig) {
    return this.request({ ...config, method: 'post' })
  }
}

export default ZXRequest
