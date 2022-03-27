import { Form, Input, Button } from 'antd';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 6, offset: 1 },
};
export default () => {
  const [form] = Form.useForm();
  return (
    <Form {...layout} form={form}>
      <Form.Item label="产品序号" required>
        <Input size="large"></Input>
      </Form.Item>
      <Form.Item label="产品类别" required>
        <Input size="large"></Input>
      </Form.Item>
      <Form.Item label="产品名称" required>
        <Input size="large"></Input>
      </Form.Item>
      <Form.Item label="放款额度（万元）" required>
        <Input size="large"></Input>
      </Form.Item>
      <Form.Item label="放款年利率（%）" required>
        <Input size="large"></Input>
      </Form.Item>
      <Form.Item label="期限" required>
        <Input size="large"></Input>
      </Form.Item>
      <Form.Item label="放款时间" required>
        <Input size="large"></Input>
      </Form.Item>
      <Form.Item label="提款方式" required>
        <Input size="large"></Input>
      </Form.Item>
      <Form.Item label="还款方式" required>
        <Input size="large"></Input>
      </Form.Item>
      <Form.Item label="自定义还款方式" required>
        <Input size="large"></Input>
      </Form.Item>
      <Form.Item label="备注" required>
        <Input.TextArea size="large"></Input.TextArea>
      </Form.Item>
      <Form.Item label={' '} colon={false}>
        <Button>完成</Button>
        <Button>取消</Button>
      </Form.Item>
    </Form>
  );
};
