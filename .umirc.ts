import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mock: false,
  routes: [
    {
      path: '/views',
      component: '@/pages/layout/index',
      exact: false,
      query: {
        name: '布局路由',
      },
      routes: [
        {
          exact: true,
          path: '/views/match',
          component: '@/pages/adminMatch/index',
          name: 'match',
          // wrappers: ['@/wrappers/auth'],
          query: {
            name: '匹配管理',
          },
        },
        {
          path: '/views/match',
          name: 'match',
          // wrappers: ['@/wrappers/auth'],
          query: {
            name: '匹配管理',
          },
          routes: [
            {
              exact: true,
              path: '/views/match/detail',
              name: 'matchDetail',
              component: '@/pages/adminMatch/detail/index',
              query: {
                name: '匹配详情',
              },
            },
            {
              exact: true,
              path: '/views/match/edit',
              name: 'matchEdit',

              component: '@/pages/adminMatch/edit/index',
              query: {
                name: '匹配编辑',
              },
            },
          ],
        },
        {
          exact: false,
          path: '/views/stration',
          component: '@/pages/adminStration/index',
          // wrappers: ['@/wrappers/auth'],
          name: 'station',
          query: {
            name: '企业管理',
          },
          routes: [
            {
              path: '/views/stration/service',
              component: '@/pages/adminService/index',
              name: 'service',
              query: {
                name: '服务企业管理',
              },
            },
            {
              path: '/views/stration/customer',
              component: '@/pages/adminCustomer/index',
              name: 'customer',
              query: {
                name: '客户企业管理',
              },
            },
          ],
        },
        {
          exact: true,
          path: '/views/product',
          component: '@/pages/adminProduct/index',
          name: 'product',
          wrappers: ['@/wrappers/auth'],
          query: {
            name: '产品维度管理',
          },
        },
        {
          exact: true,
          path: '/views/log',
          component: '@/pages/adminLog/index',
          name: 'product',
          query: {
            name: '系统日志',
          },
        },
      ],
    },
    { path: '/', redirect: '/login' },

    {
      path: '/login',
      component: '@/pages/login/index',
      exact: true,
    },
    { path: '*', exact: true, component: '@/pages/403/index' },
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
