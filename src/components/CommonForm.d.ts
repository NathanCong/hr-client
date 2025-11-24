interface FieldItem {
  key: string
  name: string
  label: string
  type: 'input' | 'textarea' | 'dateRange'
  value?: never
  defaultValue?: never
  rules?: Array<{ required?: boolean; message?: string }>
  options?: {
    placeholder?: string
    width?: string
    height?: string
  }
}

interface FieldRow {
  rowKey: string
  fieldCols: Array<FieldItem>
}

interface FormState {
  [key: string]: undefined | never
}
