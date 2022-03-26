import styles from './index.less';
import { Form, Input, Button, Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import { getMobileCode, getUserInfo, editPassword } from '@/api/login';
import { privatePhone } from '@/utils';
import { message } from 'antd';
export default (props: any) => {
  const [form] = Form.useForm();
  const [form1] = Form.useForm();
  const [step, setStep] = useState('code');
  const [code, setCode] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    getUserInfo().then(({ data }) => {
      setUserInfo(data.user);
    });
  }, []);
  return (
    <div className={styles.forget}>
      <div className={styles.title}>
        <h1>{step === 'code' ? '忘记密码' : '设置密码'}</h1>
        <div className={styles.border}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.form}>
          <div className={styles.logo}>
            <img src={require('./assets/1.png')} alt="" />
          </div>
          {step === 'code' && (
            <div className={styles.number}>
              <p>将验证码发至</p>
              <p>{userInfo.mobile ? privatePhone(userInfo.mobile) : ''}</p>
              <Form form={form} layout="vertical">
                <Form.Item label="验证码" required>
                  <Row gutter={8} justify="start">
                    <Col span={18}>
                      <Form.Item
                        name="mobileCode"
                        rules={[
                          {
                            required: true,
                            message: '请输入验证码',
                          },
                          {
                            min: 6,
                            message: '最少六位',
                          },
                        ]}
                      >
                        <Input
                          placeholder="请输入验证码"
                          size="large"
                          minLength={6}
                          maxLength={6}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Button
                        className="getCode"
                        onClick={() => {
                          getMobileCode({ mobile: userInfo.mobile }).then(
                            () => {
                              message.success('获取验证码成功!');
                            },
                          );
                        }}
                      >
                        获取验证码
                      </Button>
                    </Col>
                  </Row>
                </Form.Item>
              </Form>
              <Button
                onClick={() => {
                  form.validateFields().then((values: any) => {
                    setCode(values);
                    setStep('password');
                  });
                }}
              >
                下一步
              </Button>
            </div>
          )}
          {step === 'password' && (
            <>
              <Form form={form1} layout="vertical" validateTrigger={false}>
                <Form.Item
                  name="passwd"
                  rules={[
                    {
                      required: true,
                      message: '请输入密码',
                    },
                  ]}
                  label="设置密码"
                >
                  <Input
                    placeholder="密码由6～16位字母、数字、符号组成，区分大小写"
                    size="large"
                  />
                </Form.Item>
                <Form.Item
                  name="verifyPasswd"
                  rules={[
                    {
                      required: true,
                      message: '请确认密码',
                    },
                  ]}
                  label="确认密码"
                >
                  <Input placeholder="再一次输入密码确认" size="large" />
                </Form.Item>
              </Form>
              <Button
                onClick={() => {
                  setStep('password');
                  form1.validateFields().then((values) => {
                    editPassword({
                      ...code,
                      mobile: userInfo.mobile,
                      ...values,
                    }).then((res) => {
                      console.log(res);
                    });
                  });
                }}
              >
                完成
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
