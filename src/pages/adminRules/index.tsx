import styles from './index.less';
import Search from '@/components/searchInput';
import Table from '@/components/table';
import { useEffect, useState } from 'react';
import createColumns from './columns';
import { useHistory, useParams } from 'umi';
import { Modal, Form, Input, Button, Row, Col, Tooltip, Select } from 'antd';
import {
  FormOutlined,
  DeleteOutlined,
  PlusOutlined,
  ExclamationCircleOutlined,
  DiffOutlined,
} from '@ant-design/icons';
import { get, del, save } from '@/api/rules';
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16, offset: 2 },
};

const { Option } = Select;

export default (props: any) => {
  const history = useHistory();
  const params = useParams();
  const [searchCondition, setSearchCondition] = useState({
    name: '',
    modelId: params.id,
  });
  const [pageInfo, setPageInfo] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [data, setData] = useState([]);

  // 删除
  const [delVisible, setDelVisible] = useState(false);
  // 新增和编辑
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState('');

  const [form] = Form.useForm();

  const Action = (props: any) => {
    const history = useHistory();
    const { row, col } = props;
    return (
      <>
        <Button
          type="link"
          onClick={() => {
            setVisible(true);
            setId(row.id);
            const { comment, label, high, median } = row;
            form.setFieldsValue({
              comment,
              label,
              high,
              median,
            });
          }}
          className="editBtnTable"
        >
          <FormOutlined />
          编辑
        </Button>

        <Button
          type="link"
          onClick={() => {
            setId(row.id);
            setDelVisible(true);
          }}
          className="delBtnTable"
        >
          <DeleteOutlined />
          删除
        </Button>
      </>
    );
  };

  const columns: any = createColumns((row: any, col: any) => (
    <Action row={row} col={col} key={row.id} />
  ));

  const search = (params?: any) => {
    get({
      ...searchCondition,
      pageNo: pageInfo.current,
      pageSize: pageInfo.pageSize,
      ...params,
    }).then(({ data }) => {
      const { page } = data;
      setData(page.list);
      setPageInfo({
        ...pageInfo,
        total: page.rowCount,
        current: page.pageNum,
        pageSize: page.pageSize,
      });
    });
  };

  useEffect(() => {
    search();
  }, []);
  return (
    <>
      <div className={styles.adminStrategy}>
        <div className={styles.topBar}>
          <div className={styles.searchCondition}>
            <Search
              placeholder={'配置信息名称搜索'}
              value={searchCondition.name}
              onChange={(e: any) => {
                setSearchCondition({
                  ...searchCondition,
                  name: e.target.value,
                });
              }}
              onPressEnter={() => search({ pageNo: 1 })}
              onSearch={() =>
                search({
                  pageNo: 1,
                })
              }
            />
          </div>
          <Button
            className="addBtn"
            onClick={() => {
              setVisible(true);
              setId('');
              form.resetFields();
            }}
          >
            <PlusOutlined />
            新增
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          rowKey="id"
          pageInfo={pageInfo}
          onChange={(pageNo: number, pageSize: number) => {
            search({ pageNo, pageSize });
          }}
          onRow={(row: any) => {
            return {
              onDoubleClick: () => {
                history.push('/product/' + row.id + 'rules');
              },
            };
          }}
        />
      </div>
      <Modal
        wrapClassName="myModal"
        getContainer={'#root'}
        visible={delVisible}
        title="删除字段"
        okText={'删除'}
        width={400}
        onOk={() => {
          del([id]).then(() => {
            setDelVisible(false);
            search();
          });
        }}
        onCancel={() => setDelVisible(false)}
        okButtonProps={{
          style: { background: '#ff4651', borderColor: '#ff4651' },
        }}
      >
        <p style={{ textAlign: 'center' }}>确认删除该行?</p>
      </Modal>

      <Modal
        wrapClassName="myModal"
        getContainer={'#root'}
        visible={visible}
        title={id ? '编辑字段' : '新增字段'}
        width={560}
        onOk={() => {
          form.validateFields().then((values) => {
            save({
              ...values,
              modelId: params.id,
              id: id ? id : undefined,
            }).then(() => {
              setVisible(false);
              search({ pageNo: 1 });
            });
          });
        }}
        onCancel={() => setVisible(false)}
      >
        <Form form={form} {...layout} colon>
          <Form.Item label="显示名称" required>
            <Row gutter={8} align="middle">
              <Col span={22}>
                <Form.Item
                  name="label"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '请输入策略名',
                    },
                  ]}
                >
                  <Input size="large" placeholder="请输入策略名" />
                </Form.Item>
              </Col>
              <Col span={2}>
                <Tooltip
                  placement="right"
                  title={
                    '规则名称，一般为中文，如"1天内设备注册次数过多或注册时间间隔过短"'
                  }
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
          <Form.Item label="命中初始得分">
            <Row gutter={8} align="middle">
              <Col span={22}>
                <Form.Item name="comment" noStyle>
                  <Input.TextArea size="large" placeholder="请输入备注" />
                </Form.Item>
              </Col>
              <Col span={2}>
                <Tooltip
                  placement="right"
                  title={'初始得分，在此基础上进行累加计算'}
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
          <Form.Item label="命中基数" required>
            <Row gutter={8} align="middle">
              <Col span={22}>
                <Form.Item
                  name="median"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '请输入警戒值',
                    },
                  ]}
                >
                  <Input size="large" placeholder="请输入警戒值"></Input>
                </Form.Item>
              </Col>
              <Col span={2}>
                <Tooltip
                  placement="right"
                  title={'配合操作符，与指标字段进行运算'}
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
          <Form.Item label="操作符" required>
            <Row gutter={8} align="middle">
              <Col span={22}>
                <Form.Item
                  name="high"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '请输入拒绝值',
                    },
                  ]}
                >
                  <Select size="large">
                    <Select.Option value="">--请选择--</Select.Option>
                    <Select.Option>加</Select.Option>
                    <Select.Option>减</Select.Option>
                    <Select.Option>乘</Select.Option>
                    <Select.Option>除</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={2}>
                {/* <Tooltip
                  placement="right"
                  title={
                    '字段类型，目前有四种类型，分别为字符串（如"你好"，"abc"等），整数（其范围为 -2147483648 到 2147483647 之间），长整数（其范围为 -9223372036854775808 到 9223372036854775807 之间），浮点数（如 3.14'
                  }
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
          <Form.Item label="指标字段" required>
            <Row gutter={8} align="middle">
              <Col span={22}>
                <Form.Item
                  name="high"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '请输入拒绝值',
                    },
                  ]}
                >
                  <Input size="large" placeholder="请输入拒绝值"></Input>
                </Form.Item>
              </Col>
              <Col span={2}>
                {/* <Tooltip
                  placement="right"
                  title={
                    '字段类型，目前有四种类型，分别为字符串（如"你好"，"abc"等），整数（其范围为 -2147483648 到 2147483647 之间），长整数（其范围为 -9223372036854775808 到 9223372036854775807 之间），浮点数（如 3.14'
                  }
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
          <Form.Item label="比率" required>
            <Row gutter={8} align="middle">
              <Col span={22}>
                <Form.Item
                  name="high"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '请输入比率',
                    },
                  ]}
                >
                  <Input size="large" placeholder="请输入比率"></Input>
                </Form.Item>
              </Col>
              <Col span={2}>
                <Tooltip
                  placement="right"
                  title={
                    '当指标字段值过大或者过小时，对指标字段进行放大或者缩小，使命中分数更加合理'
                  }
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
        </Form>
      </Modal>
    </>
  );
};
