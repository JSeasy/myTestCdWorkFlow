import { history } from 'umi';

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

export async function render(oldRender: any) {
  // new Promise((resove, reject) => {
  //   setTimeout(resove, 1000);
  // }).then(() => {
  //   oldRender();
  // });\
  await getRoute();
  oldRender();
  console.log(3);
}

export function patchRoutes({ routes }: any) {
  console.log(routes);
  console.log(2);
}
const getRoute = () => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  });
};
