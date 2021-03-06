import styles from './index.less';
import Title from '@/components/title/index';
import { getDetail } from '@/api/role';
import { useEffect } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { useImmer } from 'use-immer';

import PermissionCheckBox from '../components/permissionCheckBox/index';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 6, offset: 1 },
};
export default (props: any) => {
  const { state } = props.location;
  const [form] = Form.useForm();
  const [data, updateData] = useImmer([]);
  const getDetailEdit = () => {
    getDetail(state.id).then(({ data }) => {
      const { sysRole, menus } = data;
      form.setFieldsValue({
        remark: sysRole.remark,
        roleName: sysRole.roleName,
      });
      updateData(menus);
    });
  };

  useEffect(() => {
    getDetailEdit();
  }, []);
  const onChange = (itemIndex: any, childIndex: any, value: any) => {
    updateData((draft) => {
      draft[itemIndex].children[childIndex].checked = value;
    });
  };
  return (
    <div className={styles.roleDetail}>
      <Title title={'角色信息'} style={{ marginTop: 22, marginBottom: 64 }} />
      <Row>
        <Col span={8}>123</Col>
        <Col span={6} offset={1}>
          123
        </Col>
      </Row>
      <Row>
        <Col span={8}>123</Col>
        <Col span={6}>123</Col>
      </Row>
      <Title title={'资源'} style={{ marginTop: 64, marginBottom: 64 }} />
      <div style={{ textAlign: 'center', width: 481, margin: '0 auto' }}>
        <Button>保存</Button>
      </div>
    </div>
  );
};
