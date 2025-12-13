import { get, post } from '@/utils/request'
import type { AxiosResponse } from 'axios'

/**
 * 获取员工列表
 */
export function getEmployees(
  params: GetEmployeesRequest
): Promise<AxiosResponse<GetEmployeesResponse>> {
  return get('/employee/search', params)
}

/**
 * 添加员工
 */
export function addEmployee(
  data: AddEmployeeRequest
): Promise<AxiosResponse<AddEmployeeResponse>> {
  return post('/employee/insert', data)
}

/**
 * 删除员工
 */
export function delEmployee(
  data: DelEmployeeRequest
): Promise<AxiosResponse<DelEmployeeResponse>> {
  return post('/employee/delete', data)
}
