interface TableColumn {
  customRender?: function
  dataIndex: string | string[]
  fixed?: 'left' | 'right' | boolean
  key: string
  title: string
  width?: string | number
}
