import { Form, Input, Button, Select, Checkbox } from 'antd';
import { useState } from 'react';
const { Option } = Select;
export default (props: any) => {
  const [form] = Form.useForm();
  const [require, setRequire] = useState(true);
  const submit = () => {
    form.validateFields().then((res) => {});
  };
  const checkBoxChange = (e: any) => {
    console.log(e.target.checked);
    setRequire(e.target.checked);
  };

  const row = () => {
    return (
      <Form.Item label="name" name="name">
        <Input
          style={{ width: '120px', marginRight: '10px' }}
          placeholder="Input street"
          size="large"
        />
      </Form.Item>
    );
  };

  return (
    <>
      <Form
        form={form}
        layout="horizontal"
        colon={false}
        initialValues={{
          time: {
            flag: true,
            province: 'day',
            street: '',
          },
          name: '',
        }}
      >
        <Form.Item
          label={<Checkbox onChange={checkBoxChange}>address</Checkbox>}
        >
          <Form.Item
            name={['time', 'street']}
            noStyle
            rules={[
              {
                required: require,
                message: 'Street is required',
              },
            ]}
          >
            <Input
              style={{ width: '120px', marginRight: '10px' }}
              placeholder="Input street"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name={['time', 'province']}
            noStyle
            rules={[{ required: true, message: 'Province is required' }]}
          >
            <Select
              placeholder="Select province"
              size="large"
              style={{ width: '120px' }}
            >
              <Option value="day">天</Option>
              <Option value="year">年</Option>
            </Select>
          </Form.Item>
        </Form.Item>
        {row()}
      </Form>
      <Button onClick={submit}>提交</Button>
    </>
  );
};
