import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/login', component: '@/pages/login/index' }],
  fastRefresh: {},
  hash: true,
  history: {
    type: 'hash',
  },
});
