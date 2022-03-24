import { Redirect, useModel, useHistory } from 'umi';
const whiteList = ['/login'];
export default (props: any) => {
  const { initialState, loading, error, refresh, setInitialState }: any =
    useModel('@@initialState');
  const {
    location: { pathname },
  } = useHistory();
  if (window.localStorage.getItem('token')) {
    if (pathname === '/login') {
      return <Redirect to="/match" />;
    }
    return <>{props.children}</>;
  } else {
    if (pathname === '/login') {
      return <>{props.children}</>;
    }
    return <Redirect to="/login" />;
  }
};
