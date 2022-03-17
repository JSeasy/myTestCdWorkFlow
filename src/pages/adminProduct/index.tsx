import styles from './index.less';
import Search from '@/components/searchInput';
import Table from '@/components/table';
import Select from '@/components/select';
import { useState } from 'react';
import createColumns from './columns';
import { useHistory } from 'umi';
import { Modal, Form, Input, Button } from 'antd';
import {
  PlusOutlined,
  FormOutlined,
  EyeOutlined,
  CopyOutlined,
  RetweetOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
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

  const [delVisible, setDelVisible] = useState(false);
  const [revertVisible, setRevertVisible] = useState(false);

  const Action = (props: any) => {
    const history = useHistory();
    const { row, col } = props;
    return (
      <>
        <Button
          type="link"
          onClick={() => history.push('/views/match/edit')}
          className="editBtnTable"
        >
          <CopyOutlined /> 复制
        </Button>
        <Button
          type="link"
          onClick={() => history.push('/views/match/edit')}
          className="editBtnTable"
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
          onClick={() => setDelVisible(true)}
          className="delBtnTable"
        >
          <DeleteOutlined />
          删除
        </Button>
      </>
    );
  };

  const [viewVisible, setViewVisible] = useState(false);
  const [uid, setUid] = useState('');
  const View = (props: any) => {
    const history = useHistory();
    const { row, col } = props;
    return (
      <Button
        type="link"
        className="editBtn"
        onClick={() => {
          setViewVisible(true);
          setUid('stinguidddddddddddd');
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

  const search = () => {};
  const handleOk = () => {};
  console.log(data);
  return (
    <>
      <div className={styles.adminProduct}>
        <div className={styles.topBar}>
          <div className={styles.searchCondition}>
            <Search
              placeholder={'配置信息名称搜索'}
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
        onOk={() => setDelVisible(false)}
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
