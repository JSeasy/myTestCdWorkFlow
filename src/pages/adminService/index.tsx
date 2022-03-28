import styles from './index.less';
import Search from '@/components/searchInput';
import Table from '@/components/table';
import Select from '@/components/select';
import { useEffect, useState } from 'react';
import createColumns from './columns';
import { useHistory } from 'umi';
import { Modal, Form, Input, Button } from 'antd';
import {
  EyeOutlined,
  FormOutlined,
  DeleteOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { get, del } from '@/api/service/index';
export default (props: any) => {
  const history = useHistory();
  const [searchCondition, setSearchCondition] = useState({
    orgName: '',
    gshy: '',
  });
  const [data, setData] = useState([]);

  const [pageInfo, setPageInfo] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

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
          onClick={() =>
            history.push({
              pathname: '/service/edit',
              state: {
                id: row.id,
              },
            })
          }
        >
          <FormOutlined />
          编辑
        </Button>
        <Button
          type="link"
          className="delBtnTable"
          onClick={() => {
            setVisible(true);
            setId(row.id);
          }}
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

  const handleOk = () => {};

  useEffect(() => {
    search();
  }, []);
  return (
    <>
      <div className={styles.adminService}>
        <div className={styles.topBar}>
          <div className={styles.searchCondition}>
            <Search
              placeholder={'请输入企业名称'}
              value={searchCondition.orgName}
              onChange={(e: any) => {
                setSearchCondition({
                  ...searchCondition,
                  orgName: e.target.value,
                });
              }}
              onPressEnter={() => search({ pageNo: 1 })}
              onSearch={() => search({ pageNo: 1 })}
            />
            {/* <Select
              placeholder={'融资类型'}
              value={searchCondition.gshy}
              onChange={(e: any) => {
                setSearchCondition({ ...searchCondition, gshy: e });
                search({ pageNo: 1 });
              }}
              data={[
                { name: '信用', value: 1 },
                { name: '抵押', value: 2 },
                { name: '其他', value: 3 },
              ]}
            /> */}
          </div>
          <div>
            <Button
              className="addBtn"
              onClick={() => {
                history.push('/service/add');
              }}
            >
              <PlusOutlined />
              新增
            </Button>
          </div>
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
