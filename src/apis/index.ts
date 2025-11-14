import { get, post } from '@/utils/request'

/**
 * 获取员工列表
 */
export function getEmployeeList() {
  return get('/getEmployees')
}

/**
 * 添加新员工
 */
export function addEmployee(data: unknown) {
  return post('/addEmployee', data)
}
