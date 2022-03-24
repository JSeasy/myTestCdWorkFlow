import styles from './index.less';
import Title from '@/components/title/index';
import { getAllAuth, add } from '@/api/role';
import { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'umi';
import PermissionCheckBox from '../components/permissionCheckBox/index';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 6, offset: 1 },
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
    <div className={styles.roleAdd}>
      <Title title={'角色信息'} style={{ marginTop: 22, marginBottom: 64 }} />
      <Form {...layout} form={form}>
        <Form.Item
          name="roleName"
          rules={[
            {
              required: true,
              message: '请选择插件种类',
            },
          ]}
          label="角色名"
        >
          <Input size="large" placeholder="请输入角色名"></Input>
        </Form.Item>
        <Form.Item name="remark" label="描述">
          <Input.TextArea size="large" placeholder="请输入描述" />
        </Form.Item>
      </Form>
      <Title title={'资源'} style={{ marginTop: 64, marginBottom: 64 }} />
      <PermissionCheckBox data={data} menuIds={menuIds} onChange={onChange} />
      <div style={{ textAlign: 'center', width: 481, margin: '0 auto' }}>
        <Button onClick={save}>保存</Button>
      </div>
    </div>
  );
};
