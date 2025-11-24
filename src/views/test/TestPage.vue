<template>
  <div class="test">
    <section class="test-header">
      <GlobalHeader
        :show-logo="true"
        :logo-src="LogoSVG"
        :show-title="true"
        title="慧恩齐家医疗科技"
        :show-sub-title="true"
        sub-title="HR系统"
        :show-actions="true"
      >
        <template #actions>
          <div class="header-actions">
            <a-button type="primary">测试</a-button>
          </div>
        </template>
      </GlobalHeader>
    </section>
  </div>
</template>

<script lang="ts" setup>
import GlobalHeader from '@/components/GlobalHeader.vue'
import LogoSVG from './assets/images/logo.svg'
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
