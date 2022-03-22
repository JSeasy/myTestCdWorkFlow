import styles from './index.less';
export default (props: any) => {
  return (
    <div className={styles.regist}>
      <div className={styles.title}>
        <div className={styles.icon}>
          <img src={require('./assets/1.png')} />
          <p>注册须知</p>
        </div>
        <div className={styles.dashed}></div>
        <div className={styles.icon}>
          <img src={require('./assets/2.png')} />
          <p>账号信息</p>
        </div>
        <div className={styles.dashed}></div>
        <div className={styles.icon}>
          <img src={require('./assets/3.png')} />
          <p>完善资料</p>
        </div>
      </div>
    </div>
  );
};
