import { Table, Pagination } from 'antd';
import styles from './index.less';
export default (props: any) => {
  const showTotal = (total: number) => {
    return `Total ${total} items`;
  };
  return (
    <div className={styles.myTable}>
      <Table
        dataSource={props.dataSource}
        columns={props.columns}
        pagination={false}
      />
      <Pagination
        size="small"
        total={50}
        disabled
        showTotal={showTotal}
        showSizeChanger
        showQuickJumper
      />
    </div>
  );
};
