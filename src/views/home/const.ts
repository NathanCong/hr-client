export const EMPLOYEE_LIST_TABLE_COLUMNS: TableColumn[] = [
  {
    title: '员工ID',
    dataIndex: 'empId',
    key: 'empId',
    width: 120
  },
  {
    title: '员工姓名',
    dataIndex: 'empName',
    key: 'empName'
  },
  {
    title: '员工邮箱',
    dataIndex: 'empEmail',
    key: 'empEmail'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime'
  },
  {
    title: '操作',
    dataIndex: 'actions',
    key: 'actions',
    width: 200,
    fixed: 'right'
  }
]

export const ADD_EMPLOYEE_FORM_FIELDS: FormItem[] = [
  {
    key: 'empName',
    name: 'empName',
    label: '员工姓名',
    rules: [{ required: true, message: '员工姓名不能为空' }],
    placeholder: '请输入员工姓名',
    type: 'input'
  },
  {
    key: 'empEmail',
    name: 'empEmail',
    label: '员工邮箱',
    rules: [{ required: true, message: '员工邮箱不能为空' }],
    placeholder: '请输入员工邮箱',
    type: 'input'
  }
]
