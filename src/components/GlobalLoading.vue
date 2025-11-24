<template>
  <div class="global-loading">
    <section class="loading-mask">
      <a-spin :size="size" :tip="tip" :spinning="isLoading"></a-spin>
    </section>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { SpinSize } from 'ant-design-vue/es/spin/Spin'

withDefaults(
  defineProps<{
    size?: SpinSize
    tip?: string
    isLoading?: boolean
  }>(),
  {
    size: 'default', // default | small | large
    isLoading: false
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
