import { getRouters } from '@/api/login';
import { getPermission } from '@/utils';
export async function getInitialState() {
  if (window.localStorage.getItem('token')) {
    const router = await getRouters();
    const { menus } = router.data;
    const result = getPermission(menus);
    result['/role'].read = 1;
    result['/role'].edit = 1;
    result['/role'].del = 1;
    result['/role'].add = 1;
    result['/account'].read = 1;
    result['/account'].add = 1;
    result['/account'].edit = 1;
    result['/account'].del = 1;
    result['/service'].read = 1;
    result['/product'].read = 1;
    result['/match'].read = 1;
    return result;
  }
  return {};
}
// let permission: any = [];

// export function patchRoutes({ routes }: any) {
//   // // console.log(routes.routes.push(...path));
//   // console.log(routes);
//   // routes[0].routes.push(...path);
// }

// const routerMap = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         product: {
//           read: 1,
//           add: 0,
//         },
//         match: {
//           read: 1,
//         },
//         layout: {
//           read: 1,
//         },
//         account: {
//           read: 1,
//         },
//         role: {
//           read: 1,
//         },
//       });
//     }, 2000);
//   });
// };
