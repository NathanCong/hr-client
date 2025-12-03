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
        <template #tbody-cell="{ column, text, record }">
          <span class="tbody-cell">
            <template v-if="column.key === 'empStatus'">
              {{ EMPLOYEE_STATUS_MAP[text] }}
            </template>
            <template v-else-if="column.key === 'actions'">
              <span class="action-links">
                <a-button type="link" @click="onDetail(record.empId)">
                  查看
                </a-button>
                <a-button type="link" @click="onDelete(record.empId)">
                  删除
                </a-button>
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
import { useRouter } from 'vue-router'
import {
  ReloadOutlined,
  SearchOutlined,
  PlusOutlined
} from '@ant-design/icons-vue'
import { CommonForm, CommonTable } from '@/components/index'
import { EMPLOYEES_FORM_FIELDS, EMPLOYEES_TABLE_COLUMNS } from './constants'
import { EMPLOYEE_STATUS_MAP } from '@/constants/index'
import { getEmployees, delEmployee } from '@/apis'
import { notification, Modal } from 'ant-design-vue'
import AddEmployeeModal from './components/AddEmployeeModal.vue'

const requestLoading = ref(false)
const commonFormRef = ref<InstanceType<typeof CommonForm>>()
const dataSource = ref<EmployeeItem[]>([])
const pagination = ref<Pagination>({ pageNum: 1, pageSize: 20, total: 0 })

function onReset() {
  commonFormRef.value?.resetFields()
}

async function queryEmployees(pageNum: number) {
  requestLoading.value = true
  const { pageSize } = pagination.value
  try {
    const params = await commonFormRef.value?.submit()
    const requestParams: GetEmployeesRequest = { pageNum, pageSize, ...params }
    if (requestParams.empId) {
      requestParams.empId = `HE${requestParams.empId}`
    }
    const response = await getEmployees(requestParams)
    const { success, message, data } = response.data
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

async function onSearch() {
  queryEmployees(1)
}

function onPageChange(pageNum: number) {
  queryEmployees(pageNum)
}

const addEmployeeModalRef = ref<InstanceType<typeof AddEmployeeModal>>()

function onModalOpen() {
  addEmployeeModalRef.value?.open()
}

function onModalAfterAdd() {
  onSearch()
}

const router = useRouter()

function onDetail(empId: string) {
  router.replace({ path: `/detail/${empId}` })
}

async function deleteEmployee(empId: string) {
  requestLoading.value = true
  try {
    const response = await delEmployee({ empId })
    const { success, message } = response.data
    if (!success) {
      notification.error({ message: '删除员工失败', description: message })
      return
    }
    notification.success({ message: '删除员工成功' })
    onSearch()
  } catch (err) {
    console.error(err)
  } finally {
    requestLoading.value = false
  }
}

function onDelete(empId: string) {
  Modal.confirm({
    centered: true,
    title: '删除员工确认',
    content: `确定要删除编号为 ${empId} 的员工吗？`,
    okText: '确定',
    cancelText: '取消',
    onOk: () => deleteEmployee(empId)
  })
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
