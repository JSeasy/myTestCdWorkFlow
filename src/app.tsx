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
    setTimeout(resove, 5000);
  }).then(() => {
    console.log(123);
    oldRender();
    console.log(789);
  });
}

export function patchRoutes({ routes }: any) {
  console.log(routes);
  console.log(456);
}
