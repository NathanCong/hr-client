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
        layout="vertical"
        :colon="true"
        :col-number="3"
        :label-col="{ span: 24 }"
        :wrapper-col="{ span: 24 }"
        :fields="fields"
        ref="commonFormRef"
      />
      <section class="form-buttons">
        <a-button type="default" style="margin-left: 8px" @click="onReset">
          重置
        </a-button>
        <a-button type="primary" style="margin-left: 8px" @click="onSubmit">
          提交
        </a-button>
      </section>
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
    name: 'input',
    label: 'Input',
    type: 'input',
    rules: [{ required: true, message: 'Input 不能为空' }],
    options: {
      placeholder: '请输入内容'
    }
  },
  {
    key: 'textarea',
    name: 'textarea',
    label: 'TextArea',
    type: 'textarea',
    rules: [{ required: true, message: 'TextArea 不能为空' }],
    options: {
      placeholder: '请输入内容',
      height: '32px'
    }
  },
  {
    key: 'dateRange',
    name: 'dateRange',
    label: 'DateRange',
    type: 'dateRange',
    rules: [{ required: true, message: 'DateRange 不能为空' }],
    options: {
      placeholder: '请选择日期范围'
    }
  }
]

const commonFormRef = ref()

function onReset() {
  commonFormRef.value.resetFields()
}

function onSubmit() {
  commonFormRef.value
    .submit()
    .then((res: unknown) => {
      console.log(res)
    })
    .catch((err: unknown) => {
      console.warn(err)
    })
}
</script>

<style lang="less" scoped>
.test {
  width: 100%;
  height: auto;
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
    display: flex;
    flex-direction: column;

    .form-buttons {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
