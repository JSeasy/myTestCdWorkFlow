import { Redirect, useModel, useHistory } from 'umi';
import { getCanReadPageFirst } from '@/utils/index';
const whiteList = ['/login'];
export default (props: any) => {
  const { initialState, loading, error, refresh, setInitialState }: any =
    useModel('@@initialState');
  const { route } = props;
  console.log(route);
  if (window.localStorage.getItem('token')) {
    const permission = initialState ? initialState[route.path] : undefined;
    const read = permission ? permission.read : true;
    if (route.path === '/login') {
      return <Redirect to="/match" />;
    }
    if (route.path === '/product' && !read) {
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
