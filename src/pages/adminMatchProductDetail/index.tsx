import styles from './index.less';
import Table from '@/components/table';

import { useEffect, useState } from 'react';
import createColumns from './columns';
import { useHistory, useModel } from 'umi';
import { Modal, Form, Input, Button, InputNumber } from 'antd';
import { get, getRow, edit } from '@/api/matchDetailByProduct';
import { FormOutlined } from '@ant-design/icons';

export default (props: any) => {
  // const {
  //   initialState: {
  //     ['/match']: { edit, del },
  //   },
  // } = useModel('@@initialState');
  const history = useHistory();
  console.log(history);
  // const [searchCondition, setSearchCondition] = useState({
  //   orgName: '',
  //   rzlx: '',
  // });

  const [data, setData] = useState([]);

  const [visible, setVisible] = useState(false);
  const [id, setId] = useState('');
  const [pageInfo, setPageInfo] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [form] = Form.useForm();

  useEffect(() => {
    search({ pageNo: 1 });
  }, []);
  const Action = (props: any) => {
    const { row, col } = props;
    return (
      <>
        <Button
          type="link"
          onClick={() => {
            setVisible(true);
            setId(row.id);
          }}
        >
          <FormOutlined />
          修改
        </Button>
      </>
    );
  };

  const columns: any = createColumns((row: any, col: any) => (
    <Action row={row} col={col} key={row.id} />
  ));

  const search = (params?: any) => {
    get({
      // ...searchCondition,
      id: history.location.query.id,
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
      <div className={styles.matchDetailByProduct}>
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
        title="修改得分"
        visible={visible}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      >
        <Form form={form}>
          <Form.Item name="amount" label="策略名称">
            <InputNumber min={0}></InputNumber>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
