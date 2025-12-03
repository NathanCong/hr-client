interface CommonResponse {
  success: boolean
  message: string
  data: unknown
}

interface EmployeeItem {
  empId: string
  empName: string
  empEmail: string
  empStatus: string
  creator: string
  createTime: string
  modifier: string
  modifyTime: string
}

/**
 * getEmployees 请求参数
 */
interface GetEmployeesRequest {
  empId?: string
  empName?: string
  empEmail?: string
  empStatus?: string
  pageNum: number
  pageSize: number
}

/**
 * getEmployees 响应参数
 */
interface GetEmployeesResponse extends CommonResponse {
  data: {
    list: EmployeeItem[]
    pageNum: number
    pageSize: number
    total: number
  }
}

/**
 * addEmployee 请求参数
 */
interface AddEmployeeRequest {
  empId: string
  empName: string
  empEmail: string
  empStatus: string
  creator: string
}

/**
 * addEmployee 响应参数
 */
interface AddEmployeeResponse extends CommonResponse {
  data: null
}

/**
 * delEmployee 请求参数
 */
interface DelEmployeeRequest {
  empId: string
}

/**
 * delEmployee 响应参数
 */
interface DelEmployeeResponse extends CommonResponse {
  data: null
}
