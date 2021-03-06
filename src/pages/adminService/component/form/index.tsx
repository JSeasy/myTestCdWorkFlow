import { Form, Input, Button, Select, Row, Col } from 'antd';
import styles from './index.less';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState } from 'react';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 6, offset: 1 },
};
const cplb: any = {
  1: '信用',
  2: '抵押',
  3: '其他',
};
const splx: any = {
  1: '线上',
  2: '线下',
  3: '线上+线下',
};
const tkfs: any = {
  1: '自主支付',
  2: '受托支付',
  3: '其他',
};
const hkfs: any = {
  1: '先息后本',
  2: '等额本息',
  3: '等额本金',
  4: '其他',
};
export default (props: any) => {
  const [form] = Form.useForm();
  const [isEdit, setIsEdit] = useState(props.showBlock ? false : true);
  const { onChange, info, fromWhitch, onDel, setFromWhitch } = props;

  return (
    <div className={styles.myForm}>
      {isEdit ? (
        <Form {...layout} form={form}>
          <Form.Item
            label="产品序号"
            required
            name="cpxh"
            rules={[
              {
                required: true,
                message: '请输入产品序号',
              },
            ]}
          >
            <Input size="large"></Input>
          </Form.Item>
          <Form.Item label="产品类别" required name="cplb" initialValue="1">
            <Select size="large">
              <Select.Option value="1">信用</Select.Option>
              <Select.Option value="2">抵押</Select.Option>
              <Select.Option value="3">其他</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="产品名称"
            name="cpmc"
            required
            rules={[
              {
                required: true,
                message: '请输入产品名称',
              },
            ]}
          >
            <Input size="large"></Input>
          </Form.Item>
          <Form.Item label=" 审批类型" name="splx" required initialValue="1">
            <Select size="large">
              <Select.Option value="1">线上</Select.Option>
              <Select.Option value="2">线下</Select.Option>
              <Select.Option value="3">线上+线下</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="额度(万元)"
            name="ed"
            required
            rules={[
              {
                required: true,
                message: '请输入额度',
              },
            ]}
          >
            <Input size="large"></Input>
          </Form.Item>
          <Form.Item
            label="利率"
            rules={[
              {
                required: true,
                message: '请输入利率',
              },
            ]}
            name="lilv"
            required
          >
            <Input size="large"></Input>
          </Form.Item>
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
                  <Input size="large" placeholder="请输入期限"></Input>
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
          <Form.Item label="提款方式" name="tkfs" required initialValue="1">
            <Select size="large">
              <Select.Option value="1">自主支付</Select.Option>
              <Select.Option value="2">受托支付</Select.Option>
              <Select.Option value="3">其他</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="还款方式" required name="hkfs" initialValue="1">
            <Select size="large">
              <Select.Option value="1">先息后本</Select.Option>
              <Select.Option value="2">等额本息</Select.Option>
              <Select.Option value="3">等额本金</Select.Option>
              <Select.Option value="4">其他</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="备注" name="remark">
            <Input.TextArea size="large" />
          </Form.Item>
          <Form.Item label={' '} colon={false}>
            <Button
              className="addFormBtn"
              onClick={() => {
                form.validateFields().then((values) => {
                  onChange(values);
                  setIsEdit(false);
                });
              }}
            >
              完成
            </Button>
            <Button
              className="cancelFormBtn"
              onClick={() => {
                fromWhitch === 'add' ? onDel() : setIsEdit(false);
              }}
            >
              取消
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <div className={styles.formBlock}>
          <div className={styles.bar}>
            <Button
              type="link"
              className="editBtnTable"
              onClick={() => {
                form.setFieldsValue({ ...info });
                setIsEdit(true);
                setFromWhitch('edit');
              }}
            >
              <FormOutlined /> 编辑
            </Button>
            <Button type="link" className="delBtnTable" onClick={onDel}>
              <DeleteOutlined />
              删除
            </Button>
          </div>
          <div className={styles.content}>
            <div className={styles.list}>
              <div className={styles.item}>
                <h1>产品序号:</h1>
                <p>{info.cpxh}</p>
              </div>
              <div className={styles.item}>
                <h1>产品类别:</h1>
                <p>{cplb[info.cplb]}</p>
              </div>
              <div className={styles.item}>
                <h1>产品名称:</h1>
                <p>{info.cpmc}</p>
              </div>
              <div className={styles.item}>
                <h1>审批类型 :</h1>
                <p>{splx[info.splx]}</p>
              </div>
              <div className={styles.item}>
                <h1>额度:</h1>
                <p>{info.ed}万</p>
              </div>
              <div className={styles.item}>
                <h1>利率:</h1>
                <p>{info.lilv}%</p>
              </div>
              <div className={styles.item}>
                <h1>期限:</h1>
                <p>
                  {info.qxsj}
                  {info.qxdw === 1 ? '年' : '月'}
                </p>
              </div>
              <div className={styles.item}>
                <h1>放款时间:</h1>
                <p>
                  {info.fksj}
                  {info.fkdw === 1 ? '天' : '月'}
                </p>
              </div>
              <div className={styles.item}>
                <h1>提款方式:</h1>
                <p>{tkfs[info.tkfs]}</p>
              </div>
              <div className={styles.item}>
                <h1>还款方式:</h1>
                <p>{hkfs[info.hkfs]}</p>
              </div>
              <div className={styles.item}>
                <h1>备注:</h1>
                <p>{info.remark}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
