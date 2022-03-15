import { Redirect } from 'umi';
import { useModel } from 'umi';
export default (props: any) => {
  const { initialState, loading, error, refresh, setInitialState }: any =
    useModel('@@initialState');

  console.log(props.route);
  const { name } = props.route;
  if (window.localStorage.getItem('auth')) {
    const read: { read: number } = initialState[name];
    console.log(read);
    return read.read === 1 ? <>{props.children}</> : <Redirect to="/403" />;
  } else {
    return <Redirect to="/login" />;
  }
};
