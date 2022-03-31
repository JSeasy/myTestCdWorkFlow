import EditBlock from './components/editBlock/index';
import { getRow } from '@/api/match';
import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'umi';
import { Button } from 'antd';
export default () => {
  const history = useHistory();
  const [infos, setInfos] = useState([]);
  const ref = useRef(null);
  useEffect(() => {
    const { state } = history.location;
    getRow(state.id).then(({ data }) => {
      setInfos(data.pipeiInfo.productVOList);
    });
  }, []);
  return (
    <>
      {infos.map((info) => {
        return <EditBlock info={info} key={info.id} ref={ref} />;
      })}
      <Button
        onClick={() => {
          console.log(ref);
        }}
      >
        查看
      </Button>
    </>
  );
};
