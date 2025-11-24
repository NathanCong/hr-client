<template>
  <div class="test">
    <!-- 测试 GlobalHeader -->
    <section class="test-item test-header">
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
    <!-- 测试 GlobalLoading -->
    <section class="test-item test-loading">
      <GlobalLoading size="default" tip="加载中..." :is-loading="true">
        <div :style="loadingDivStyle"></div>
      </GlobalLoading>
    </section>
  </div>
</template>

<script lang="ts" setup>
import GlobalHeader from '@/components/GlobalHeader.vue'
import LogoSVG from './assets/images/logo.svg'
import { ref } from 'vue'

const loadingDivStyle = ref({
  width: '100%',
  height: '200px',
  backgroundColor: '#fff',
  marginTop: '10px'
})
</script>

<style lang="less" scoped>
.test {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &.test-item {
    margin-top: 10px;

    &:first-child {
      margin-bottom: 0;
    }
  }

  .test-header {
    width: 100%;
    height: 60px;
  }
}
</style>
