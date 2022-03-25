import styles from './index.less';
import Search from '@/components/searchInput';
import Table from '@/components/table';
import Select from '@/components/select';
import { useState } from 'react';
import createColumns from './columns';
import { useHistory, useParams } from 'umi';
import { Modal, Form, Input, Button } from 'antd';
import { EyeOutlined, FormOutlined, SolutionOutlined } from '@ant-design/icons';

export default (props: any) => {
  const history = useHistory();
  const [searchCondition, setSearchCondition] = useState({
    name: '',
    top: '',
  });
  const [data, setData] = useState([]);

  const [visible, setVisible] = useState(false);
  const [pageInfo, setPageInfo] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
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
              pathname: '/match/detail',
            })
          }
        >
          <EyeOutlined />
          详情
        </Button>
        <Button type="link" onClick={() => history.push('/match/edit')}>
          <FormOutlined />
          编辑
        </Button>
        <Button type="link" onClick={() => setVisible(true)}>
          <SolutionOutlined />
          备注
        </Button>
      </>
    );
  };

  const columns: any = createColumns((row: any, col: any) => (
    <Action row={row} col={col} key={row.id} />
  ));

  const search = () => {};
  const handleOk = () => {
    history.push('/login');
  };
  return (
    <>
      <div className={styles.adminMatch}>
        <div className={styles.topBar}>
          <div className={styles.searchCondition}>
            <Search
              placeholder={'请输入产品名称'}
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
                <h5>190</h5>
                <p>匹配总量</p>
              </div>
            </div>
            <div className={styles.card}>
              <img src={require('./assets/2.png')} height="60" />
              <div className={styles.text}>
                <h5>12</h5>
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
          <Form.Item
            name="remark"
            label="备注"
            rules={[
              {
                required: true,
                message: '请输入备注',
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
