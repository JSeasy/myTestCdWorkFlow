import EditBlock from './components/editBlock/index';
import { getRow } from '@/api/match';
import { useEffect, useState } from 'react';
import { useHistory } from 'umi';
import { Button } from 'antd';
import { edit } from '@/api/match';
import styles from './index.less';
const formList: any = [];
export default () => {
  const history = useHistory();
  const [infos, setInfos] = useState([]);
  const { state } = history.location;

  useEffect(() => {
    getRow(state.id).then(({ data }) => {
      setInfos(data.pipeiInfo.productVOList);
    });
  }, []);
  const handleValues = () => {};
  const save = async () => {
    const valuesList = [];
    for (let i = 0; i < formList.length; i++) {
      const form = formList[i];
      const values = await form.validateFields();
      valuesList.push(values);
    }

    edit({ id: state.id, productVOList: valuesList }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className={styles.matchEdit}>
      {infos.map((info, index) => {
        return (
          <EditBlock
            index={index}
            info={info}
            key={info.id}
            onChange={(form: any) => {
              formList.push(form);
            }}
          />
        );
      })}
      <div style={{ textAlign: 'center' }}>
        <Button
          onClick={() => {
            save();
          }}
        >
          查看
        </Button>
      </div>
    </div>
  );
};
