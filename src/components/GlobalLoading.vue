<template>
  <div class="global-loading">
    <section class="loading-mask">
      <a-spin size="large" tip="加载中..."></a-spin>
    </section>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    size?: string
  }>(),
  {
    size: 'default' // default | small | large
  }
)
</script>

<style lang="less" scoped>
.global-loading {
  width: auto;
  height: auto;
  position: relative;

  .loading-mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>
