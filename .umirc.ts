import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mock: false,
  routes: [
    {
      path: '/login',
      component: '@/pages/login/index',
      wrappers: ['@/wrappers/auth'],
    },
    {
      path: '/',
      name: 'layout',
      component: '@/pages/layout/index',
      wrappers: ['@/wrappers/auth'],
      routes: [
        {
          path: '/',
          redirect: '/product',
        },
        {
          path: '/match',
          name: 'match',
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
        {
          exact: true,
          path: '/product',
          name: 'product',
          component: '@/pages/adminProduct/index',
          wrappers: ['@/wrappers/auth'],
        },
        {
          exact: false,
          path: '/product/:id',
          name: 'productEdit',
          component: '@/pages/layout/productLayout/index',
          routes: [
            {
              path: '/product/:id',
              redirect: '/product/:id/fields',
            },
            {
              path: '/product/:id/fields',
              name: 'fields',
              component: '@/pages/adminFields/index',
              wrappers: ['@/wrappers/auth'],
            },
          ],
        },
        {
          path: '/role',
          name: 'role',
          component: '@/pages/adminRole/index',
          wrappers: ['@/wrappers/auth'],
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
