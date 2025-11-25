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
      <a-table
        :columns="columns"
        :data-source="dataSource"
        :scroll="{ y: tableScrollY }"
      ></a-table>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

withDefaults(
  defineProps<{
    title?: string
    columns?: ColumnItem[]
    dataSource?: unknown[]
  }>(),
  {
    title: 'CommonTable',
    columns: () => [],
    dataSource: () => []
  }
)

const tableWrapperRef = ref<HTMLElement | null>(null)

const tableScrollY = computed(() => {
  // 获取 tableWrapper 元素高度
  const tableWrapperElement = tableWrapperRef.value
  const tableWrapperHeight = tableWrapperElement
    ? tableWrapperElement.offsetHeight
    : 0
  // 获取 tableThead 元素高度
  const tableTheadElement: HTMLElement | null =
    document.querySelector('.ant-table-thead')
  const tableTheadHeight = tableTheadElement
    ? tableTheadElement.offsetHeight
    : 0
  // 获取 tablePagination 元素高度
  const tablePaginationElement: HTMLElement | null = document.querySelector(
    '.ant-table-pagination'
  )
  const tablePaginationHeight = tablePaginationElement
    ? tablePaginationElement.offsetHeight
    : 0
  console.log(
    'scrollY',
    tableWrapperHeight - tableTheadHeight - tablePaginationHeight
  )
  return tableWrapperHeight - tableTheadHeight - tablePaginationHeight
})
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
    padding: 20px;

    .header-title {
      font-size: 16px;
      line-height: 16px;
      font-weight: bold;
    }
  }

  .table-wrapper {
    flex: 1;
  }
}
</style>
