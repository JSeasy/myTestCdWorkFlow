import { Form, Button, Input, Radio, Col, Row, Select } from 'antd';
import Checkbox from '../checkbox';
import Title from '@/components/title/index';
import UploadForm from '@/components/uploadForm';

import styles from './index.less';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
const layout = {
  labelCol: { span: 9 },
  wrapperCol: { span: 15, offset: 1 },
};

const gshy: any = {
  1: '服装',
  2: '餐饮',
  3: '房地产',
  4: '汽车',
  5: '互联网',
};
export default forwardRef((props: any, ref: any) => {
  const [form] = Form.useForm();
  const { isInfo, info } = props;

  const [showForm, setShowForm] = useState([true, true, true, true]);
  useEffect(() => {
    isInfo && setShowForm([false, false, false, false]);
  }, []);

  useImperativeHandle(ref, () => ({
    validateForm: () => {
      return form.validateFields();
    },
    getForm: () => {
      return form;
    },
  }));
  return (
    <div className={styles.registForm}>
      <Form form={form} {...layout}>
        <Title
          title={'企业基本信息'}
          style={{ marginTop: 52, marginBottom: 40 }}
        ></Title>
        {showForm[0] && (
          <div style={{ width: 582, margin: '0 auto' }}>
            <Form.Item
              name="orgName"
              rules={[
                {
                  required: true,
                  message: '请输入公司名称',
                },
              ]}
              label="公司名称"
            >
              <Input placeholder="请输入公司名称" size="large" />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: '请输入公司行业',
                },
              ]}
              name="gshy"
              label="公司行业"
              initialValue={'1'}
            >
              <Select size="large">
                <Select.Option value={'1'}>服装</Select.Option>
                <Select.Option value={'2'}>餐饮</Select.Option>
                <Select.Option value={'3'}>房地产</Select.Option>
                <Select.Option value={'4'}>汽车</Select.Option>
                <Select.Option value={'5'}>互联网</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: '请输入联系人姓名',
                },
              ]}
              name="lxrxm"
              label="联系人姓名"
            >
              <Input placeholder="请输入联系人姓名" size="large" />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: '请输入联系人电话',
                },
              ]}
              name="lxrdh"
              label="联系人电话"
            >
              <Input placeholder="请输入联系人电话" size="large" />
            </Form.Item>
            {isInfo && (
              <div style={{ textAlign: 'center' }}>
                <Button style={{ width: 140 }} className="save">
                  完成
                </Button>
                <Button>取消</Button>
              </div>
            )}
          </div>
        )}
        {!showForm[0] && (
          <div className={styles.formInfo}>
            <div>
              <Button
                type="link"
                className="editBtnTable"
                onClick={() => {
                  setShowForm([true, ...showForm]);
                }}
              >
                编辑
              </Button>
            </div>
            <p>
              <span>公司名称：</span>
              <span>{info.orgName}</span>
            </p>
            <p>
              <span>公司行业：</span>
              <span>{gshy[info.gshy]}</span>
            </p>
            <p>
              <span>联系人姓名：</span>
              <span>{info.lxrxm}</span>
            </p>
            <p>
              <span>联系电话：</span>
              <span>{info.lxrdh}</span>
            </p>
          </div>
        )}
        {props.children}
        <Title
          title={'法人征信'}
          style={{ marginTop: 52, marginBottom: 40 }}
        ></Title>
        <div style={{ width: 582, margin: '0 auto' }}>
          <Form.Item name={['frzxbgfileList', 'id']} label="法人征信报告">
            <UploadForm
              fileType={1}
              title={
                <p style={{ whiteSpace: 'nowrap' }}>
                  可在
                  <span
                    className="color"
                    onClick={() => {
                      window.open('https://ipcrs.pbccrc.org.cn');
                    }}
                  >
                    https://ipcrs.pbccrc.org.cn
                  </span>
                  点击"马上开始"申请下载
                </p>
              }
            />
          </Form.Item>
        </div>
        <Title
          title={'财务数据'}
          style={{ marginTop: 52, marginBottom: 40 }}
        ></Title>
        <div style={{ width: 582, margin: '0 auto' }}>
          <Form.Item
            rules={[
              {
                required: true,
                message: '请输入纳税等级',
              },
            ]}
            name="nsdj"
            label="纳税等级"
          >
            <Input placeholder="A/B/M/C" size="large" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: '请输入内容',
              },
            ]}
            name="nsze"
            label="近一年纳税总额(万元)"
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: '请输入内容',
              },
            ]}
            name="kpze"
            label="近一年开票总额(万元)"
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: '请输入内容',
              },
            ]}
            name="fzze"
            label="企业当前负债余额(万元)"
          >
            <Input size="large" />
          </Form.Item>
        </div>
        <Title title={'融资信息'} style={{ marginTop: 52, marginBottom: 40 }} />
        <div style={{ width: 582, margin: '0 auto' }}>
          <Form.Item label="融资类型">
            <Row>
              <Col span={9}>
                <Form.Item
                  name="rzlxXydk"
                  noStyle
                  valuePropName="checked"
                  initialValue={false}
                >
                  <Checkbox style={{ whiteSpace: 'nowrap' }}>信用贷款</Checkbox>
                </Form.Item>
              </Col>
              <Col span={15}>
                <Form.Item name={['xydkFileList', 'id']} noStyle>
                  <UploadForm
                    fileType={2}
                    title={
                      <p style={{ whiteSpace: 'nowrap' }}>
                        模板:
                        <span
                          className="color"
                          onClick={() => {
                            window.open('https://ipcrs.pbccrc.org.cn');
                          }}
                        >
                          提交数据.xlsx
                        </span>
                      </p>
                    }
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row style={{ marginTop: 30 }}>
              <Col span={9}>
                <Form.Item
                  name="rzlxDydk"
                  noStyle
                  valuePropName="checked"
                  initialValue={false}
                >
                  <Checkbox style={{ whiteSpace: 'nowrap' }}>抵押贷款</Checkbox>
                </Form.Item>
              </Col>
              <Col span={15}>
                <Form.Item name={['dydkfileList', 'id']} noStyle>
                  <UploadForm
                    title={
                      <p style={{ whiteSpace: 'nowrap' }}>
                        模板:
                        <span
                          className="color"
                          onClick={() => {
                            window.open('https://ipcrs.pbccrc.org.cn');
                          }}
                        >
                          提交数据.xlsx
                        </span>
                      </p>
                    }
                    fileType={3}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item name="rzph" label="融资偏好" initialValue={1}>
            <Radio.Group>
              <Radio value={'1'}>额度优先</Radio>
              <Radio value={'2'}>利率优先</Radio>
              <Radio value={'3'}>速度优先</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="xqje"
            label="需求金额"
            required
            rules={[
              {
                required: true,
                message: '请输入内容',
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
});
