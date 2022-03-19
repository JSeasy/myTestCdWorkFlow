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
  Checkbox,
} from 'antd';
import {
  FormOutlined,
  DeleteOutlined,
  PlusOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { get, del, add, getFieldType } from '@/api/fields';

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
            const { fieldType, label, indexed, fieldName } = row;
            form.setFieldsValue({
              fieldType,
              label,
              indexed: indexed ? true : false,
              fieldName,
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

  const [fieldType, setFieldType] = useState([]);
  const getFieldTypeHook = () => {
    getFieldType().then(({ data }) => {
      setFieldType(data.fields);
    });
  };

  useEffect(() => {
    search();
    getFieldTypeHook();
  }, []);
  return (
    <>
      <div className={styles.adminFields}>
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
        onOk={() => {
          form.validateFields().then((values) => {
            add({
              ...values,
              indexed: values.indexed ? 1 : 0,
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
          <Form.Item label="字段名" required>
            <Row gutter={8} align="middle">
              <Col span={22}>
                <Form.Item
                  name="fieldName"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '请输入字段名',
                    },
                  ]}
                >
                  <Input size="large" placeholder="请输入字段名" />
                </Form.Item>
              </Col>
              <Col span={2}>
                <Tooltip
                  placement="right"
                  title={
                    '位英文字母、数字、下划线的组合，以英文字母开头，如"deviceId"'
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
          <Form.Item label="显示名称" required>
            <Row gutter={8} align="middle">
              <Col span={22}>
                <Form.Item
                  name="label"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '请输入显示名称',
                    },
                  ]}
                >
                  <Input size="large" placeholder="请输入显示名称" />
                </Form.Item>
              </Col>
              <Col span={2}>
                <Tooltip
                  placement="right"
                  title={'字段显示名称，一般为中文，如"设备ID"'}
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
          <Form.Item label="字段类型" required>
            <Row gutter={8} align="middle">
              <Col span={22}>
                <Form.Item
                  name="fieldType"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '请选择字段类型',
                    },
                  ]}
                  initialValue="STRING"
                >
                  <Select size="large">
                    {fieldType.map((field: any) => (
                      <Option value={field.name} key={field.name}>
                        {field.desc}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={2}>
                <Tooltip
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
                </Tooltip>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="是否索引">
            <Row gutter={8} align="middle">
              <Col span={2}>
                <Form.Item name="indexed" noStyle valuePropName="checked">
                  <Checkbox></Checkbox>
                </Form.Item>
              </Col>
              <Col span={2}>
                <Tooltip
                  placement="right"
                  title={'如果勾选，则为该字段创建索引'}
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
