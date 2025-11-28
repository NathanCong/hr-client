<template>
  <div class="default-layout">
    <!-- 布局顶部导航 -->
    <section class="layout-header">
      <slot name="layout-header"></slot>
    </section>
    <!-- 布局内容主体 -->
    <section class="layout-mainer">
      <slot name="layout-mainer"></slot>
    </section>
  </div>
</template>

<style lang="less" scoped>
.default-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .layout-header {
    width: 100%;
    height: auto;
  }

  .layout-mainer {
    flex: 1;
  }
}
</style>
