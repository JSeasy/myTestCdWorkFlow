import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mock: false,
  routes: [
    { path: '/', redirect: '/login', exact: true, routes: [] },
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
          routes: [],
        },
        {
          path: '/views/match',
          query: {
            name: '匹配管理',
          },
          routes: [
            {
              exact: true,
              path: '/views/match/:id',
              name: 'matchDetail',
              component: '@/pages/adminMatch/detail/index',
              query: {
                name: '匹配详情',
              },
            },
          ],
        },

        {
          exact: true,
          path: '/views/stration',
          component: '@/pages/adminStration/index',
          wrappers: ['@/wrappers/auth'],
          name: 'station',
          query: {
            name: '匹配管理',
          },
        },
        {
          exact: true,
          path: '/views/product',
          component: '@/pages/adminProduct/index',
          name: 'product',
          wrappers: ['@/wrappers/auth'],
          query: {
            name: '匹配管理',
          },
        },
      ],
    },

    {
      path: '/login',
      component: '@/pages/login/index',
      exact: true,
      // wrappers: ['@/wrappers/auth'],
    },
    { path: '/403', component: '@/pages/403/index' },
  ],
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
