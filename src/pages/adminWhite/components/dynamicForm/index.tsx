import { Modal, Form, Row, Col, Tooltip, Input } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { getRow, save } from '@/api/white';
import { useEffect, useState } from 'react';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16, offset: 2 },
};

export default (props: any) => {
  const { id } = props;
  const [form] = Form.useForm();

  const [formInfo, setFormInfo] = useState([]);
  console.log(123);
  useEffect(() => {
    props.visible &&
      getRow(id).then(({ data }) => {
        form.resetFields();
        setFormInfo(data.list);
      });
  }, [props.visible]);
  const handleForm = (values: any): any => {
    const arr: any = [];
    Object.entries(values).map((item) => {
      arr.push({
        dataListId: id,
        label: item[1],
        fieldName: item[0],
      });
    });
    return arr;
  };
  const onOk = () => {
    form.validateFields().then((values: any) => {
      save(handleForm(values)).then(() => {
        props.onOk();
      });
    });
  };
  return (
    <Modal
      wrapClassName="myModal"
      getContainer={'#root'}
      visible={props.visible}
      title="字段管理"
      onOk={onOk}
      onCancel={props.onCancel}
      destroyOnClose
    >
      <p style={{ color: '#FF4651', textAlign: 'center', marginBottom: 24 }}>
        现有字段不能删除，若需要删除字段，则建议直接删除列表！
      </p>
      <Form form={form} {...layout} colon>
        {formInfo.map((item: any) => {
          return (
            <Form.Item label="字段名" required key={item.id}>
              <Row gutter={8} align="middle">
                <Col span={22}>
                  <Form.Item
                    name={item.fieldName}
                    noStyle
                    initialValue={item.label}
                    rules={[
                      {
                        required: true,
                        message: '请输入',
                      },
                    ]}
                  >
                    <Input size="large" placeholder="请输入" />
                  </Form.Item>
                </Col>
                <Col span={2}>
                  {/* <Tooltip
                    placement="right"
                    title={'列表显示名称，一般为中文，如注册手机黑名单'}
                  >
                    <ExclamationCircleOutlined
                      style={{
                        fontSize: 20,
                        color: '#6F7CAB',
                        cursor: 'pointer',
                      }}
                    />
                  </Tooltip> */}
                </Col>
              </Row>
            </Form.Item>
          );
        })}
      </Form>
    </Modal>
  );
};
