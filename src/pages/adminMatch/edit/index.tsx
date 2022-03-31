import EditBlock from './components/editBlock/index';
import { getRow } from '@/api/match';
import { useEffect, useState } from 'react';
import { useHistory } from 'umi';
import { Button } from 'antd';
const formList: any = [];
export default () => {
  const history = useHistory();
  const [infos, setInfos] = useState([]);
  useEffect(() => {
    const { state } = history.location;
    getRow(state.id).then(({ data }) => {
      setInfos(data.pipeiInfo.productVOList);
    });
  }, []);
  const save = async () => {
    for (let i = 0; i < formList.length; i++) {
      const form = formList[i];
      const values = await form.validateFields();
      console.log(values);
    }
  };
  return (
    <>
      {infos.map((info) => {
        return (
          <EditBlock
            info={info}
            key={info.id}
            onChange={(form: any) => {
              formList.push(form);
            }}
          />
        );
      })}
      <Button
        onClick={() => {
          save();
        }}
      >
        查看
      </Button>
    </>
  );
};
