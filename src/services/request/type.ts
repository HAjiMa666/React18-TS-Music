import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

export interface ZXInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestFailFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailFn?: (err: any) => any
}

export interface ZXRequestInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailFn?: (err: any) => any
}

export interface ZXAxiosRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: ZXInterceptors<T>
}

export interface ZXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ZXRequestInterceptors<T>
}
