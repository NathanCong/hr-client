import { get } from '@/utils/request'

/**
 * 获取员工列表
 */
export function getEmployeeList() {
  return get('/getEmployees')
}
