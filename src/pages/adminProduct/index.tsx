import styles from './index.less';
import Search from '@/components/searchInput';
import Table from '@/components/table';
import { useEffect, useState } from 'react';
import createColumns from './columns';
import { useHistory } from 'umi';
import { Modal, Form, Input, Button } from 'antd';
import { get, del } from '@/api/product/index';
import {
  PlusOutlined,
  FormOutlined,
  EyeOutlined,
  CopyOutlined,
  RetweetOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import Add_Edit from './add&edit/index';
export default (props: any) => {
  // 表单实例
  const [form] = Form.useForm();
  //删除id
  const [id, setId] = useState('');
  //搜索条件
  const [searchCondition, setSearchCondition] = useState({
    label: '',
  });

  const [pageInfo, setPageInfo] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  //列表数据
  const [data, setData] = useState([]);
  // 获取列表数据接口
  const search = (params?: any) => {
    console.log({ ...searchCondition });
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

  // 新增
  const [visible, setVisible] = useState(false);

  // 删除
  const [delVisible, setDelVisible] = useState(false);

  // 重构
  const [revertVisible, setRevertVisible] = useState(false);
  // 查看
  const [viewVisible, setViewVisible] = useState(false);
  const [uid, setUid] = useState('');

  const [editVisible, setEditVisible] = useState(false);

  const Action = (props: any) => {
    const history = useHistory();
    const { row, col } = props;
    return (
      <>
        <Button type="link" className="editBtnTable">
          <CopyOutlined /> 复制
        </Button>
        <Button
          type="link"
          className="editBtnTable"
          onClick={() => {
            setVisible(true);
            setId(row.id);
          }}
        >
          <FormOutlined /> 编辑
        </Button>
        <Button
          type="link"
          onClick={() => setRevertVisible(true)}
          className="delBtnTable"
        >
          <RetweetOutlined /> 重构
        </Button>
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
      </>
    );
  };

  const View = (props: any) => {
    const history = useHistory();
    const { row, col } = props;
    return (
      <Button
        type="link"
        className="editBtn"
        onClick={() => {
          setViewVisible(true);
          setUid(col);
        }}
      >
        <EyeOutlined /> 查看
      </Button>
    );
  };

  const columns: any = createColumns(
    (row: any, col: any) => <Action row={row} col={col} />,
    (row: any, col: any) => <View row={row} col={col} />,
  );

  const handleOk = () => {};
  console.log(data);
  return (
    <>
      <div className={styles.adminProduct}>
        <div className={styles.topBar}>
          <div className={styles.searchCondition}>
            <Search
              placeholder={'配置信息名称搜索'}
              value={searchCondition.label}
              onChange={(e: any) => {
                setSearchCondition({
                  label: e.target.value,
                });
                console.log(searchCondition);
              }}
              onPressEnter={() => search({ pageNo: 1 })}
              onSearch={() => search({ pageNo: 1 })}
            />
          </div>
          <Button
            className="addBtn"
            onClick={() => {
              setVisible(true);
              setId('');
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
          onChange={(current: number, pageSize: number) => {
            search({ pageNo: current, pageSize });
          }}
        />
      </div>
      <Add_Edit
        visible={visible}
        id={id}
        onCancel={() => setVisible(false)}
        onOk={() => {
          setVisible(false);
          search();
        }}
      />
      <Modal
        wrapClassName="myModal"
        getContainer={'#root'}
        visible={viewVisible}
        onOk={() => setViewVisible(false)}
        onCancel={() => setViewVisible(false)}
        okText={'知道了'}
        closable={false}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <p>通过接口上传请携带此参数</p>
        <p>guid:{uid}</p>
      </Modal>
      <Modal
        wrapClassName="myModal"
        getContainer={'#root'}
        visible={delVisible}
        title="删除模型"
        okText={'删除'}
        width={400}
        onOk={() => {
          del({ id }).then(() => {
            setDelVisible(false);
            search();
          });
        }}
        onCancel={() => setDelVisible(false)}
        okButtonProps={{
          style: { background: '#ff4651', borderColor: '#ff4651' },
        }}
      >
        <p style={{ textAlign: 'center' }}>确认删除该模型吗?</p>
      </Modal>
      <Modal
        wrapClassName="myModal"
        getContainer={'#root'}
        visible={revertVisible}
        title="重构模型"
        okText={'重构'}
        width={400}
        onOk={() => setRevertVisible(false)}
        onCancel={() => setRevertVisible(false)}
        okButtonProps={{
          style: { background: '#ff4651', borderColor: '#ff4651' },
        }}
      >
        <p style={{ textAlign: 'center' }}>确认重新构建模型将清空历史数据!</p>
      </Modal>
    </>
  );
};
