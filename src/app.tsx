let extraRoutes: any;

export function patchRoutes({ routes }: any) {
  console.log(routes);
  if (window.localStorage.getItem('auth')) {
    routes.shift();
    routes.push({
      path: '/views',
      component: require('@/pages/layout/index').default,
      exact: false,
      title: '匹配管理',
      routes: [
        {
          exact: true,
          path: '/views/adminMatch',
          component: require('@/pages/adminMatch/index').default,
          title: '匹配管理',
        },
      ],
    });
  }
}

// export function render(oldRender: any) {
//   fetch('/api/routes')
//     .then((res) => res.json())
//     .then((res) => {
//       extraRoutes = res.routes;
//       oldRender();
//     });
// }
