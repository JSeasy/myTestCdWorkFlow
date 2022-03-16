import { Button } from 'antd';
import { useHistory } from 'umi';
import { Modal } from 'antd';
import { useState } from 'react';
export default (props: any) => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const handleOk = () => {};
  return (
    <>
      <Button type="link" onClick={() => history.push('/views/match/' + 12)}>
        查看
      </Button>
      <Button type="link" onClick={() => setVisible(true)}>
        备注
      </Button>
      <Modal
        title="快速备注"
        visible={visible}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      ></Modal>
    </>
  );
};
