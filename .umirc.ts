import { defineConfig, Redirect } from 'umi';

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
  //   path: '/user/regist',
  //   component: '@/pages/userRegist/index',
  //   wrappers: ['@/wrappers/auth'],
  // },

  // {
  //   path: '/user/result',
  //   component: '@/pages/userResult/index',
  //   wrappers: ['@/wrappers/auth'],
  // },
  routes: [
    {
      path: '/user/login',
      component: '@/pages/userLogin/index',
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: '@/pages/login/index',
      wrappers: ['@/wrappers/auth'],
    },
    // {
    //   exact: false,
    //   path: '/user',
    //   routes: [],
    // },
    {
      exact: false,
      path: '/user',
      name: 'userLayout',
      component: '@/pages/layout/userLayout',
      routes: [
        {
          path: '/user/result',
          component: '@/pages/userResult/index',
          wrappers: ['@/wrappers/auth'],
        },
        {
          path: '/user/home',
          component: '@/pages/userHome/index',
          wrappers: ['@/wrappers/auth'],
        },
        {
          path: '/user/info',
          component: '@/pages/userInfo/index',
          wrappers: ['@/wrappers/auth'],
        },
        {
          path: '/user/regist',
          component: '@/pages/userRegist/index',
        },
        {
          path: '/user/forget',
          component: '@/pages/userForget/index',
          wrappers: ['@/wrappers/auth'],
        },
      ],
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
          path: '/matchDetailByProduct',
          name: 'match',
          component: '@/pages/adminMatchProductDetail/index',
          wrappers: ['@/wrappers/auth'],
        },
        {
          path: '/system',
          name: 'system',
          component: '@/pages/adminSystem/index',
          wrappers: ['@/wrappers/auth'],
        },
        {
          exact: false,
          path: '/match',
          name: 'match',
          // wrappers: ['@/wrappers/auth'],
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
              name: 'white',
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
          // wrappers: ['@/wrappers/auth'],
        },

        {
          path: '/role',
          name: 'role',
          // wrappers: ['@/wrappers/auth'],
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
          path: '/service',
          name: 'service',
          component: '@/pages/adminService/index',
          wrappers: ['@/wrappers/auth'],
        },
        {
          path: '/service',
          name: 'service',
          routes: [
            {
              path: '/service/add',
              name: 'serviceAdd',
              component: '@/pages/adminService/add/index',
              wrappers: ['@/wrappers/auth'],
            },
            {
              path: '/service/edit',
              name: 'serviceEdit',
              component: '@/pages/adminService/edit/index',
              wrappers: ['@/wrappers/auth'],
            },
          ],
        },
        {
          path: '/customer',
          name: 'customer',
          component: '@/pages/adminCustomer/index',
          wrappers: ['@/wrappers/auth'],
        },
        {
          path: '/customer',
          name: 'customer',
          wrappers: ['@/wrappers/auth'],
          routes: [
            {
              path: '/customer/add',
              name: 'customerAdd',
              component: '@/pages/adminCustomer/add/index',
              wrappers: ['@/wrappers/auth'],
            },
            {
              path: '/customer/edit',
              name: 'customerEdit',
              component: '@/pages/adminCustomer/edit/index',
              wrappers: ['@/wrappers/auth'],
            },
          ],
        },
        {
          path: '/account',
          name: 'account',
          component: '@/pages/adminAccount/index',
          // wrappers: ['@/wrappers/auth'],
        },
        {
          path: '/account',
          name: 'account',
          // wrappers: ['@/wrappers/auth'],
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
