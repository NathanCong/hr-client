interface CommonResponse {
  success: boolean
  message: string
  data: unknown
}

interface EmployeeItem {
  empId: number | string
  empName: string
  empEmail: string
  createTime: string
}

interface GetEmployeesResponse extends CommonResponse {
  data: {
    list: EmployeeItem[]
    pageNum?: number
    pageSize?: number
    total?: number
  }
}

interface AddEmployeeRequest {
  empName: string
  empEmail: string
}

interface AddEmployeeResponse extends CommonResponse {
  data: null
}
