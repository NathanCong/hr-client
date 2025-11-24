import { BlankLayout, DefaultLayout } from '@/layouts/index'

export default [
  /**
   * 根路由
   */
  {
    path: '/',
    redirect: '/home'
  },
  /**
   * 首页
   */
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/HomePage.vue'),
    meta: {
      layoutComponent: DefaultLayout
    }
  },
  /**
   * 测试页
   */
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/TestPage.vue'),
    meta: {
      layoutComponent: BlankLayout
    }
  },
  /**
   * 通配符路由 - 匹配所有未找到的路由，默认跳转到首页
   */
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]
