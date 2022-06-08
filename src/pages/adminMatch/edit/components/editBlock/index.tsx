import { Form, Input, Select, Row, Col, Button } from 'antd';
import { useEffect, useState, useImperativeHandle } from 'react';
import styles from './index.less';
import Checkbox from '../../../../../components/checkbox';
export default (props: any, ref: any) => {
  const [form] = Form.useForm();
  const [require, setRequire] = useState(true);
  const submit = () => {
    form.validateFields().then((res) => {});
  };
  const checkBoxChange = (e: any) => {
    console.log(e.target.checked);
    setRequire(e.target.checked);
  };
  useEffect(() => {
    form.setFieldsValue({
      ...props.info,
    });
    props.onChange(form);
  }, []);

  return (
    <div className={styles.formItem}>
      <Form form={form} layout="horizontal" labelCol={{ span: 6 }}>
        <Form.Item name="id" style={{ display: 'none' }}>
          <Input />
        </Form.Item>
        <div className={styles.formContent}>
          <div style={{ textAlign: 'right', paddingBottom: 12 }}>
            <a>查看匹配结果</a>
          </div>
          <Row>
            <Col span={4}>
              <Form.Item
                valuePropName="checked"
                name="cpxhShow"
                initialValue={true}
              >
                <Checkbox />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                label="产品序号"
                name="cpxh"
                rules={[
                  {
                    required: require,
                    message: '请输入产品序号',
                  },
                ]}
                required
              >
                <Input size="large" placeholder="请输入产品序号"></Input>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                valuePropName="checked"
                name="cplbShow"
                initialValue={true}
              >
                <Checkbox />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                label="产品类别"
                name="cplb"
                rules={[
                  {
                    required: require,
                    message: '请输入产品类别',
                  },
                ]}
                required
                initialValue="1"
              >
                <Select size="large">
                  <Select.Option value="1">信用</Select.Option>
                  <Select.Option value="2">抵押</Select.Option>
                  <Select.Option value="3">其他</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                valuePropName="checked"
                name="cpmcShow"
                initialValue={true}
              >
                <Checkbox />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                label="产品名称"
                rules={[
                  {
                    required: require,
                    message: '请输入产品名称',
                  },
                ]}
                name="cpmc"
                required
              >
                <Input placeholder="请输入产品名称" size="large" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                valuePropName="checked"
                name="splxShow"
                initialValue={true}
              >
                <Checkbox />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item label="审批类型" name="splx" initialValue="1">
                <Select size="large">
                  <Select.Option value="1">线上</Select.Option>
                  <Select.Option value="2">线下</Select.Option>
                  <Select.Option value="3">线上+线下</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                valuePropName="checked"
                name="edShow"
                initialValue={true}
              >
                <Checkbox />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                label="额度(万)"
                name="ed"
                rules={[
                  {
                    required: require,
                    message: '请输入额度',
                  },
                ]}
                required
              >
                <Input placeholder="请输入额度" size="large" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                valuePropName="checked"
                name="lilvShow"
                initialValue={true}
              >
                <Checkbox />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                name="lilv"
                label="利率(%)"
                rules={[
                  {
                    required: require,
                    message: '请输入利率',
                  },
                ]}
                required
              >
                <Input placeholder="请输入利率" size="large" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                valuePropName="checked"
                name="qxsjShow"
                initialValue={true}
              >
                <Checkbox />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item label="期限" required>
                <Row gutter={8} align="middle">
                  <Col span={12}>
                    <Form.Item
                      name="qxsj"
                      noStyle
                      rules={[
                        {
                          required: true,
                          message: '请输入期限',
                        },
                      ]}
                    >
                      <Input size="large" placeholder="请输入放款时间"></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="qxdw" noStyle initialValue="1">
                      <Select size="large">
                        <Select.Option value="1">年</Select.Option>
                        <Select.Option value="2">月</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                valuePropName="checked"
                name="fksjShow"
                initialValue={true}
              >
                <Checkbox />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item label="放款时间" required>
                <Row gutter={8} align="middle">
                  <Col span={12}>
                    <Form.Item
                      name="fksj"
                      noStyle
                      rules={[
                        {
                          required: true,
                          message: '请输入放款时间',
                        },
                      ]}
                    >
                      <Input size="large" placeholder="请输入放款时间"></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="fkdw" noStyle initialValue="1">
                      <Select size="large">
                        <Select.Option value="1">天</Select.Option>
                        <Select.Option value="2">月</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                initialValue={true}
                valuePropName="checked"
                name="tkfsShow"
              >
                <Checkbox />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item label="提款方式" name="tkfs" initialValue="1">
                <Select size="large">
                  <Select.Option value="1">自主支付 </Select.Option>
                  <Select.Option value="2">受托支付 </Select.Option>
                  <Select.Option value="3">其他 </Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                initialValue={true}
                valuePropName="checked"
                name="hkfsShow"
              >
                <Checkbox />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item label="还款方式" name="hkfs" initialValue="1">
                <Select size="large">
                  <Select.Option value="1">先息后本 </Select.Option>
                  <Select.Option value="2">等额本息 </Select.Option>
                  <Select.Option value="3">等额本金 </Select.Option>
                  <Select.Option value="4">其他 </Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                initialValue={true}
                valuePropName="checked"
                name="remarkShow"
              >
                <Checkbox />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item label="备注" name="remark">
                <Input.TextArea placeholder="请输入备注" size="large" />
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
};
