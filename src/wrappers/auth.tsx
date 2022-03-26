import { Redirect, useModel, useHistory } from 'umi';
import { getCanReadPageFirst } from '@/utils/index';
const permissionList = [
  '/role/add',
  '/role/edit',
  '/account/add',
  '/account/edit',
];
export default (props: any) => {
  const { initialState, loading, error, refresh, setInitialState }: any =
    useModel('@@initialState');
  const { route } = props;
  console.log(route.path);
  if (window.localStorage.getItem('token')) {
    const permission = initialState[route.path];
    const read = permission ? permission.read : true;
    if (route.path === '/login' || (route.path === '/product' && !read)) {
      const path = getCanReadPageFirst(initialState);
      return <Redirect to={path} />;
    }
    return read ? <>{props.children}</> : <Redirect to="/404" />;
  } else {
    if (route.path === '/login') {
      return <>{props.children}</>;
    }
    return <Redirect to="/login" />;
  }
};
