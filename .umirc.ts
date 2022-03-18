import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mock: false,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: '@/pages/layout/index',
      breadcrumb: '主页',
      routes: [
        {
          path: '/match',
          name: 'match',
          component: '@/pages/adminMatch/index',
          breadcrumb: '匹配管理',
        },
        {
          exact: false,
          path: '/match',
          name: 'match',
          breadcrumb: '匹配管理',
          routes: [
            {
              exact: true,
              path: '/match/detail',
              name: 'matchDetail',
              component: '@/pages/adminMatch/detail/index',
              breadcrumb: '匹配详情',
            },
            {
              path: '/match/edit',
              name: 'matchEdit',
              component: '@/pages/adminMatch/edit/index',
              breadcrumb: '匹配编辑',
            },
          ],
        },
      ],
    },

    {
      path: '/',
      routes: [
        {
          path: '/login',
          component: '@/pages/login/index',
        },
      ],
    },
    { path: '*', component: '@/pages/403/index' },
  ],
  theme: {},
  fastRefresh: {},
  locale: {
    default: 'zh-CN',
  },
  proxy: {
    '/services': {
      target: 'http://8.142.41.40:6580',
    },
  },
});
