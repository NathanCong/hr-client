<template>
  <a-modal
    v-model:open="modalVisible"
    title="添加员工"
    :destroyOnClose="true"
    @ok="onOk"
    @cancel="onCancel"
  >
    <div class="form-wrapper">
      <CommonForm
        layout="horizontal"
        :colon="true"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 20 }"
        :fields="ADD_EMPLOYEE_FORM_FIELDS"
        ref="commonFormRef"
      />
    </div>
  </a-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { CommonForm } from '@/components/index'
import { ADD_EMPLOYEE_FORM_FIELDS } from '../constants'
import { addEmployee } from '@/apis'
import { notification } from 'ant-design-vue'

const modalVisible = ref(false)

function open() {
  modalVisible.value = true
}

function close() {
  modalVisible.value = false
}

defineExpose({ open, close })

const commonFormRef = ref<InstanceType<typeof CommonForm>>()
const emit = defineEmits(['afterAdd'])

async function onOk() {
  try {
    const params = await commonFormRef.value?.submit()
    const requestParams: AddEmployeeRequest = {
      empId: '',
      empName: '',
      empEmail: '',
      empStatus: '',
      creator: '丛雨楠<congyunan@126.com>',
      ...params
    }
    const res = await addEmployee(requestParams)
    const { success, message } = res.data
    if (!success) {
      notification.error({ message: '处理失败', description: message })
      return
    }
    notification.success({ message: '处理成功', description: '已添加新员工' })
    close()
    emit('afterAdd')
  } catch (err) {
    console.error(err)
  }
}

function onCancel() {
  close()
}
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
