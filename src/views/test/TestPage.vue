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
          <a-button type="primary">测试</a-button>
        </template>
      </CommonHeader>
    </section>
    <!-- 测试 CommonLoading -->
    <section class="test-loading">
      <CommonLoading size="default" tip="加载中..." :is-loading="true">
        <div class="loading-inner"></div>
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
        :fields="FORM_FIELDS"
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
    <!-- 测试 CommonTable -->
    <section class="test-table">
      <CommonTable
        title="测试表格"
        :columns="TABLE_COLUMNS"
        :data-source="dataSource"
      >
        <template #header-actions>
          <a-button type="primary" style="margin-left: 8px">刷新列表</a-button>
          <a-button type="primary" style="margin-left: 8px">新增项目</a-button>
        </template>
      </CommonTable>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import CommonHeader from '@/components/CommonHeader.vue'
import CommonLoading from '@/components/CommonLoading.vue'
import CommonEmpty from '@/components/CommonEmpty.vue'
import CommonForm from '@/components/CommonForm.vue'
import CommonTable from '@/components/CommonTable.vue'
import LogoSVG from './assets/images/logo.svg'
import { FORM_FIELDS, TABLE_COLUMNS } from './constants/index'

const commonFormRef = ref()

const dataSource = computed(() => {
  // return []
  return new Array(100).fill(null).map(() => {
    const newItem: { [key: string]: unknown } = {}
    TABLE_COLUMNS.forEach((item: ColumnItem) => {
      if (typeof item.dataIndex === 'string') {
        newItem[item.dataIndex] = item.key
      }
    })
    return newItem
  })
})

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

  .test-loading {
    margin-top: 10px;

    .loading-inner {
      width: 100%;
      height: 200px;
      background-color: #fff;
    }
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

  .test-table {
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    height: 500px;
    background-color: #fff;
    margin-top: 10px;
  }
}
</style>
