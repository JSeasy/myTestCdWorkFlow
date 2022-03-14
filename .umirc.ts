import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/login', component: '@/pages/login/index', exact: true },
    {
      path: '/views',
      component: '@/pages/layout/index',
      exact: false,
      title: '匹配管理',
      routes: [
        {
          exact: true,
          path: '/views/adminMatch',
          component: '@/pages/adminMatch/index',
          title: '匹配管理',
        },
      ],
    },
  ],
  fastRefresh: {},
  hash: true,
  history: {
    type: 'hash',
  },
});
