interface ColumnItem {
  key: string
  dataIndex?: string | string[]
  title: string
  fixed?: 'left' | 'right' | boolean
  width?: number
  customRender?: function
}
