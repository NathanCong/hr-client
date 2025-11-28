import { get, post } from '@/utils/request'
import type { AxiosResponse } from 'axios'

/**
 * 获取员工列表
 */
export function getEmployees(): Promise<AxiosResponse<GetEmployeesResponse>> {
  return get('/getEmployees')
}

/**
 * 添加新员工
 */
export function addEmployee(
  data: AddEmployeeRequest
): Promise<AxiosResponse<AddEmployeeResponse>> {
  return post('/addEmployee', data)
}
