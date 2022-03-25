import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@/components/loading/index',
  },
  mock: false,
  // 客户端路由
  // {
  //   path: '/user/login',
  //   component: '@/pages/userLogin/index',
  //   wrappers: ['@/wrappers/auth'],
  // },
  // {
  //   path: '/user/regist',
  //   component: '@/pages/userRegist/index',
  //   wrappers: ['@/wrappers/auth'],
  // },
  // {
  //   path: '/user/forget',
  //   component: '@/pages/userForget/index',
  //   wrappers: ['@/wrappers/auth'],
  // },
  // {
  //   path: '/user/result',
  //   component: '@/pages/userResult/index',
  //   wrappers: ['@/wrappers/auth'],
  // },
  routes: [
    {
      path: '/login',
      name: 'login',
      component: '@/pages/login/index',
      // wrappers: ['@/wrappers/auth'],
    },
    {
      path: '/user/regist',
      component: '@/pages/userRegist/index',
      // wrappers: ['@/wrappers/auth'],
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
          wrappers: ['@/wrappers/auth'],
          routes: [
            {
              exact: true,
              path: '/match/detail',
              name: '匹配详情',
              component: '@/pages/adminMatch/detail/index',
            },
            {
              exact: true,
              path: '/match/edit',
              name: '匹配编辑',
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
          name: 'product',
          component: '@/pages/layout/productLayout/index',
          routes: [
            {
              path: '/product/:id',
              redirect: '/product/:id/fields',
            },
            {
              path: '/product/:id/fields',
              name: '字段管理',
              component: '@/pages/adminFields/index',
              wrappers: ['@/wrappers/auth'],
            },
            {
              path: '/product/:id/prehandle',
              name: '预处理管理',
              component: '@/pages/adminPrehandle/index',
              wrappers: ['@/wrappers/auth'],
            },
            {
              path: '/product/:id/white',
              name: '黑白名单管理',
              component: '@/pages/adminWhite/index',
              wrappers: ['@/wrappers/auth'],
            },
            {
              path: '/product/:id/whiteDetail',
              name: '黑白名单详情',
              component: '@/pages/adminWhiteDetail/index',
              wrappers: ['@/wrappers/auth'],
            },
            {
              path: '/product/:id/abstract',
              name: '抽象处理',
              component: '@/pages/adminAbstract/index',
              wrappers: ['@/wrappers/auth'],
            },
            {
              path: '/product/:id/strategy',
              name: '策略管理',
              component: '@/pages/adminStrategy/index',
              wrappers: ['@/wrappers/auth'],
            },
            {
              path: '/product/:id/rules',
              name: '规则管理',
              component: '@/pages/adminRules/index',
              wrappers: ['@/wrappers/auth'],
            },
          ],
        },
        {
          path: '/role',
          name: '角色管理',
          component: '@/pages/adminRole/index',
          wrappers: ['@/wrappers/auth'],
        },

        {
          path: '/role',
          name: '角色管理',
          wrappers: ['@/wrappers/auth'],
          routes: [
            {
              path: '/role/edit',
              name: 'roleEdit',
              component: '@/pages/adminRole/edit/index',
              wrappers: ['@/wrappers/auth'],
            },
            {
              path: '/role/add',
              name: 'roleAdd',
              component: '@/pages/adminRole/add/index',
              wrappers: ['@/wrappers/auth'],
            },
          ],
        },

        {
          path: '/account',
          name: '账号管理',
          component: '@/pages/adminAccount/index',
          wrappers: ['@/wrappers/auth'],
        },
        {
          path: '/account',
          name: '账号管理',
          wrappers: ['@/wrappers/auth'],
          routes: [
            {
              path: '/account/add',
              name: 'accountAdd',
              component: '@/pages/adminAccount/add/index',
              wrappers: ['@/wrappers/auth'],
            },
            {
              path: '/account/edit',
              name: 'accountEdit',
              component: '@/pages/adminAccount/edit/index',
              wrappers: ['@/wrappers/auth'],
            },
          ],
        },
        { path: '*', component: '@/pages/403/index' },
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
