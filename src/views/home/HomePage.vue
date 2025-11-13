<template>
  <div class="home">
    <section class="form-wrapper" v-if="false">GlobalForm</section>
    <section class="list-wrapper">
      <LoadingMask v-if="tableLoading" />
      <GlobalTable
        :columns="EMPLOYEE_LIST_TABLE_COLUMNS"
        :dataSource="dataSource"
        :total="total"
      >
        <template #header>
          <div class="table-header">
            <div class="table-title">员工列表</div>
            <div class="table-buttons">
              <a-button type="primary" size="middle" @click="onAddEmployee">
                <template #icon><PlusOutlined /></template>
                添加员工
              </a-button>
            </div>
          </div>
        </template>
        <template #cell="{ column }">
          <template v-if="column.key === 'actions'">
            <div class="cell-links">
              <a-button type="link">查看</a-button>
              <a-button type="link">编辑</a-button>
              <a-button type="link">删除</a-button>
            </div>
          </template>
        </template>
      </GlobalTable>
    </section>
    <AddEmployeeModal ref="addEmployeeModalRef" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import GlobalTable from '@/components/GlobalTable'
import LoadingMask from '@/components/LoadingMask.vue'
import { EMPLOYEE_LIST_TABLE_COLUMNS } from './const'
import { getEmployeeList } from '@/apis'
import { notification } from 'ant-design-vue'
import AddEmployeeModal from './components/AddEmployeeModal.vue'

const tableLoading = ref(false)
const dataSource = ref<Array<EmployeeListItem>>([])
const total = ref(0)
const addEmployeeModalRef = ref<InstanceType<typeof AddEmployeeModal>>()

async function getTableDataSource() {
  tableLoading.value = true
  try {
    const res = await getEmployeeList()
    console.log('res', res)
  } catch (err) {
    if (err instanceof Error) {
      notification.error({
        message: '获取员工列表失败',
        description: err.message
      })
    } else {
      notification.error({ message: '获取员工列表失败' })
    }
  } finally {
    tableLoading.value = false
  }
}

function onAddEmployee() {
  addEmployeeModalRef.value?.open()
}

onMounted(() => {
  getTableDataSource()
})
</script>

<style lang="less" scoped>
.home {
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
    position: relative;

    .table-header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .table-title {
        font-size: 16px;
        font-weight: bold;
      }
    }

    .cell-links {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
