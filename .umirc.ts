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
      routes: [
        {
          exact: true,
          path: '/views/match',
          component: '@/pages/adminMatch/index',
          name: 'match',
          wrappers: ['@/wrappers/auth'],
        },
        {
          exact: true,
          path: '/views/stration',
          component: '@/pages/adminStration/index',
          wrappers: ['@/wrappers/auth'],
          name: 'station',
        },
        {
          exact: true,
          path: '/views/product',
          component: '@/pages/adminProduct/index',
          name: 'product',
          wrappers: ['@/wrappers/auth'],
        },
      ],
    },
    { path: '/', redirect: '/login', exact: true },
    { path: '/403', exact: true, component: '@/pages/403/index' },

    {
      path: '/login',
      component: '@/pages/login/index',
      exact: true,
      // wrappers: ['@/wrappers/auth'],
    },
  ],
  fastRefresh: {},
  proxy: {
    '/services': {
      target: 'http://8.142.41.40:6580',
    },
  },
});
