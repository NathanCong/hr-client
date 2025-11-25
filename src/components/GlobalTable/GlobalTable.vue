<template>
  <div class="global-table">
    <section class="table-header">
      <slot name="header"></slot>
    </section>
    <section class="table-mainer">
      <a-table
        :columns="columns"
        :data-source="dataSource"
        :scroll="{ x: 1200, y: 1200 }"
        :pagination="{ showTotal: () => `共 ${total} 条` }"
      >
        <template #bodyCell="{ column, record }">
          <slot name="cell" :column="column" :record="record"></slot>
        </template>
      </a-table>
    </section>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    columns?: Array<TableColumn>
    dataSource?: unknown[]
    total?: number
  }>(),
  {
    columns: () => [],
    dataSource: () => [],
    total: 0
  }
)
</script>

<style lang="less" scoped>
.global-table {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .table-header {
    margin-bottom: 16px;
  }

  .table-mainer {
    flex: 1;

    ::v-deep(.ant-table-wrapper) {
      height: 100%;

      .ant-spin-nested-loading {
        height: 100%;
      }

      .ant-spin-container {
        height: 100%;
        display: flex;
        flex-direction: column;

        .ant-table {
          flex: 1;
          height: 0;
        }

        .ant-pagination {
          flex-shrink: 0;
        }
      }

      .ant-table-container {
        height: 100%;
        display: flex;
        flex-direction: column;

        > .ant-table-header {
          flex-shrink: 0;
        }

        > .ant-table-body {
          flex: 1;
          height: 0;
        }
      }
    }
  }
}
</style>
