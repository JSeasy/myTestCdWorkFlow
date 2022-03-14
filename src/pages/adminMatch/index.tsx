import styles from './index.less';
export default (props: any) => {
  return (
    <div className={styles.adminMatch}>
      <div className={styles.topBar}>
        <div className={styles.searchCondition}></div>
        <div className={styles.count}>
          <div className={styles.card}>
            <img src={require('./assets/1.png')} height="60" />
            <div className={styles.text}>
              <h5>190</h5>
              <p>匹配总量</p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={require('./assets/2.png')} height="60" />
            <div className={styles.text}>
              <h5>12</h5>
              <p>待办事项</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
