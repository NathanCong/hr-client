<template>
  <div class="common-form">
    <a-form
      :layout="layout"
      :colon="colon"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      :model="formState"
      ref="commonFormRef"
    >
      <a-form-item
        v-for="field in fields"
        :key="field.key"
        :label="field.label"
        :name="field.name"
        :rules="field.rules"
      >
        <!-- Input 组件 -->
        <template v-if="field.type === 'input'">
          <a-input
            v-model:value="formState[field.name]"
            :placeholder="field.placeholder"
            allowClear
          />
        </template>
        <!-- Textarea 组件 -->
        <template v-if="field.type === 'textarea'">
          <a-textarea
            v-model:value="formState[field.name]"
            :placeholder="field.placeholder"
            allowClear
            style="width: 100%; height: 200px"
          />
        </template>
        <!-- DateRange 组件 -->
        <template v-if="field.type === 'dateRange'">
          <a-range-picker
            v-model:value="formState[field.name]"
            style="width: 100%"
            allowClear
          />
        </template>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import type { FormInstance } from 'ant-design-vue'

const props = withDefaults(
  defineProps<{
    layout?: 'vertical' | 'horizontal' | 'inline'
    colon?: boolean
    labelCol?: { span: number }
    wrapperCol?: { span: number }
    fields?: FieldItem[]
  }>(),
  {
    layout: 'vertical',
    colon: false,
    labelCol: () => ({ span: 24 }),
    wrapperCol: () => ({ span: 24 }),
    fields: () => []
  }
)

const formState = reactive<FormState>({})
const commonFormRef = ref<FormInstance>()

watch(
  () => props.fields,
  (newFields) => {
    newFields.forEach((field) => {
      formState[field.name] = field.value || field.defaultValue
    })
  },
  { immediate: true }
)

defineExpose({
  getFormState: () => formState,
  setFormState: (data: FormState) => {
    Object.assign(formState, data)
  },
  reset: () => {
    commonFormRef.value?.resetFields()
  },
  submit: () => commonFormRef.value?.validateFields()
})
</script>

<style lang="less" scoped>
.common-form {
  width: 100%;
  height: 100%;
}
</style>
