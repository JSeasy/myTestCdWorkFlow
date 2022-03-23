import styles from './index.less';
import { Form, Input, Button, Row, Col } from 'antd';
import { useState } from 'react';
export default (props: any) => {
  const [form] = Form.useForm();
  const [form1] = Form.useForm();
  const [step, setStep] = useState('code');
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
              <p>135****2446</p>
              <Form form={form} layout="vertical">
                <Form.Item label="验证码" required>
                  <Row gutter={8} justify="start">
                    <Col span={18}>
                      <Form.Item
                        name="loginName"
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
                          minLength={11}
                          maxLength={11}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Button
                        className="getCode"
                        onClick={() => {
                          form.validateFields();
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
                  setStep('password');
                }}
              >
                下一步
              </Button>
            </div>
          )}
          {step === 'password' && (
            <>
              <Form form={form1} layout="vertical">
                <Form.Item
                  name="loginName"
                  rules={[
                    {
                      required: true,
                      message: '请输入验证码',
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
                  name="loginName"
                  rules={[
                    {
                      required: true,
                      message: '请输入验证码',
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
