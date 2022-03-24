import styles from './index.less';
import Title from '@/components/title/index';
import { getAllAuth, add } from '@/api/role';
import { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'umi';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 7, offset: 1 },
};
export default (props: any) => {
  const history = useHistory();
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [menuIds, setMenuIds] = useState([]);
  const getDetailAdd = () => {
    getAllAuth().then(({ data }) => {
      setData(data.menus);
    });
  };
  useEffect(() => {
    getDetailAdd();
  }, []);

  const save = () => {
    form.validateFields().then((values) => {
      add({ ...values, menuIds }).then((res) => {
        history.push('/role');
      });
    });
  };
  const onChange = (menuIds: any) => {
    setMenuIds(menuIds);
  };
  return (
    <div className={styles.accountAdd}>
      <Title
        title={'企业基本信息'}
        style={{ marginTop: 22, marginBottom: 64 }}
      />
      <Form {...layout} form={form}>
        <Form.Item
          name="roleName"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
          ]}
          label="用户名"
        >
          <Input size="large" placeholder="请输入用户名"></Input>
        </Form.Item>
        <Form.Item
          name="remark"
          label="姓名"
          rules={[
            {
              required: true,
              message: '请输入姓名',
            },
          ]}
        >
          <Input size="large" placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item
          name="remark"
          rules={[
            {
              required: true,
              message: '请输入联系电话',
            },
          ]}
          label="联系电话"
        >
          <Input size="large" placeholder="请输入联系电话" />
        </Form.Item>
        <Form.Item
          name="remark"
          label="登录密码"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}
        >
          <Input size="large" placeholder="请输入密码" />
        </Form.Item>
      </Form>
      <Title title={'角色信息'} style={{ marginTop: 64, marginBottom: 64 }} />
      <div style={{ textAlign: 'center', width: 481, margin: '0 auto' }}>
        <Button onClick={save}>保存</Button>
      </div>
    </div>
  );
};
