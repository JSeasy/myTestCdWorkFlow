import RegistForm from '@/components/registForm';
import Title from '@/components/title';
import { Form, Input, Button } from 'antd';
import { useRef } from 'react';
import styles from './index.less';
import { add } from '@/api/customer';
import { useHistory } from 'umi';
export default (props: any) => {
  const ref = useRef<any>(null);
  const history = useHistory();
  const save = () => {
    ref.current.validateForm().then((values: any) => {
      console.log(values);
      add(values).then(() => {
        history.push('/customer');
      });
    });
  };
  return (
    <div className={styles.customerAdd}>
      <RegistForm ref={ref}>
        <Title title="账号信息" />
        <div style={{ margin: '0 auto', width: 582, marginTop: 40 }}>
          <Form.Item
            rules={[
              {
                required: true,
                message: '请输入登录手机号',
              },
            ]}
            name="mobile"
            label="登录手机号"
          >
            <Input placeholder="请输入联系人电话" size="large" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: '请输入登录密码',
              },
            ]}
            name="passwd"
            label="登录密码"
          >
            <Input placeholder="请设置登录密码" size="large" />
          </Form.Item>
        </div>
      </RegistForm>
      <div style={{ margin: '0 auto', width: 582 }}>
        <Button onClick={save}>保存</Button>
      </div>
    </div>
  );
};
