import { history } from 'umi';

export async function getInitialState() {
  console.log('initail');
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

export function render(oldRender: any) {
  new Promise((resove, reject) => {
    setTimeout(resove, 1000);
  }).then(() => {
    oldRender();
  });
}

export function patchRoutes({ routes }: any) {
  // console.log(routes);
  // routes.push({
  //   path: '/login',
  //   component: require('@/pages/login/index').default,
  //   exact: true,
  // });
  // console.log(456);
}
