import { Button, Form, Input, Modal } from 'antd';
import { useHistory } from 'umi';
import { useState } from 'react';
// import Modal from '@/components/modal/index';
export default (props: any) => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const handleOk = async () => {
    const values = await form.validateFields();
  };
  return (
    <>
      <Button type="link" onClick={() => history.push('/views/match/detail')}>
        详情
      </Button>
      <Button type="link" onClick={() => history.push('/views/match/edit')}>
        编辑
      </Button>
      <Button type="link" onClick={() => setVisible(true)}>
        备注
      </Button>
      <Modal
        wrapClassName="myModal"
        getContainer={'#root'}
        title="快速备注"
        visible={visible}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      >
        <Form form={form}>
          <Form.Item
            name="remark"
            label="备注"
            rules={[
              {
                required: true,
                message: '请输入备注',
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
