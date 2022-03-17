import Title from '@/components/title/index';
import { Form, Input } from 'antd';
export default (props: any) => {
  const [form] = Form.useForm();
  return (
    <div className="adminServiceAdd">
      <Title title="企业信息" />
      <Form form={form} labelCol={{ span: 9 }} wrapperCol={{ span: 6 }}>
        <Form.Item label="地区/城市" required>
          <Input></Input>
        </Form.Item>
        <Form.Item label="服务企业名称" required>
          <Input></Input>
        </Form.Item>
        <Form.Item label="产品类型" required>
          <Input></Input>
        </Form.Item>
      </Form>
      <Title title="产品信息" />
    </div>
  );
};
