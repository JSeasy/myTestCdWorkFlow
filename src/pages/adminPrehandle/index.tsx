import styles from './index.less';
import Search from '@/components/searchInput';
import Table from '@/components/table';
import { useEffect, useState } from 'react';
import createColumns from './columns';
import { useHistory, useParams } from 'umi';
import { Modal, Form, Input, Button } from 'antd';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons';
import { get } from '@/api/prehandle';
export default (props: any) => {
  const history = useHistory();
  const params = useParams();
  const [searchCondition, setSearchCondition] = useState({
    fieldName: '',
    modelId: params.id,
  });
  const [pageInfo, setPageInfo] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [data, setData] = useState([]);

  const [visible, setVisible] = useState(false);

  const [form] = Form.useForm();

  const Action = (props: any) => {
    const history = useHistory();
    const { row, col } = props;
    return (
      <>
        <Button
          type="link"
          onClick={() => history.push('/match/edit')}
          className="editBtnTable"
        >
          <FormOutlined />
          编辑
        </Button>
        <Button
          type="link"
          onClick={() => history.push('/match/edit')}
          className="delBtnTable"
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

  useEffect(() => {
    search();
  }, []);
  return (
    <>
      <div className={styles.adminFields}>
        <div className={styles.topBar}>
          <div className={styles.searchCondition}>
            <Search
              placeholder={'配置信息名称搜索'}
              value={searchCondition.fieldName}
              onChange={(e: any) => {
                setSearchCondition({
                  ...searchCondition,
                  fieldName: e.target.value,
                });
              }}
              onPressEnter={() => search()}
              onSearch={() => search()}
            />
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
        onOk={() => {}}
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
