import styles from './index.less';
import Search from '@/components/searchInput';
import Table from '@/components/table';
import { useEffect, useState } from 'react';
import createColumns from './columns';
import { useHistory, useParams } from 'umi';
import {
  Modal,
  Form,
  Input,
  Button,
  Row,
  Col,
  Tooltip,
  Select,
  InputNumber,
} from 'antd';
import {
  FormOutlined,
  DeleteOutlined,
  PlusOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { get, del, add, getPlugins } from '@/api/prehandle';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16, offset: 2 },
};

const { Option } = Select;

export default (props: any) => {
  const history = useHistory();
  const params = useParams();
  const [searchCondition, setSearchCondition] = useState({
    label: '',
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
            const { plugin, label, sourceLabel, args } = row;
            form.setFieldsValue({
              plugin,
              label,
              sourceLabel,
              args,
            });
            setPluginType(plugin);
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

  const [sourceFields, setSourceFields] = useState([]);
  const getSourceFields = () => {
    get({ pageNo: 1, pageSize: 1000, modelId: params.id }).then(({ data }) => {
      const { page } = data;
      setSourceFields(page.list);
    });
  };
  // 插件数据列表
  const [pluginList, setPluginList] = useState([]);
  const getPluginsHook = () => {
    getPlugins().then(({ data }) => {
      setPluginList(data.plugins);
    });
  };

  useEffect(() => {
    search();
    getPluginsHook();
    getSourceFields();
  }, []);
  const dateFormate = [
    'yyyy',
    'yyyy-mm',
    'yyyy-mm-dd',
    'yyyy/mm/dd',
    'yyyy-mm-dd hh:mm:ss',
  ];

  const [pluginType, setPluginType] = useState('');
  return (
    <>
      <div className={styles.adminPrehandle}>
        <div className={styles.topBar}>
          <div className={styles.searchCondition}>
            <Search
              placeholder={'配置信息名称搜索'}
              value={searchCondition.label}
              onChange={(e: any) => {
                setSearchCondition({
                  ...searchCondition,
                  label: e.target.value,
                });
              }}
              onPressEnter={() => search()}
              onSearch={() => search()}
            />
          </div>
          <Button
            className="addBtn"
            onClick={() => {
              setVisible(true);
              setId('');
              form.resetFields();
              setPluginType('');
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
        <p style={{ textAlign: 'center' }}>确认删除该字段吗?</p>
      </Modal>

      <Modal
        wrapClassName="myModal"
        getContainer={'#root'}
        visible={visible}
        title={id ? '编辑字段' : '新增字段'}
        width={560}
        onOk={() => {
          form.validateFields().then((values) => {
            add({
              ...values,
              modelId: params.id,
              id: id ? id : undefined,
            }).then(() => {
              setVisible(false);
              search();
            });
          });
        }}
        onCancel={() => setVisible(false)}
      >
        <Form form={form} {...layout} colon>
          <Form.Item label="插件种类" required>
            <Row gutter={8} align="middle">
              <Col span={22}>
                <Form.Item
                  name="plugin"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '请选择插件种类',
                    },
                  ]}
                  initialValue=""
                >
                  <Select
                    size="large"
                    onChange={(e) => {
                      setPluginType(e);
                      form.setFieldsValue({
                        args: '',
                      });
                    }}
                  >
                    <Option value="">--请选择--</Option>
                    {pluginList.map((field: any) => (
                      <Option value={field.method} key={field.key}>
                        {field.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={2}>
                <Tooltip
                  placement="right"
                  title={
                    '插件种类，如 IP转换成地址（将IP地址转换成详细的实际地址），字段合并（将多个原始字段合并起来），字符串截短（例将手机号码截取部分进行筛选，如前七位0,7），等等'
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
          {pluginType === 'DATEFORMAT' && (
            <Form.Item label={'日期时间格式化'} required>
              <Row gutter={8} align="middle">
                <Col span={22}>
                  <Form.Item
                    name="args"
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: '请选择日期格式',
                      },
                    ]}
                    initialValue=""
                  >
                    <Select size="large">
                      <Option value="">--请选择--</Option>
                      {dateFormate.map((date: any) => (
                        <Option value={date} key={date}>
                          {date}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={2}>
                  {/* <Tooltip
                    placement="right"
                    title={
                      '插件种类，如 IP转换成地址（将IP地址转换成详细的实际地址），字段合并（将多个原始字段合并起来），字符串截短（例将手机号码截取部分进行筛选，如前七位0,7），等等'
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
          )}
          {pluginType === 'SUBSTRING' && (
            <Form.Item label="字符串截短" required>
              <Row gutter={8} align="middle">
                <Col span={22}>
                  <Form.Item
                    name="args"
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: '请填写字符串截短',
                      },
                    ]}
                    initialValue={0}
                  >
                    <Input size="large"></Input>
                  </Form.Item>
                </Col>
                <Col span={2}>
                  {/* <Tooltip
                placement="right"
                title={
                  '插件种类，如 IP转换成地址（将IP地址转换成详细的实际地址），字段合并（将多个原始字段合并起来），字符串截短（例将手机号码截取部分进行筛选，如前七位0,7），等等'
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
          )}
          <Form.Item label="目标字段名" required>
            <Row gutter={8} align="middle">
              <Col span={22}>
                <Form.Item
                  name="label"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '请输入目标字段名',
                    },
                  ]}
                >
                  <Input size="large" placeholder="请输入目标字段名" />
                </Form.Item>
              </Col>
              <Col span={2}>
                <Tooltip
                  placement="right"
                  title={'字段显示名称，一般为中文，如"IP归属地"'}
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
          <Form.Item label="原始字段名" required>
            <Row gutter={8} align="middle">
              <Col span={22}>
                <Form.Item
                  name="sourceField"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '请选择原始字段名',
                    },
                  ]}
                  initialValue=""
                >
                  <Select size="large">
                    <Option value="">--请选择--</Option>
                    {sourceFields.map((field: any) => (
                      <Option value={field.id} key={field.id}>
                        {field.sourceLabel}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={2}>
                <Tooltip
                  placement="right"
                  title={'原始字段名，均为自己定义的字段名'}
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
