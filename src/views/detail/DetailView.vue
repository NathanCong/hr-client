<template>
  <div class="detail">
    <section class="detail-empty">
      <CommonEmpty />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { CommonEmpty } from '@/components/index'
</script>

<style lang="less" scoped>
.detail {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 16px;
  display: flex;

  .detail-empty {
    flex: 1;
    background-color: #fff;
    border-radius: 8px;
  }
}
</style>
