import styles from './index.less';
import Search from '@/components/searchInput';
import Table from '@/components/table';
import { useEffect, useState } from 'react';
import createColumns from './columns';
import { useHistory, useModel, useParams } from 'umi';
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
import { get, add, edit, del } from '@/api/account';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16, offset: 2 },
};

const { Option } = Select;

export default (props: any) => {
  const {
    initialState: {
      ['/account']: { add, edit, delBtn },
    },
  } = useModel('@@initialState');
  const history = useHistory();
  const params = useParams();
  const [searchCondition, setSearchCondition] = useState({
    userName: '',
    status: '',
  });
  const [pageInfo, setPageInfo] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [data, setData] = useState([]);

  const [delVisible, setDelVisible] = useState(false);
  const [id, setId] = useState('');

  const [form] = Form.useForm();

  const Action = (props: any) => {
    const history = useHistory();
    const { row, col } = props;
    return (
      <>
        {edit && (
          <Button
            type="link"
            onClick={() => {
              history.push({
                pathname: '/account/edit',
                state: {
                  id: row.id,
                },
              });
            }}
            className="editBtnTable"
          >
            <FormOutlined />
            编辑
          </Button>
        )}
        {delBtn && (
          <Button
            type="link"
            onClick={() => {
              setDelVisible(true);
              setId(row.id);
            }}
            className="delBtnTable"
          >
            <DeleteOutlined />
            删除
          </Button>
        )}
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
      <div className={styles.adminAccount}>
        <div className={styles.topBar}>
          <div className={styles.searchCondition}>
            <Search
              placeholder={'配置信息名称搜索'}
              value={searchCondition.userName}
              onChange={(e: any) => {
                setSearchCondition({
                  ...searchCondition,
                  userName: e.target.value,
                });
              }}
              onPressEnter={() => search({ pageNo: 1 })}
              onSearch={() => search({ pageNo: 1 })}
            />
            <MySelect
              placeholder={'状态'}
              value={searchCondition.status}
              onChange={(e: any) => {
                setSearchCondition({ ...searchCondition, status: e });
                search({ pageNo: 1 });
              }}
              data={[
                { name: '启用', value: 1 },
                { name: '停用', value: 2 },
              ]}
            />
          </div>
          {add && (
            <Button
              className="addBtn"
              onClick={() => {
                history.push({
                  pathname: '/account/add',
                  state: {
                    id: '',
                  },
                });
              }}
            >
              <PlusOutlined />
              新增
            </Button>
          )}
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
        <p style={{ textAlign: 'center' }}>确认删除该账号?</p>
      </Modal>
    </>
  );
};
