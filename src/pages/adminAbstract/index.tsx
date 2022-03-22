import styles from './index.less';
import Search from '@/components/searchInput';
import Table from '@/components/table';
import { useEffect, useState, useRef } from 'react';
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
import DynamicFilterCondition from './dynamicFilterCondition/index';
import { getPrehandleFields, del, get, save } from '@/api/abstract';
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

  const [ruleDefinitionEdit, setRuleDefinitionEdit] = useState([]);

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
            const {
              comment,
              label,
              aggregateType,
              searchField,
              functionField,
              searchIntervalValue,
              searchIntervalType,
              ruleDefinition,
            } = row;
            form.setFieldsValue({
              comment,
              label,
              aggregateType,
              searchField,
              functionField,
              searchIntervalValue,
              searchIntervalType,
            });
            setRuleDefinitionEdit(ruleDefinition);
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

  const [prehandleFields, setPrehanleFields] = useState([]);
  const getPrehandleFieldsHook = () => {
    getPrehandleFields(params.id).then(({ data }) => {
      setPrehanleFields(data.list);
    });
  };

  const renderGroupSelect = (prehandleFields: any) => {
    return prehandleFields.map((item: any) => {
      return (
        <Select.OptGroup label={item.label} key={item.value}>
          {item.children.length &&
            item.children.map((child: any) => {
              return (
                <Select.Option
                  value={item.value + '.' + child.value}
                  key={child.value}
                >
                  {child.label}
                </Select.Option>
              );
            })}
        </Select.OptGroup>
      );
    });
  };

  const renderGroupSelectEl = renderGroupSelect(prehandleFields);
  const ref: any = useRef();
  useEffect(() => {
    search();
    getPrehandleFieldsHook();
  }, []);
  return (
    <>
      <div className={styles.adminAbstract}>
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
              setRuleDefinitionEdit([]);
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
        <p style={{ textAlign: 'center' }}>确认删除该行?</p>
      </Modal>

      <Modal
        wrapClassName="myModal"
        getContainer={'#root'}
        visible={visible}
        title={id ? '编辑字段' : '新增字段'}
        width={560}
        onOk={() => {
          const ruleDefinition = ref.current.getRuleDefinition() || '';
          console.log(ruleDefinition);
          console.log(ref);
          form.validateFields().then((values) => {
            save({
              ...values,
              ruleDefinition,
              modelId: params.id,
              id: id ? id : undefined,
            }).then(() => {
              setVisible(false);
              search();
            });
          });
        }}
        destroyOnClose
        onCancel={() => setVisible(false)}
      >
        <Form form={form} {...layout} colon>
          <Form.Item label="指标名" required>
            <Row gutter={8} align="middle">
              <Col span={22}>
                <Form.Item
                  name="label"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '请输入指标名',
                    },
                  ]}
                >
                  <Input size="large" placeholder="请输入指标名" />
                </Form.Item>
              </Col>
              <Col span={2}>
                <Tooltip
                  placement="right"
                  title={'指标显示名称，一般为中文，如"100秒内设备注册数"'}
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
          <Form.Item label="聚合条件" required>
            <Row gutter={8} align="middle">
              <Col span={22}>
                <Form.Item
                  name="aggregateType"
                  noStyle
                  initialValue=""
                  rules={[
                    {
                      required: true,
                      message: '请选择聚合条件',
                    },
                  ]}
                >
                  <Select size="large">
                    <Select.Option value="">--请选择--</Select.Option>
                    <Select.Option value="1">求总数</Select.Option>
                    <Select.Option value="2">求不同项总数</Select.Option>
                    <Select.Option value="3">求和</Select.Option>
                    <Select.Option value="4">求平均值</Select.Option>
                    <Select.Option value="5">求最大值</Select.Option>
                    <Select.Option value="6">求最小值</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={2}></Col>
            </Row>
          </Form.Item>
          <Form.Item label="搜索字段" required>
            <Row gutter={8} align="middle">
              <Col span={22}>
                <Form.Item
                  name="searchField"
                  noStyle
                  initialValue=""
                  rules={[
                    {
                      required: true,
                      message: '请输入搜索字段',
                    },
                  ]}
                >
                  <Select size="large">
                    <Select.Option value="">--请选择--</Select.Option>
                    {renderGroupSelectEl}
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
          <Form.Item label="统计字段">
            <Row gutter={8} align="middle">
              <Col span={22}>
                <Form.Item name="functionField" noStyle initialValue="">
                  <Select size="large">
                    <Select.Option value="">--请选择--</Select.Option>
                    {renderGroupSelectEl}
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
          <Form.Item label="时间片" required>
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
                <Form.Item name="searchIntervalType" noStyle initialValue="1">
                  <Select size="large">
                    <Select.Option value="1">年</Select.Option>
                    <Select.Option value="2">月</Select.Option>
                    <Select.Option value="5">日</Select.Option>
                    <Select.Option value="11">时</Select.Option>
                    <Select.Option value="12">分</Select.Option>
                    <Select.Option value="13">秒</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="备注">
            <Row gutter={8} align="middle">
              <Col span={22}>
                <Form.Item name="comment" noStyle>
                  <Input.TextArea />
                </Form.Item>
              </Col>
              <Col span={2}></Col>
            </Row>
          </Form.Item>
        </Form>
        <div className="filterCondition">
          <p className="title">过滤条件</p>
          <DynamicFilterCondition
            renderGroupSelectEl={renderGroupSelectEl}
            prehandleFields={prehandleFields}
            ref={ref}
            ruleDefinitionEdit={ruleDefinitionEdit}
          />
        </div>
      </Modal>
    </>
  );
};
