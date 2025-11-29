<template>
  <div class="list">
    <section class="form-wrapper">
      <CommonForm
        layout="vertical"
        :colon="true"
        :col-number="4"
        :label-col="{ span: 24 }"
        :wrapper-col="{ span: 24 }"
        :fields="EMPLOYEES_FORM_FIELDS"
        ref="commonFormRef"
      >
        <template #actions>
          <a-button type="default" style="margin-left: 8px" @click="onReset">
            <template #icon><ReloadOutlined /></template>重置
          </a-button>
          <a-button type="primary" style="margin-left: 8px" @click="onSearch">
            <template #icon><SearchOutlined /></template>搜索
          </a-button>
        </template>
      </CommonForm>
    </section>
    <section class="list-wrapper">
      <CommonTable
        title="员工列表"
        :columns="EMPLOYEES_TABLE_COLUMNS"
        :dataSource="dataSource"
        :pagination="pagination"
        :isLoading="requestLoading"
        @pageChange="onPageChange"
      >
        <template #header-actions>
          <a-button type="primary" @click="onModalOpen">
            <template #icon><PlusOutlined /></template>添加新员工
          </a-button>
        </template>
        <template #thead-cell="{ title }">
          <span class="thead-cell">{{ title }}</span>
        </template>
        <template #tbody-cell="{ column, text }">
          <span class="tbody-cell">
            <template v-if="column.key === 'actions'">
              <span class="action-links">
                <a-button type="link">查看</a-button>
                <a-button type="link">删除</a-button>
              </span>
            </template>
            <template v-else>{{ text || '——' }}</template>
          </span>
        </template>
      </CommonTable>
    </section>
    <AddEmployeeModal ref="addEmployeeModalRef" @afterAdd="onModalAfterAdd" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import {
  ReloadOutlined,
  SearchOutlined,
  PlusOutlined
} from '@ant-design/icons-vue'
import { CommonForm, CommonTable } from '@/components/index'
import { EMPLOYEES_FORM_FIELDS, EMPLOYEES_TABLE_COLUMNS } from './constants'
import { getEmployees } from '@/apis'
import { notification } from 'ant-design-vue'
import AddEmployeeModal from './components/AddEmployeeModal.vue'

const requestLoading = ref(false)
const commonFormRef = ref<InstanceType<typeof CommonForm>>()
const dataSource = ref<EmployeeItem[]>([])
const pagination = ref<Pagination>({ pageNum: 1, pageSize: 20, total: 0 })

async function requestEmployees(pageNum: number) {
  requestLoading.value = true
  try {
    const params = await commonFormRef.value?.submit()
    console.log('params', params)
    const res = await getEmployees()
    const { success, message, data } = res.data
    if (!success) {
      notification.error({ message: '获取员工列表失败', description: message })
      return
    }
    const { list, total = 0 } = data
    dataSource.value = list
    pagination.value = { ...pagination.value, pageNum, total }
  } catch (err) {
    console.error(err)
  } finally {
    requestLoading.value = false
  }
}

function onReset() {
  commonFormRef.value?.resetFields()
}

async function onSearch() {
  requestEmployees(1)
}

function onPageChange(pageNum: number) {
  requestEmployees(pageNum)
}

const addEmployeeModalRef = ref<InstanceType<typeof AddEmployeeModal>>()

function onModalOpen() {
  addEmployeeModalRef.value?.open()
}

function onModalAfterAdd() {
  onSearch()
}

onMounted(() => {
  onSearch()
})
</script>

<style lang="less" scoped>
.list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 16px;

  .form-wrapper,
  .list-wrapper {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 16px;
    background-color: #fff;
    border-radius: 8px;
  }

  .form-wrapper {
    margin-bottom: 16px;
  }

  .list-wrapper {
    flex: 1;
    padding: 0 16px;
    position: relative;

    .thead-cell,
    .tbody-cell {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .action-links {
      display: flex;
      align-items: center;
    }
  }
}
</style>
