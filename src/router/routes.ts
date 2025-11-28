import { BlankLayout, DefaultLayout } from '@/layouts/index'

export default [
  /**
   * 根路由
   */
  {
    path: '/',
    redirect: '/list'
  },
  /**
   * 列表页
   */
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/list/ListView.vue'),
    meta: {
      layoutComponent: DefaultLayout
    }
  },
  /**
   * 详情页
   */
  {
    path: '/detail/:empId',
    name: 'detail',
    component: () => import('@/views/detail/DetailView.vue'),
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
