import { Redirect, useModel, useHistory } from 'umi';
const whiteList = ['/login'];
export default (props: any) => {
  const { initialState, loading, error, refresh, setInitialState }: any =
    useModel('@@initialState');
  // console.log(props);
  const { route } = props;
  const { read } = initialState[route.name];
  if (window.localStorage.getItem('token')) {
    if (route.path === '/login') {
      return <Redirect to="/match" />;
    }
    return read ? <>{props.children}</> : <Redirect to="/404" />;
  } else {
    if (route.path === '/login') {
      return <>{props.children}</>;
    }
    return <Redirect to="/login" />;
  }
};
