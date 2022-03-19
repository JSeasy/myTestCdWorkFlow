import { Modal, Form, Input, Select, Row, Col, Tooltip } from 'antd';
import { getTemplate, add, edit } from '@/api/product/index';
import { useEffect, useState } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { Option } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
export default (props: any) => {
  const { id, onOk, onCancel, visible, label, isCopy } = props;
  console.log(label);
  const [form] = Form.useForm();
  // 获取模板列表
  const [templates, setTemplates] = useState([]);
  const templateApi = () => {
    getTemplate().then((res) => {
      setTemplates(res.data.modelList);
    });
  };
  useEffect(() => {
    !id && templateApi();
  }, []);
  const onCheck = async () => {
    const values = await form.validateFields();
    isCopy
      ? add({ ...values, id }).then(onOk)
      : id
      ? edit({ ...values, id }).then(onOk)
      : add(values).then(onOk);
  };
  return (
    <Modal
      wrapClassName="myModal"
      getContainer={'#root'}
      title={isCopy ? '复制模型' : id ? '编辑模型' : '新增模型'}
      visible={visible}
      onOk={onCheck}
      onCancel={onCancel}
      destroyOnClose
    >
      <Form
        form={form}
        {...layout}
        colon
        initialValues={{
          label,
          id: '',
        }}
        labelAlign="left"
      >
        {isCopy && (
          <Form.Item label="复制模型" required>
            <p style={{ fontSize: 14, color: '#646093', paddingLeft: 40 }}>
              {label}
            </p>
          </Form.Item>
        )}
        <Form.Item label={isCopy ? '新模型名' : '模型名'} required>
          <Row gutter={8} align="middle">
            <Col span={22}>
              <Form.Item
                name="label"
                noStyle
                rules={[
                  {
                    required: true,
                    message: '请输入模型名',
                  },
                ]}
              >
                <Input size="large" placeholder="请输入模型名" />
              </Form.Item>
            </Col>
            <Col span={2}>
              <Tooltip
                placement="right"
                title={'模型显示名称，一般为中文，如"注册模型"'}
              >
                <ExclamationCircleOutlined
                  style={{ fontSize: 20, color: '#6F7CAB', cursor: 'pointer' }}
                />
              </Tooltip>
            </Col>
          </Row>
        </Form.Item>
        {!id && (
          <Form.Item label="模板" required>
            <Row gutter={8} align="middle">
              <Col span={22}>
                <Form.Item
                  name="id"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '请选择模板',
                    },
                  ]}
                >
                  <Select size="large">
                    <Option value="">--模板--</Option>
                    {templates.map((template: any) => {
                      return (
                        <Option value={template.id} key={template.id}>
                          {template.label}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={2}>
                <Tooltip
                  placement="right"
                  title={'建议使用模板一键创建模型，熟悉后可自行创建模型'}
                >
                  <ExclamationCircleOutlined
                    style={{
                      fontSize: 20,
                      color: '#6F7CAB',
                      cursor: 'pointer',
                    }}
                  />
                </Tooltip>
              </Col>
            </Row>
          </Form.Item>
        )}
      </Form>
    </Modal>
  );
};
