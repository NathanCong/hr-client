<template>
  <div class="test">
    <section class="test-header">
      <GlobalHeader />
    </section>
  </div>
</template>

<script lang="ts" setup>
import GlobalHeader from '@/components/GlobalHeader.vue'
</script>

<style lang="less" scoped>
.test {
  width: 100%;
  height: 100%;
  display: flex;

  .test-header {
    width: 100%;
    height: 60px;
  }
}
</style>
