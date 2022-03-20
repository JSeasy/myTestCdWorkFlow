import { LoadingOutlined } from '@ant-design/icons';
import styles from './index.less';
export default (props: any) => {
  return (
    <>
      <div className={styles.loading}>
        <LoadingOutlined style={{ fontSize: 48 }} />
      </div>
    </>
  );
};
