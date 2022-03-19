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
import MySelect from '@/components/select';

import {
  FormOutlined,
  DeleteOutlined,
  PlusOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { get } from '@/api/role';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16, offset: 2 },
};

const { Option } = Select;

export default (props: any) => {
  const history = useHistory();
  const params = useParams();
  const [searchCondition, setSearchCondition] = useState({
    roleName: '',
    status: '',
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

  useEffect(() => {
    search();
  }, []);
  return (
    <>
      <div className={styles.adminRole}>
        <div className={styles.topBar}>
          <div className={styles.searchCondition}>
            <Search
              placeholder={'配置信息名称搜索'}
              value={searchCondition.roleName}
              onChange={(e: any) => {
                setSearchCondition({
                  ...searchCondition,
                  roleName: e.target.value,
                });
              }}
              onPressEnter={() => search()}
              onSearch={() => search()}
            />
            <MySelect
              placeholder={'状态'}
              value={searchCondition.status}
              onChange={(e: any) => {
                setSearchCondition({ ...searchCondition, status: e });
              }}
              data={[
                { name: '启用', value: 1 },
                { name: '停用', value: 2 },
              ]}
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
    </>
  );
};
