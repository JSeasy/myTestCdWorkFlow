import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import styles from './index.less';
export default () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const handleOk = () => {};
  return (
    <>
      <div className={styles.login}>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <img src={require('./assets/1.png')} />
            <img src={require('./assets/2.png')} className={styles.logo} />
            <p className={styles.welcome}>Welcome</p>
            <p className={styles.tip}>欢迎使用xxx系统</p>
          </div>
          <div className={styles.right}>
            <p className={styles.title}>登录</p>
            <div className={styles.border}></div>
            <Form form={form} layout="vertical">
              <Form.Item label="账号:" required>
                <Input placeholder="请输入账号" size="large" />
              </Form.Item>
              <Form.Item label="密码:" required>
                <Input placeholder="请输入密码" size="large" />
                <p className={styles.forget} onClick={() => setVisible(true)}>
                  忘记密码?
                </p>
              </Form.Item>
              <Form.Item>
                <Button size="large" type="primary" style={{ width: '100%' }}>
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
            <Button size="large" type="primary" style={{ width: '100%' }}>
              登录
            </Button>
          </div>
        </Modal>
      </div>
    </>
  );
};
