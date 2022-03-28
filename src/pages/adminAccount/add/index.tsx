import styles from './index.less';
import Title from '@/components/title/index';
import { getRoleType, add } from '@/api/account';
import { useEffect, useState } from 'react';
import { Form, Input, Button, Select, Row, Col } from 'antd';
import { useHistory } from 'umi';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 6, offset: 1 },
};
export default (props: any) => {
  const history = useHistory();
  const [form] = Form.useForm();
  const [roleType, setRoleType] = useState([]);
  const getRoleTypeAdd = () => {
    getRoleType().then(({ data }) => {
      setRoleType(data.roleList);
    });
  };
  useEffect(() => {
    getRoleTypeAdd();
  }, []);

  const save = () => {
    form.validateFields().then((values) => {
      add({ ...values }).then((res) => {
        history.push('/account');
      });
    });
  };

  return (
    <div className={styles.accountAdd}>
      <Title
        title={'企业基本信息'}
        style={{ marginTop: 22, marginBottom: 64 }}
      />
      <Form {...layout} form={form}>
        <Form.Item
          name="userName"
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
          name="realName"
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
          name="mobile"
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
          name="passwd"
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

        <Title title={'角色信息'} style={{ marginTop: 64, marginBottom: 64 }} />
        <Form.Item
          name="roleIds"
          label="角色"
          rules={[
            {
              required: true,
              message: '请选择角色',
            },
          ]}
          required
          initialValue=""
        >
          <Select size="large">
            <Select.Option value="">--请选择--</Select.Option>
            {roleType.map((item: any) => {
              return (
                <Select.Option value={item.roleId} key={item.roleId}>
                  {item.roleName}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
      </Form>
      <Row>
        <Col span={8}></Col>
        <Col span={6} offset={1}>
          <Button onClick={save} style={{ width: '100%' }}>
            保存
          </Button>
        </Col>
      </Row>
    </div>
  );
};
