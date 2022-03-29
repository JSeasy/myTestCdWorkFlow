import styles from './index.less';
import Search from '@/components/searchInput';
import Table from '@/components/table';
import Select from '@/components/select';
import { useEffect, useState } from 'react';
import createColumns from './columns';
import { useHistory } from 'umi';
import { Modal, Form, Input, Button } from 'antd';
import { PlusOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';
import { get, del } from '@/api/customer';
export default (props: any) => {
  const history = useHistory();

  const [searchCondition, setSearchCondition] = useState({
    name: '',
    top: '',
  });
  const [data, setData] = useState([]);
  const [id, setId] = useState('');
  const [visible, setVisible] = useState(false);
  const [pageInfo, setPageInfo] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [form] = Form.useForm();
  useEffect(() => {
    search();
  }, []);

  const Action = (props: any) => {
    const { row, col } = props;
    return (
      <>
        <Button
          type="link"
          onClick={() =>
            history.push({
              pathname: '/customer/edit',
              state: {
                id: row.id,
              },
            })
          }
          className="editBtnTable"
        >
          <FormOutlined /> 编辑
        </Button>
        <Button
          className="delBtnTable"
          type="link"
          onClick={() => {
            setVisible(true);
            setId(row.id);
          }}
        >
          <DeleteOutlined /> 删除
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
  const handleOk = () => {};
  console.log(data);
  return (
    <>
      <div className={styles.adminCustomer}>
        <div className={styles.topBar}>
          <div className={styles.searchCondition}>
            <Search
              placeholder={'企业名称搜索'}
              value={searchCondition.name}
              onChange={(e: any) => {
                setSearchCondition({
                  ...searchCondition,
                  name: e.target.value,
                });
              }}
              onPressEnter={search}
              onSearch={search}
            />
            <Select
              placeholder={'融资类型'}
              value={searchCondition.top}
              onChange={(e: any) => {
                setSearchCondition({ ...searchCondition, top: e });
              }}
              data={[
                { name: '服装', value: 1 },
                { name: '餐饮', value: 2 },
                { name: '房地产', value: 3 },
                { name: '汽车', value: 4 },
                { name: '互联网', value: 5 },
              ]}
            />
          </div>
          <Button
            className="addBtn"
            onClick={() => {
              history.push('/customer/add');
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
        visible={visible}
        title="删除"
        okText={'删除'}
        width={400}
        onOk={() => {
          del([id]).then(() => {
            setVisible(false);
            search();
          });
        }}
        onCancel={() => setVisible(false)}
        okButtonProps={{
          style: { background: '#ff4651', borderColor: '#ff4651' },
        }}
      >
        <p style={{ textAlign: 'center' }}>确认删除?</p>
      </Modal>
    </>
  );
};
