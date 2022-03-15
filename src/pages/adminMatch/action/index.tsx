import { Button } from 'antd';
import { useHistory } from 'umi';
export default (props: any) => {
  const history = useHistory();
  return (
    <Button onClick={() => history.push('/views/match/' + 12)}>查看</Button>
  );
};
