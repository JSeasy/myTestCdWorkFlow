import styles from './index.less';
import Search from '@/components/searchInput';
import Table from '@/components/table';
import Select from '@/components/select';
import { useEffect, useState } from 'react';
import createColumns from './columns';
import { useHistory, useModel } from 'umi';
import { Modal, Form, Input, Button } from 'antd';
import { PlusOutlined, FormOutlined } from '@ant-design/icons';
import { get } from '@/api/system';
import DatePicker from '@/components/datePicker';
export default (props: any) => {
  const {
    initialState: {
      ['/system']: { add, edit, del },
    },
  } = useModel('@@initialState');
  const [searchCondition, setSearchCondition] = useState({
    userName: '',
    createTimeEnd: '',
    createTimeStart: '',
  });
  const [pageInfo, setPageInfo] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [data, setData] = useState([]);

  const columns: any = createColumns();

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
  }, [searchCondition.createTimeEnd, searchCondition.createTimeStart]);
  const change = (times: any) => {
    setSearchCondition({
      ...searchCondition,
      createTimeEnd: times[1],
      createTimeStart: times[0],
    });
  };
  return (
    <>
      <div className={styles.adminLog}>
        <div className={styles.topBar}>
          <div className={styles.searchCondition}>
            <DatePicker
              value={[
                searchCondition.createTimeStart,
                searchCondition.createTimeEnd,
              ]}
              onChange={(times: any) => {
                change(times);
              }}
            />
            <Search
              placeholder={'请输入管理员'}
              value={searchCondition.userName}
              onChange={(e: any) => {
                setSearchCondition({
                  ...searchCondition,
                  userName: e.target.value,
                });
              }}
              onPressEnter={search}
              onSearch={search}
            />
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          rowKey="id"
          pageInfo={pageInfo}
        />
      </div>
    </>
  );
};
