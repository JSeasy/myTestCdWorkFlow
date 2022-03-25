import { history } from 'umi';
import { getRouters } from '@/api/login';
export async function getInitialState() {
  const c = await routerMap();
  console.log(213);
  return c;
}
let permission: any = [];
export async function render(oldRender: any) {
  if (window.localStorage.getItem('token')) {
    const router = await getRouters();
    permission = router.data.menus;
  }
  oldRender();
}

// const path = [
//   {
//     path: '/match',
//     name: '匹配管理',
//     component: require('@/pages/adminMatch/index').default,
//     // wrappers: ['@/wrappers/auth'],
//   },
//   {
//     exact: false,
//     path: '/match',
//     name: '匹配管理',
//     routes: [
//       {
//         exact: true,
//         path: '/match/detail',
//         name: '匹配详情',
//         component: require('@/pages/adminMatch/detail/index').default,
//       },
//       {
//         exact: true,
//         path: '/match/edit',
//         name: '匹配编辑',
//         component: require('@/pages/adminMatch/edit/index').default,
//       },
//     ],
//   },
// ];

export function patchRoutes({ routes }: any) {
  // // console.log(routes.routes.push(...path));
  // console.log(routes);
  // routes[0].routes.push(...path);
}

const routerMap = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        product: {
          read: 1,
          add: 0,
        },
        match: {
          read: 1,
        },
        layout: {
          read: 1,
        },
      });
    }, 2000);
  });
};
