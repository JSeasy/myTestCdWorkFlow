import { useState } from 'react';
import styles from './index.less';
import cs from 'classnames';
import { Button, Checkbox, Form, Input } from 'antd';
import Title from '@/components/title/index';
import RegistForm from './components/registForm/index';
export default (props: any) => {
  const [active, setActive] = useState(0);
  const [form] = Form.useForm();
  return (
    <div className={styles.regist}>
      <div className={styles.title}>
        <div
          className={cs(
            styles.icon,
            active >= 0 ? styles.iconActive : undefined,
          )}
        >
          <img src={require('./assets/1.png')} />
          <p>注册须知</p>
        </div>
        <div className={styles.dashed}></div>
        <div
          className={cs(
            styles.icon,
            active >= 1 ? styles.iconActive : undefined,
          )}
        >
          <img src={require('./assets/2.png')} />
          <img src={require('./assets/2-1.png')} />
          <p>账号信息</p>
        </div>
        <div className={styles.dashed}></div>
        <div
          className={cs(
            styles.icon,
            active >= 2 ? styles.iconActive : undefined,
          )}
        >
          <img src={require('./assets/3.png')} />
          <img src={require('./assets/3-1.png')} />
          <p>完善资料</p>
        </div>
      </div>
      {active === 0 && (
        <div className={styles.report}>
          <h1>尊敬的用户：</h1>
          <h1>欢迎您注册并使用XXXXXXX平台。</h1>
          <div className={styles.border}></div>
          <h2>一、注册</h2>
          <p>步骤1、注册用户 </p>
          <p>
            根据系统提示，在网上填写必要的身份、所在单位等用户信息，提交平台管理员审批，审批通过后即可成为"注册用户"。
          </p>
          <p> 步骤2、用户预约权限</p>
          <p>
            1）如果您本人承担测试费，需要登录平台后建立课题组（含企业）并联系平台业务办进行账户充值，即可进行相关共享仪器预约。
          </p>
          <p>
            2）如果您使用其他课题组（含企业）的测试费进行实验，请您联系该课题组组长，请课题组组长在系统中将您添加为组员，添加后即可进行相关共享仪器预约。
          </p>
          <h2>二、责任</h2>
          <p>1）用户须遵守国家法律法规。</p>
          <p>
            2）用户须按要求填写准确的个人资料，如用户提供的资料包含有不正确的信息，本平台保留结束用户使用相关服务的权利。
          </p>
          <p>3）平台承诺保守用户信息、测试信息等秘密。</p>
          <h2>三、解释权说明</h2>
          <p>以上内容最终解释权归XXXXXXXXXX所有。</p>
          <div style={{ marginTop: 20 }}>
            <Checkbox></Checkbox>
            <span style={{ marginLeft: 12, color: '#696F79' }}>
              我已认真阅读并同意
              <span className="color">《注册须知》</span>
            </span>
          </div>
          <div style={{ textAlign: 'center', marginTop: 55 }}>
            <Button
              onClick={() => {
                setActive(1);
              }}
            >
              下一步
            </Button>
          </div>
        </div>
      )}
      {active === 1 && (
        <div className={styles.info}>
          <h1 className={styles.title}>请填写账号信息</h1>
          <Form form={form} layout="vertical">
            <Form.Item
              name="loginName"
              rules={[
                {
                  required: true,
                  message: '请输入手机号',
                },
              ]}
              label="手机号"
            >
              <Input placeholder="请输入手机号" size="large" />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                },
              ]}
              name="passwd"
              label="设置密码"
            >
              <Input
                placeholder="密码由6～16位字母、数字、符号组成，区分大小写"
                size="large"
              />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: '请再次输入密码',
                },
              ]}
              name="passwd1"
              label="确认密码"
            >
              <Input
                placeholder="密码由6～16位字母、数字、符号组成，区分大小写"
                size="large"
              />
            </Form.Item>
          </Form>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Button
              style={{ width: '100%' }}
              onClick={() => {
                form.validateFields().then((values) => {
                  setActive(2);
                });
              }}
            >
              下一步
            </Button>
          </div>
        </div>
      )}
      {active === 2 && (
        <div className={styles.formWrap}>
          <h1>请完善资料</h1>
          <RegistForm />
        </div>
      )}
    </div>
  );
};
