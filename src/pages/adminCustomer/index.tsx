import styles from './index.less';
import Search from '@/components/searchInput';
import Table from '@/components/table';
import Select from '@/components/select';
import { useState } from 'react';
import createColumns from './columns';
import { useHistory } from 'umi';
import { Modal, Form, Input, Button } from 'antd';
import { PlusOutlined, FormOutlined } from '@ant-design/icons';
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
      <Button
        type="link"
        onClick={() => history.push('/views/match/edit')}
        className="editBtn"
      >
        <FormOutlined /> 编辑
      </Button>
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
          <Button className="addBtn">
            <PlusOutlined />
            新增
          </Button>
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