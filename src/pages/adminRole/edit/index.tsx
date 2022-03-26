import styles from './index.less';
import Title from '@/components/title/index';
import { getDetail } from '@/api/role';
import { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';

import PermissionCheckBox from '../components/permissionCheckBox/index';
import { Redirect, useModel } from 'umi';
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20, offset: 1 },
};
export default (props: any) => {
  const {
    initialState: {
      ['/role']: { edit: editAuth },
    },
  } = useModel('@@initialState');
  if (!editAuth) {
    return <Redirect to="/404" />;
  }
  const { state } = props.location;
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [menuIds, setMenuIds] = useState([]);
  const getDetailEdit = () => {
    getDetail(state.id).then(({ data }) => {
      const { sysRole, menus } = data;
      form.setFieldsValue({
        remark: sysRole.remark,
        roleName: sysRole.roleName,
      });
      setData(menus);
      setMenuIds(sysRole.menuIds);
    });
  };

  useEffect(() => {
    getDetailEdit();
  }, []);
  const onChange = (menuIds: any) => {
    setMenuIds(menuIds);
  };
  return (
    <div className={styles.roleDetail}>
      <Title title={'角色信息'} style={{ marginTop: 22, marginBottom: 64 }} />
      <div style={{ width: 481, margin: '0 auto' }}>
        <Form {...layout} form={form}>
          <Form.Item
            name="roleName"
            rules={[
              {
                required: true,
                message: '请输入角色名',
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
      </div>

      <Title title={'资源'} style={{ marginTop: 64, marginBottom: 64 }} />
      <PermissionCheckBox data={data} onChange={onChange} menuIds={menuIds} />
      <div style={{ textAlign: 'center', width: 481, margin: '0 auto' }}>
        <Button>保存</Button>
      </div>
    </div>
  );
};
