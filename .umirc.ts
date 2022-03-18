import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mock: false,
  routes: [
    {
      exact: true,
      path: '/login',
      component: '@/pages/login/index',
      wrappers: ['@/wrappers/auth'],
    },
    {
      path: '/',
      name: 'layout',
      component: '@/pages/layout/index',
      exact: false,
      wrappers: ['@/wrappers/auth'],
      routes: [
        {
          path: '/match',
          name: 'match',
          exact: true,
          component: '@/pages/adminMatch/index',
          wrappers: ['@/wrappers/auth'],
        },
        {
          exact: false,
          path: '/match',
          name: 'match',
          routes: [
            {
              exact: true,
              path: '/match/detail',
              name: 'matchDetail',
              component: '@/pages/adminMatch/detail/index',
            },
            {
              exact: true,

              path: '/match/edit',
              name: 'matchEdit',
              component: '@/pages/adminMatch/edit/index',
            },
          ],
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
