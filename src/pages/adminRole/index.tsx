import styles from './index.less';
import Search from '@/components/searchInput';
import Table from '@/components/table';
import { useEffect, useState } from 'react';
import createColumns from './columns';
import { useHistory, useModel, useParams } from 'umi';
import { Form, Button, Select } from 'antd';
import MySelect from '@/components/select';

import { FormOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { get, delRole } from '@/api/role';
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16, offset: 2 },
};

const { Option } = Select;

export default (props: any) => {
  const {
    initialState: {
      ['/role']: { add, edit, del },
    },
  } = useModel('@@initialState');

  const history = useHistory();
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

  // 新增和编辑
  const [visible, setVisible] = useState(false);
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
                pathname: '/role/edit',
                state: {
                  id: row.roleId,
                },
              });
              // setVisible(true);
              // setId(row.roleId);
              // const { fieldType, label, indexed, fieldName } = row;
              // form.setFieldsValue({
              //   fieldType,
              //   label,
              //   indexed: indexed ? true : false,
              //   fieldName,
              // });
            }}
            className="editBtnTable"
          >
            <FormOutlined />
            编辑
          </Button>
        )}
        {del && (
          <Button
            type="link"
            onClick={() => {
              delRole([row.id]).then(() => {
                search();
              });
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
                  pathname: '/role/add',
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
          rowKey="roleId"
          pageInfo={pageInfo}
          onChange={(pageNo: number, pageSize: number) => {
            search({ pageNo, pageSize });
          }}
        />
      </div>
    </>
  );
};
