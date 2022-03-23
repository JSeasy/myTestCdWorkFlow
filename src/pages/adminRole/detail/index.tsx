import styles from './index.less';
import Title from '@/components/title/index';
import { getDetail } from '@/api/role';
import { useEffect, useState } from 'react';
import { Form, Input } from 'antd';
import PermissionCheckBox from '../components/permissionCheckBox/index';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 6, offset: 1 },
};
export default (props: any) => {
  const { state } = props.location;
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  useEffect(() => {
    getDetail(state.id).then(({ data }) => {
      const { sysRole, menus } = data;
      form.setFieldsValue({
        remark: sysRole.remark,
        roleName: sysRole.roleName,
      });
      setData(menus);
    });
  }, []);
  return (
    <div className={styles.roleDetail}>
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
      <PermissionCheckBox data={data} />
    </div>
  );
};
