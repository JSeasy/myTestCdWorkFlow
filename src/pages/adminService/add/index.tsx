import Title from '@/components/title/index';
import { Form, Input } from 'antd';
import styles from './index.less';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 6, offset: 1 },
};
import MyForm from '../component/form';
export default (props: any) => {
  const [form] = Form.useForm();
  return (
    <div className={styles.adminServiceAdd}>
      <Title title="企业信息" style={{ marginBottom: 40 }} />
      <Form {...layout} form={form}>
        <Form.Item label="地区/城市" required>
          <Input size="large"></Input>
        </Form.Item>
        <Form.Item label="服务企业名称" required>
          <Input size="large"></Input>
        </Form.Item>
        <Form.Item label="产品类型" required>
          <Input size="large"></Input>
        </Form.Item>
      </Form>
      <Title title="产品信息" style={{ marginTop: 64, marginBottom: 20 }} />
      <MyForm />
    </div>
  );
};
