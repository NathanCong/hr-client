import type {
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse
} from 'axios'
import { notification } from 'ant-design-vue'

export function handleRequestSuccess(config: InternalAxiosRequestConfig) {
  return config
}

export function handleRequestFailure(error: AxiosError) {
  notification.error({ message: '网络请求错误', description: error.message })
  return Promise.reject(error)
}

export function handleResponseSuccess(response: AxiosResponse) {
  return response
}

function getErrorMessageFromStatus(status: number) {
  let errorMessage = ''
  switch (String(status)) {
    case '400':
      errorMessage = '客户端请求错误'
      break
    case '401':
      errorMessage = '未授权，需要身份验证'
      break
    case '403':
      errorMessage = '禁止访问，服务器拒绝请求'
      break
    case '404':
      errorMessage = '请求的资源不存在'
      break
    case '500':
      errorMessage = '服务器内部错误'
      break
    case '502':
      errorMessage = '网关错误'
      break
    case '503':
      errorMessage = '服务不可用'
      break
    default:
      errorMessage = `异常状态码 ${status}`
  }
  return errorMessage
}

export function handleResponseFailure(error: AxiosError) {
  let description = ''
  if (error.response?.status) {
    // 服务器返回了错误状态码
    description = getErrorMessageFromStatus(error.response.status)
  } else if (error.request) {
    // 请求已经发送，但没有收到响应
    description = '网络连接异常或服务器无响应'
  } else {
    // 其他未知错误
    description = error.message || '未知错误'
  }
  notification.error({ message: '服务响应异常', description })
  return Promise.reject(error)
}
