<template>
  <a-modal
    v-model:open="modalVisible"
    title="添加员工"
    :destroyOnClose="true"
    @ok="onOk"
    @cancel="onCancel"
  >
    <div class="form-wrapper">
      <GlobalForm ref="modalFormRef" :form-config="modalFormConfig" />
    </div>
  </a-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import GlobalForm from '@/components/GlobalForm'
import { ADD_EMPLOYEE_FORM_FIELDS } from '../const'
import { addEmployee } from '@/apis'
import { notification } from 'ant-design-vue'

const modalVisible = ref(false)
const modalFormConfig = ref<FormConfig>({
  fields: ADD_EMPLOYEE_FORM_FIELDS
})
const modalFormRef = ref<InstanceType<typeof GlobalForm>>()
const emit = defineEmits(['finish'])

function open() {
  modalVisible.value = true
}

function close() {
  modalVisible.value = false
}

async function onOk() {
  try {
    const params = await modalFormRef.value?.submit()
    const res = await addEmployee(params)
    const { success, message } = res.data as AddEmployeeResponse
    if (!success) {
      notification.error({ message: '处理失败', description: message })
      return
    }
    notification.success({ message: '处理成功', description: '已添加新员工' })
    close()
  } catch (err) {
    notification.error({
      message: '处理失败',
      description: err instanceof Error ? err.message : undefined
    })
  } finally {
    emit('finish')
  }
}

function onCancel() {
  close()
}

defineExpose({ open, close })
</script>

<style lang="less" scoped>
.form-wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 16px;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 8px;
}
</style>
