interface EmployeeListItem {
  empId: number | string
  empName: string
  empEmail: string
  createTime: string
}

interface GetEmployeeListResponse {
  success: boolean
  message: string
  data: {
    total: number
    list: EmployeeListItem[]
  }
}

interface AddEmployeeResponse {
  success: boolean
  message: string
  data: null
}
