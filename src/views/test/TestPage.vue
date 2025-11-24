<template>
  <div class="test">
    <!-- 测试 CommonHeader -->
    <section class="test-header">
      <CommonHeader
        :show-logo="true"
        :logo-src="LogoSVG"
        :show-title="true"
        title="慧恩齐家医疗科技"
        :show-sub-title="true"
        sub-title="HR系统"
        :show-actions="true"
      >
        <template #actions>
          <div class="header-actions">
            <a-button type="primary">测试</a-button>
          </div>
        </template>
      </CommonHeader>
    </section>
    <!-- 测试 CommonLoading -->
    <section class="test-loading">
      <CommonLoading size="default" tip="加载中..." :is-loading="true">
        <div :style="loadingDivStyle"></div>
      </CommonLoading>
    </section>
    <!-- 测试 CommonEmpty -->
    <section class="test-empty">
      <CommonEmpty />
    </section>
    <!-- 测试 CommonForm -->
    <section class="test-form">
      <CommonForm
        layout="horizontal"
        :colon="true"
        :col-number="4"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 20 }"
        :fields="fields"
        ref="commonFormRef"
      />
    </section>
  </div>
</template>

<script lang="ts" setup>
import CommonHeader from '@/components/CommonHeader.vue'
import CommonLoading from '@/components/CommonLoading.vue'
import CommonEmpty from '@/components/CommonEmpty.vue'
import CommonForm from '@/components/CommonForm.vue'
import LogoSVG from './assets/images/logo.svg'
import { ref } from 'vue'

const loadingDivStyle = ref({
  width: '100%',
  height: '200px',
  backgroundColor: '#fff',
  marginTop: '10px'
})

const fields: FieldItem[] = [
  {
    key: 'input',
    type: 'input',
    name: 'input',
    label: 'Input',
    placeholder: '请输入内容',
    rules: [{ required: true, message: 'Input 不能为空' }]
  },
  {
    key: 'textarea',
    type: 'textarea',
    name: 'textarea',
    label: 'TextArea',
    placeholder: '请输入内容',
    rules: [{ required: true, message: 'TextArea 不能为空' }]
  },
  {
    key: 'dateRange',
    type: 'dateRange',
    name: 'dateRange',
    label: 'DateRange',
    placeholder: '请选择日期范围',
    rules: [{ required: true, message: 'DateRange 不能为空' }]
  }
]

const commonFormRef = ref()
</script>

<style lang="less" scoped>
.test {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .test-header {
    width: 100%;
    height: 60px;
  }

  .test-empty {
    width: 100%;
    height: 200px;
    background-color: #fff;
    margin-top: 10px;
  }

  .test-form {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 20px;
    background-color: #fff;
    margin-top: 10px;
  }
}
</style>
