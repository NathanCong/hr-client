interface FieldItem {
  key: string
  type: 'input' | 'textarea' | 'dateRange'
  name: string
  label: string
  value?: never
  defaultValue?: never
  placeholder?: string
  rules?: Array<{ required?: boolean; message?: string }>
}

interface FormState {
  [key: string]: undefined | never
}
