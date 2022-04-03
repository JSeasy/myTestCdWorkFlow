import styles from './index.less';
import { useHistory } from 'umi';
const path = ['/user/regist', '/user/forget'];
export default (props: any) => {
  const history = useHistory();
  const {
    location: { pathname },
  } = history;
  return (
    <>
      {!path.includes(pathname) && (
        <div className={styles.header}>
          <div className={styles.left}>
            <img src={require('./assets/1.png')} />
            <span>某某系统</span>
          </div>
          <div className={styles.right}>
            <span>用户名</span>
          </div>
        </div>
      )}
      <div className={styles.userContent}>{props.children}</div>
    </>
  );
};
