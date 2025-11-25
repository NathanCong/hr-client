/**
 * Form 字段
 */
export const FORM_FIELDS: FieldItem[] = [
  {
    key: 'input1',
    name: 'input1',
    label: 'Input1',
    type: 'input',
    rules: [{ required: true, message: 'Input1 不能为空' }],
    options: {
      placeholder: '请输入内容'
    }
  },
  {
    key: 'textarea1',
    name: 'textarea1',
    label: 'TextArea1',
    type: 'textarea',
    rules: [{ required: true, message: 'TextArea1 不能为空' }],
    options: {
      placeholder: '请输入内容',
      height: '32px'
    }
  },
  {
    key: 'dateRange1',
    name: 'dateRange1',
    label: 'DateRange1',
    type: 'dateRange',
    rules: [{ required: true, message: 'DateRange1 不能为空' }],
    options: {
      placeholder: '请选择日期范围'
    }
  },
  {
    key: 'input2',
    name: 'input2',
    label: 'Input2',
    type: 'input',
    rules: [{ required: true, message: 'Input2 不能为空' }],
    options: {
      placeholder: '请输入内容'
    }
  },
  {
    key: 'textarea2',
    name: 'textarea2',
    label: 'TextArea2',
    type: 'textarea',
    rules: [{ required: true, message: 'TextArea2 不能为空' }],
    options: {
      placeholder: '请输入内容',
      height: '32px'
    }
  },
  {
    key: 'dateRange2',
    name: 'dateRange2',
    label: 'DateRange2',
    type: 'dateRange',
    rules: [{ required: true, message: 'DateRange2 不能为空' }],
    options: {
      placeholder: '请选择日期范围'
    }
  }
]

/**
 * Table 列
 */
export const TABLE_COLUMNS: ColumnItem[] = [
  {
    key: 'column1',
    dataIndex: 'column1',
    title: 'Column1'
  },
  {
    key: 'column2',
    dataIndex: 'column2',
    title: 'Column2'
  },
  {
    key: 'column3',
    dataIndex: 'column3',
    title: 'Column3'
  },
  {
    key: 'column4',
    dataIndex: 'column4',
    title: 'Column4'
  },
  {
    key: 'column5',
    dataIndex: 'column5',
    title: 'Column5'
  },
  {
    key: 'actions',
    title: 'Actions',
    fixed: 'right'
  }
]
