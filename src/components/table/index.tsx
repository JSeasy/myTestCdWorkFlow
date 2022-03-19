import { Table, Pagination } from 'antd';
import styles from './index.less';
export default (props: any) => {
  const { pageInfo } = props;
  const showTotal = (total: number) => {
    return `共 ${total} 条`;
  };
  return (
    <div className={styles.myTable}>
      <Table
        dataSource={props.dataSource}
        columns={props.columns}
        pagination={false}
        rowKey={props.rowKey}
        onRow={props.onRow}
      />
      <Pagination
        size="small"
        total={pageInfo.total}
        showTotal={showTotal}
        showSizeChanger
        showQuickJumper
        current={pageInfo.current}
        pageSize={pageInfo.pageSize}
        onChange={props.onChange}
      />
    </div>
  );
};
