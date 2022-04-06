import { useHistory } from 'umi';
import styles from './index.less';
export default (props: any) => {
  const history = useHistory();
  return (
    <div className={styles.menu}>
      <div
        onClick={() => {
          history.push('/user/forget');
        }}
      >
        密码设置
      </div>
      <div
        onClick={() => {
          window.localStorage.removeItem('token');
          window.location.reload();
        }}
      >
        退出
      </div>
    </div>
  );
};
