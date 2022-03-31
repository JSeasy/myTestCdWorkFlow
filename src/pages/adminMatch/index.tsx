import styles from './index.less';
import Search from '@/components/searchInput';
import Table from '@/components/table';
import Select from '@/components/select';
import { useEffect, useState } from 'react';
import createColumns from './columns';
import { useHistory, useParams } from 'umi';
import { Modal, Form, Input, Button } from 'antd';
import { get, getInfo, edit, del } from '@/api/match';
import {
  DeleteOutlined,
  FormOutlined,
  SolutionOutlined,
} from '@ant-design/icons';

export default (props: any) => {
  const history = useHistory();
  const [searchCondition, setSearchCondition] = useState({
    orgName: '',
    rzlx: '',
  });
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});
  const [visible, setVisible] = useState(false);
  const [delVisible, setDelVisible] = useState(false);
  const [id, setId] = useState('');
  const [pageInfo, setPageInfo] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [form] = Form.useForm();

  useEffect(() => {
    search({ pageNo: 1 });
    getInfo().then((res) => {
      setInfo(res.data.count);
    });
  }, [searchCondition.rzlx]);
  const Action = (props: any) => {
    const history = useHistory();
    const { row, col } = props;
    return (
      <>
        <Button
          type="link"
          onClick={() =>
            history.push({ pathname: '/match/detail', state: { id: row.id } })
          }
        >
          <FormOutlined />
          详情
        </Button>
        <Button
          type="link"
          onClick={() =>
            history.push({
              pathname: '/match/edit',
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
          onClick={() => {
            setVisible(true);
            setId(row.id);
            form.setFieldsValue({ remark: row.remark });
          }}
        >
          <SolutionOutlined />
          备注
        </Button>
        <Button
          className="delBtnTable"
          type="link"
          onClick={() => {
            setDelVisible(true);
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
  const handleOk = () => {
    form.validateFields().then((values) => {
      edit({ ...values, id }).then(() => {
        search();
        setVisible(false);
      });
    });
  };
  return (
    <>
      <div className={styles.adminMatch}>
        <div className={styles.topBar}>
          <div className={styles.searchCondition}>
            <Search
              placeholder={'请输入产品名称'}
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
            <Select
              placeholder={'融资类型'}
              value={searchCondition.rzlx}
              onChange={(e: any) => {
                setSearchCondition({ ...searchCondition, rzlx: e });
              }}
              data={[
                { name: '信用', value: 1 },
                { name: '抵押', value: 2 },
                { name: '其他', value: 3 },
              ]}
            />
          </div>
          <div className={styles.count}>
            <div className={styles.card}>
              <img src={require('./assets/1.png')} height="60" />
              <div className={styles.text}>
                <h5>{info.ppzl}</h5>
                <p>匹配总量</p>
              </div>
            </div>
            <div className={styles.card}>
              <img src={require('./assets/2.png')} height="60" />
              <div className={styles.text}>
                <h5>{info.dbsx}</h5>
                <p>待办事项</p>
              </div>
            </div>
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
        title="快速备注"
        visible={visible}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      >
        <Form form={form}>
          <Form.Item name="remark" label="备注">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        wrapClassName="myModal"
        getContainer={'#root'}
        visible={delVisible}
        title="删除"
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
        <p style={{ textAlign: 'center' }}>确认删除?</p>
      </Modal>
    </>
  );
};
