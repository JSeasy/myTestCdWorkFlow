import styles from './index.less';
import Search from '@/components/searchInput';
import Table from '@/components/table';
import Select from '@/components/select';
import { useState } from 'react';
import createColumns from './columns';
import { useHistory } from 'umi';
import { Modal, Form, Input, Button } from 'antd';
export default (props: any) => {
  const [searchCondition, setSearchCondition] = useState({
    name: '',
    top: '',
  });
  const [data, setData] = useState([
    { name: 1, age: 2, id: '1' },
    { name: 1, age: 13, id: '2' },
    { name: 1, age: 13, id: '3' },
  ]);

  const [visible, setVisible] = useState(false);

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
              pathname: '/views/match/detail',
              state: { id: '1' },
            })
          }
        >
          详情
        </Button>
        <Button type="link" onClick={() => history.push('/views/match/edit')}>
          编辑
        </Button>
        <Button type="link" onClick={() => setVisible(true)}>
          备注
        </Button>
      </>
    );
  };

  const columns: any = createColumns((row: any, col: any) => (
    <Action row={row} col={col} key={row.id} />
  ));

  const search = () => {};
  const handleOk = () => {};
  console.log(data);
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
        </div>
        <Table columns={columns} dataSource={data} rowKey="id" />
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
