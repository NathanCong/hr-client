<template>
  <div class="global-header" :style="{ backgroundColor: bgColor }">
    <section class="header-left">
      <template v-if="showLogo">
        <span class="header-logo"></span>
      </template>
    </section>
    <section class="header-right"></section>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    bgColor?: string
    showLogo?: boolean
    logoSrc?: string
  }>(),
  {
    bgColor: '#fff',
    showLogo: false,
    logoSrc: ''
  }
)
</script>

<style lang="less" scoped>
.global-header {
  width: 100%;
  height: 100%;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 20px;

  .logo-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;

    // .logo-text {
    //   font-size: 18px;
    //   font-weight: bold;
    // }
  }
}
</style>
