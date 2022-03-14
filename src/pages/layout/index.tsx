import Sider from './components/sider';
import styles from './index.less';
export default (props: any) => {
  return (
    <div className={styles.layout}>
      <Sider />
      <div className={styles.content}>
        <div className={styles.bar}>
          <span className={styles.routerName}>{props.route.title}</span>
          <div className={styles.user}>
            <img src={require('./assets/1.png')} alt="" />
            <span>用户名</span>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
};
