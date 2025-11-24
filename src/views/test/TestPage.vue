<template>
  <div class="test">
    <!-- 测试 CommonHeader -->
    <section class="test-header">
      <CommonHeader
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
      </CommonHeader>
    </section>
    <!-- 测试 CommonLoading -->
    <section class="test-loading">
      <CommonLoading size="default" tip="加载中..." :is-loading="true">
        <div :style="loadingDivStyle"></div>
      </CommonLoading>
    </section>
    <!-- 测试 GlobalEmpty -->
    <section class="test-empty">
      <GlobalEmpty />
    </section>
    <!-- 测试 GlobalForm -->
  </div>
</template>

<script lang="ts" setup>
import CommonHeader from '@/components/CommonHeader.vue'
import CommonLoading from '@/components/CommonLoading.vue'
import GlobalEmpty from '@/components/GlobalEmpty.vue'
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

  .test-header {
    width: 100%;
    height: 60px;
  }

  .test-empty {
    width: 100%;
    height: 200px;
    background-color: #fff;
    margin-top: 10px;
  }
}
</style>
