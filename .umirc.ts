import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/login', component: '@/pages/login/index', exact: true },
    {
      path: '/views',
      component: '@/pages/views/_layout',
      routes: [
        {
          path: '/adminMatch',
          component: '@/pages/views/adminMatch/index',
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
