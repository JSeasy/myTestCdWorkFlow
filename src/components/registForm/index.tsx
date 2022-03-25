import { Form, Input, Radio } from 'antd';
import Title from '@/components/title/index';
import UploadForm from '@/components/uploadForm';
import CheckboxSingle from '../checkboxSingle/index';
import styles from './index.less';
const layout = {
  labelCol: { span: 9 },
  wrapperCol: { span: 15, offset: 1 },
};

export default (props: any) => {
  const [form] = Form.useForm();
  return (
    <div className={styles.registForm}>
      <Form form={form} {...layout}>
        <Title
          title={'企业基本信息'}
          style={{ marginTop: 52, marginBottom: 40 }}
        ></Title>
        <div style={{ width: 582, margin: '0 auto' }}>
          <Form.Item
            name="loginName"
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
                message: '请输入密码',
              },
            ]}
            name="passwd"
            label="公司行业"
          >
            <Input
              placeholder="密码由6～16位字母、数字、符号组成，区分大小写"
              size="large"
            />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: '请再次输入密码',
              },
            ]}
            name="passwd1"
            label="联系人姓名"
          >
            <Input
              placeholder="密码由6～16位字母、数字、符号组成，区分大小写"
              size="large"
            />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: '请再次输入密码',
              },
            ]}
            name="passwd1"
            label="联系人电话"
          >
            <Input
              placeholder="密码由6～16位字母、数字、符号组成，区分大小写"
              size="large"
            />
          </Form.Item>
        </div>

        <Title
          title={'法人征信'}
          style={{ marginTop: 52, marginBottom: 40 }}
        ></Title>
        <div style={{ width: 582, margin: '0 auto' }}>
          <Form.Item name="passwd1" label="法人征信">
            <UploadForm
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
            name="passwd1"
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
            name="passwd1"
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
            name="passwd1"
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
            name="passwd1"
            label="企业当前负债余额(万元)"
          >
            <Input size="large" />
          </Form.Item>
        </div>
        <Title title={'融资信息'} style={{ marginTop: 52, marginBottom: 40 }} />
        <div style={{ width: 582, margin: '0 auto' }}>
          <Form.Item
            rules={[
              {
                required: true,
                message: '请上传文件',
              },
            ]}
            name="passwd1"
            label="融资类型"
          >
            <Form.Item
              name="searchIntervalValue"
              noStyle
              rules={[
                {
                  required: true,
                  message: '请输入时间切片',
                },
              ]}
            ></Form.Item>
            <Form.Item
              name="searchIntervalValue"
              noStyle
              rules={[
                {
                  required: true,
                  message: '请输入时间切片',
                },
              ]}
              initialValue={1}
            >
              <CheckboxSingle
                info={[
                  { label: '信用贷款', value: 1 },
                  { label: '融资类型', value: 2 },
                ]}
              />
            </Form.Item>
            <Form.Item name="searchIntervalType" noStyle>
              <UploadForm
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
          </Form.Item>
          <Form.Item name="searchIntervalType" label="融资偏好">
            <Radio.Group>
              <Radio value={1}>A</Radio>
              <Radio value={2}>B</Radio>
              <Radio value={3}>C</Radio>
              <Radio value={4}>D</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="searchIntervalType" label="需求金额">
            <Input size="large" />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
