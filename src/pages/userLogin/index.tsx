import { useEffect, useState } from 'react';
import { Form, Input, Button, Modal, Space } from 'antd';
import styles from './index.less';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { login, getCode, regist } from '@/api/userLogin/index';
import { blobToDataURL } from '@/utils/index';
import { useHistory } from 'umi';
export default () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const [visible, setVisible] = useState<boolean>(false);
  const [src, setSrc] = useState<string | unknown>('');
  const handleOk = () => {};
  const onCheck = () => {
    form.validateFields().then((values) => {
      login(values).then((res) => {
        window.localStorage.setItem('token', res.data['x-auth-token']);
        history.push('/match');
      });
    });
  };

  const codeApi = () => {
    getCode().then((res: any) => {
      blobToDataURL(res).then((res: string | unknown) => {
        setSrc(res);
      });
    });
  };

  useEffect(() => {
    codeApi();
  }, []);
  return (
    <>
      <div className={styles.userLogin}>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <img
              src={require('./assets/2.png')}
              className={styles.logo}
              height="90"
            />
            <p className={styles.welcome}>Welcome</p>
            <p className={styles.tip}>欢迎使用xxx系统</p>
          </div>
          <div className={styles.right}>
            <p className={styles.title}>
              <span>登录</span>
              <span>
                还没有账号?<span>前往登录</span>
              </span>
            </p>
            <div className={styles.border}></div>
            <Form form={form} layout="vertical">
              <Form.Item
                name="loginName"
                rules={[
                  {
                    required: true,
                    message: '请输入账号',
                  },
                ]}
                label="账号"
              >
                <Input placeholder="请输入账号" size="large" />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: '请输入密码',
                  },
                ]}
                name="passwd"
                label="密码"
              >
                <Input.Password
                  placeholder="请输入密码"
                  size="large"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <Form.Item label="验证码" required>
                <Space size="large" align="center">
                  <Form.Item
                    name="captcha"
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: '请输入验证码',
                      },
                    ]}
                  >
                    <Input
                      placeholder="请输入验证码"
                      size="large"
                      style={{ width: '250px' }}
                      maxLength={4}
                    />
                  </Form.Item>
                  <img src={src} onClick={codeApi} />
                </Space>
              </Form.Item>

              <p className={styles.forget}>
                <span onClick={() => setVisible(true)}>忘记密码?</span>
              </p>
              <Form.Item>
                <Button
                  size="large"
                  type="primary"
                  style={{ width: '100%' }}
                  onClick={onCheck}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <Modal
          visible={visible}
          onOk={handleOk}
          onCancel={() => setVisible(false)}
          footer={null}
          closable={false}
          getContainer={false}
        >
          <div className={styles.modalContent}>
            <div className={styles.modalTitle}>
              <img src={require('./assets/3.png')} />
              <p>温馨提示</p>
            </div>
            <p className={styles.please}>
              如密码遗失，请与管理员联系寻回、重置密码
            </p>
            <Button
              size="large"
              type="primary"
              style={{ width: '100%' }}
              onClick={() => setVisible(false)}
            >
              登录
            </Button>
          </div>
        </Modal>
      </div>
    </>
  );
};
