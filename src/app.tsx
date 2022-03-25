import { history } from 'umi';
import { getRouters } from '@/api/login';
export async function getInitialState() {
  console.log(123123123);
  return {
    product: {
      read: 1,
    },
    match: {
      read: 1,
    },
    stration: {
      read: 1,
    },
  };
}
let permission: any = [];
export async function render(oldRender: any) {
  if (window.localStorage.getItem('token')) {
    const router = await getRouters();
    permission = router.data.menus;
  }
  oldRender();
}

const path = [
  {
    path: '/match',
    name: '匹配管理',
    component: require('@/pages/adminMatch/index').default,
    // wrappers: ['@/wrappers/auth'],
  },
  {
    exact: false,
    path: '/match',
    name: '匹配管理',
    routes: [
      {
        exact: true,
        path: '/match/detail',
        name: '匹配详情',
        component: require('@/pages/adminMatch/detail/index').default,
      },
      {
        exact: true,
        path: '/match/edit',
        name: '匹配编辑',
        component: require('@/pages/adminMatch/edit/index').default,
      },
    ],
  },
];

export function patchRoutes({ routes }: any) {
  // // console.log(routes.routes.push(...path));
  // console.log(routes);
  routes[0].routes.push(...path);
}

const routerMap = () => {};
