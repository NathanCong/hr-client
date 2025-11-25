interface ColumnItem {
  key: string
  dataIndex?: string | string[]
  title: string
  fixed?: 'left' | 'right' | boolean
  width?: string | number
  customRender?: function
}
