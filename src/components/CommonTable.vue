<template>
  <div class="common-table">
    <!-- 表格头部 -->
    <section class="table-header">
      <span class="header-title">{{ title }}</span>
      <span class="header-actions">
        <slot name="header-actions"></slot>
      </span>
    </section>
    <!-- 表格主体 -->
    <section class="table-wrapper" ref="tableWrapperRef">
      <CommonLoading>
        <a-table
          :columns="columns"
          :data-source="dataSource"
          :scroll="{ x: tableScrollX, y: tableScrollY }"
          :pagination="{
            showQuickJumper: false,
            showSizeChanger: false,
            showTotal: (total) => `共 ${total} 条`,
            current: pagination.pageNum,
            pageSize: pagination.pageSize,
            total: pagination.total,
            onChange: (pageNum) => emit('pageChange', pageNum)
          }"
        >
          <!-- 表头单元格 -->
          <template #headerCell="{ title, column }">
            <slot name="thead-cell" :title="title" :column="column"></slot>
          </template>
          <!-- 列表单元格 -->
          <template #bodyCell="{ text, value, record, index, column }">
            <slot
              name="tbody-cell"
              :text="text"
              :value="value"
              :record="record"
              :index="index"
              :column="column"
            ></slot>
          </template>
        </a-table>
        <!-- 空数据状态 -->
        <template v-if="dataSource.length < 1">
          <section class="no-data">
            <CommonEmpty />
          </section>
        </template>
      </CommonLoading>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import CommonEmpty from './CommonEmpty.vue'
import {
  getElementWidth,
  getElementHeight,
  getElementByClassName
} from '@/utils/element'

const props = withDefaults(
  defineProps<{
    title?: string
    columns?: ColumnItem[]
    dataSource?: unknown[]
    pagination?: Pagination
    isLoading?: boolean
  }>(),
  {
    title: 'CommonTable',
    columns: () => [],
    dataSource: () => [],
    pagination: () => ({ pageNum: 1, pageSize: 20, total: 0 }),
    isLoading: false
  }
)

const tableWrapperRef = ref<HTMLElement | null>(null)

const tableScrollX = computed(() => {
  let fixedWidth = 0
  props.columns.forEach((column) => {
    if (column.fixed) {
      fixedWidth += column.width || 0
    }
  })
  if (fixedWidth > 0) {
    // 获取 tableWrapper 元素宽度
    const tableWrapperWidth = getElementWidth(tableWrapperRef.value)
    // 返回计算后的滚动宽度（总宽 + 固定列宽度）
    return tableWrapperWidth + fixedWidth
  }
  return 0
})

const tableScrollY = computed(() => {
  // 没数据直接返回0
  if (props.dataSource.length < 1) {
    return 0
  }
  // 获取 tableWrapper 元素高度
  const tableWrapperHeight = getElementHeight(tableWrapperRef.value)
  // 获取 tableThead 元素高度
  const tableTheadElement = getElementByClassName('ant-table-thead')
  const tableTheadHeight = getElementHeight(tableTheadElement)
  // 获取 tablePagination 元素高度
  const tablePaginationElement = getElementByClassName('ant-table-pagination')
  const tablePaginationHeight = getElementHeight(tablePaginationElement)
  // 返回计算后的滚动高度（总高 - 表头高度 - 分页高度）
  return tableWrapperHeight - tableTheadHeight - tablePaginationHeight
})

const emit = defineEmits(['pageChange'])
</script>

<style lang="less" scoped>
.common-table {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 16px 0;

    .header-title {
      font-size: 16px;
      line-height: 16px;
      font-weight: bold;
    }
  }

  .table-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;

    .no-data {
      flex: 1;
    }
  }
}
</style>
