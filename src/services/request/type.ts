import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ZXInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailFn?: (err: any) => any
}

export interface ZXAxiosRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: ZXInterceptors<T>
}
