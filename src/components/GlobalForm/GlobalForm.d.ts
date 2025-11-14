type FormItemValue = never | undefined

interface FormItem {
  key: string
  name: string
  label: string
  value?: FormItemValue
  defaultValue?: FormItemValue
  rules?: Array<{ required?: boolean; message?: string }>
  placeholder?: string
  type?: string // input
}

interface FormStyleConfig {
  layout?: string
  colon?: boolean
  labelCol?: { span?: number; offset?: number }
  wrapperCol?: { span?: number; offset?: number }
}

interface FormConfig extends FormStyleConfig {
  fields: Array<FormItem>
}

interface FormState {
  [key: string]: FormItemValue
}
