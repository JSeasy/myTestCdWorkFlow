import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@/components/loading/index',
  },
  mock: false,
  routes: [
    {
      path: '/login',
      component: '@/pages/login/index',
      wrappers: ['@/wrappers/auth'],
    },
    {
      path: '/user/login',
      component: '@/pages/userLogin/index',
      wrappers: ['@/wrappers/auth'],
    },
    {
      path: '/user/regist',
      component: '@/pages/userRegist/index',
      wrappers: ['@/wrappers/auth'],
    },
    {
      path: '/user/forget',
      component: '@/pages/userForget/index',
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
            {
              path: '/product/:id/prehandle',
              name: 'prehandle',
              component: '@/pages/adminPrehandle/index',
              wrappers: ['@/wrappers/auth'],
            },
            {
              path: '/product/:id/white',
              name: 'prehandle',
              component: '@/pages/adminWhite/index',
              wrappers: ['@/wrappers/auth'],
            },
            {
              path: '/product/:id/whiteDetail',
              name: 'whiteDetail',
              component: '@/pages/adminWhiteDetail/index',
              wrappers: ['@/wrappers/auth'],
            },
            {
              path: '/product/:id/abstract',
              name: 'abstract',
              component: '@/pages/adminAbstract/index',
              wrappers: ['@/wrappers/auth'],
            },
            {
              path: '/product/:id/strategy',
              name: 'strategy',
              component: '@/pages/adminStrategy/index',
              wrappers: ['@/wrappers/auth'],
            },
            {
              path: '/product/:id/rules',
              name: 'rules',
              component: '@/pages/adminRules/index',
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
