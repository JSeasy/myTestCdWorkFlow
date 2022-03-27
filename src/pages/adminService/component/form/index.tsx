import { Form, Input, Button } from 'antd';
import styles from './index.less';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState } from 'react';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 6, offset: 1 },
};
export default () => {
  const [form] = Form.useForm();
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className={styles.myForm}>
      {isEdit ? (
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
            <Button
              onClick={() => {
                setIsEdit(false);
              }}
            >
              完成
            </Button>
            <Button>取消</Button>
          </Form.Item>
        </Form>
      ) : (
        <div className={styles.formBlock}>
          <div className={styles.bar}>
            <Button
              type="link"
              className="editBtnTable"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              <FormOutlined /> 编辑
            </Button>
            <Button type="link" className="delBtnTable">
              <DeleteOutlined />
              删除
            </Button>
          </div>
          <div className={styles.content}>
            <div className={styles.list}>
              <div className={styles.item}>
                <h1>产品序号:</h1>
                <p>产品1</p>
              </div>
              <div className={styles.item}>
                <h1>产品序号:</h1>
                <p>产品1</p>
              </div>
              <div className={styles.item}>
                <h1>产品序号:</h1>
                <p>产品1</p>
              </div>
              <div className={styles.item}>
                <h1>产品序号:</h1>
                <p>产品1</p>
              </div>
              <div className={styles.item}>
                <h1>产品序号:</h1>
                <p>产品1</p>
              </div>
              <div className={styles.item}>
                <h1>产品序号:</h1>
                <p>产品1</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
