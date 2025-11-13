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

const modalVisible = ref(false)
const modalFormConfig = ref<FormConfig>({
  fields: ADD_EMPLOYEE_FORM_FIELDS
})
const modalFormRef = ref<InstanceType<typeof GlobalForm>>()

function open() {
  modalVisible.value = true
}

function close() {
  modalVisible.value = false
}

async function onOk() {
  try {
    const res = await modalFormRef.value?.submit()
    console.log('res', res)
    // close()
  } catch (err) {
    console.warn(err)
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
