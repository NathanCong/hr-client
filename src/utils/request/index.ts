import axios from 'axios'
import type { AxiosInstance } from 'axios'
import {
  handleRequestSuccess,
  handleRequestFailure,
  handleResponseSuccess,
  handleResponseFailure
} from './utils'

/**
 * 创建axios实例
 */
const request: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000 * 100,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

/**
 * 请求拦截器
 */
request.interceptors.request.use(handleRequestSuccess, handleRequestFailure)

/**
 * 响应拦截器
 */
request.interceptors.response.use(handleResponseSuccess, handleResponseFailure)

/**
 * GET 请求
 */
export function get(url: string, params?: unknown) {
  return request.get(url, { params })
}

/**
 * POST 请求（默认 JSON）
 */
export function post(url: string, data?: unknown) {
  return request.post(url, data)
}
