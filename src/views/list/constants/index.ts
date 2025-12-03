import { EMPLOYEE_STATUS_MAP } from '@/constants/index'

function getEmployeeStatusOptions() {
  return Object.keys(EMPLOYEE_STATUS_MAP).map((key) => {
    return {
      value: key,
      label: EMPLOYEE_STATUS_MAP[Number(key)]
    }
  })
}

/**
 * 员工搜索 Form Fields
 */
export const EMPLOYEES_FORM_FIELDS: FieldItem[] = [
  {
    key: 'empId',
    name: 'empId',
    label: '员工编号',
    type: 'input',
    options: {
      placeholder: '请输入员工编号',
      addonBefore: 'HE',
      allowClear: true
    }
  },
  {
    key: 'empName',
    name: 'empName',
    label: '员工姓名',
    type: 'input',
    options: {
      placeholder: '请输入员工姓名',
      allowClear: true
    }
  },
  {
    key: 'empEmail',
    name: 'empEmail',
    label: '员工邮箱',
    type: 'input',
    options: {
      placeholder: '请输入员工邮箱',
      allowClear: true
    }
  },
  {
    key: 'empStatus',
    name: 'empStatus',
    label: '员工状态',
    type: 'select',
    options: {
      placeholder: '请选择员工状态',
      options: getEmployeeStatusOptions(),
      allowClear: true
    }
  }
]

/**
 * 员工列表 Table Columns
 */
export const EMPLOYEES_TABLE_COLUMNS: ColumnItem[] = [
  {
    key: 'empId',
    dataIndex: 'empId',
    title: '员工编号'
  },
  {
    key: 'empName',
    dataIndex: 'empName',
    title: '员工姓名'
  },
  {
    key: 'empEmail',
    dataIndex: 'empEmail',
    title: '员工邮箱'
  },
  {
    key: 'empStatus',
    dataIndex: 'empStatus',
    title: '员工状态'
  },
  {
    key: 'creator',
    dataIndex: 'creator',
    title: '创建人'
  },
  {
    key: 'createTime',
    dataIndex: 'createTime',
    title: '创建时间'
  },
  {
    key: 'modifier',
    dataIndex: 'modifier',
    title: '修改人'
  },
  {
    key: 'modifyTime',
    dataIndex: 'modifyTime',
    title: '修改时间'
  },
  {
    title: '操作',
    dataIndex: 'actions',
    key: 'actions',
    width: 160,
    fixed: 'right'
  }
]

/**
 * 添加员工 Form Fields
 */
export const ADD_EMPLOYEE_FORM_FIELDS: FieldItem[] = [
  {
    key: 'empId',
    name: 'empId',
    label: '员工编号',
    type: 'input',
    rules: [{ required: true, message: '员工编号不能为空' }],
    options: {
      placeholder: '请输入员工编号',
      addonBefore: 'HE',
      allowClear: true
    }
  },
  {
    key: 'empName',
    name: 'empName',
    label: '员工姓名',
    type: 'input',
    rules: [{ required: true, message: '员工姓名不能为空' }],
    options: {
      placeholder: '请输入员工姓名',
      allowClear: true
    }
  },
  {
    key: 'empEmail',
    name: 'empEmail',
    label: '员工邮箱',
    type: 'input',
    rules: [{ required: true, message: '员工邮箱不能为空' }],
    options: {
      placeholder: '请输入员工邮箱',
      allowClear: true
    }
  },
  {
    key: 'empStatus',
    name: 'empStatus',
    label: '员工状态',
    type: 'select',
    rules: [{ required: true, message: '员工状态不能为空' }],
    options: {
      placeholder: '请选择员工状态',
      options: getEmployeeStatusOptions(),
      allowClear: true
    }
  }
]
