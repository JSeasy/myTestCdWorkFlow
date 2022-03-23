import { Form, Input, Row, Col } from 'antd';
import Title from '@/components/title/index';
import UploadForm from '@/components/uploadForm';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8, offset: 1 },
};

export default (props: any) => {
  const [form] = Form.useForm();
  return (
    <>
      <Form form={form} {...layout}>
        <Title
          title={'企业基本信息'}
          style={{ marginTop: 52, marginBottom: 40 }}
        ></Title>
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
        <Title
          title={'法人征信'}
          style={{ marginTop: 52, marginBottom: 40 }}
        ></Title>
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
        <Title
          title={'财务数据'}
          style={{ marginTop: 52, marginBottom: 40 }}
        ></Title>
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
        <Title title={'融资信息'} style={{ marginTop: 52, marginBottom: 40 }} />
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
          <Row gutter={8} align="middle">
            <Col span={12}>
              <Form.Item
                name="searchIntervalValue"
                noStyle
                rules={[
                  {
                    required: true,
                    message: '请输入时间切片',
                  },
                ]}
              >
                <Input size="large" placeholder="请输入时间片"></Input>
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item
                name="searchIntervalType"
                noStyle
                initialValue="1"
              ></Form.Item>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </>
  );
};
