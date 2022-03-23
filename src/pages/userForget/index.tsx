import styles from './index.less';
export default (props: any) => {
  return (
    <div className={styles.forget}>
      <div className={styles.title}>
        <h1>忘记密码</h1>
        <div className={styles.border}></div>
      </div>
      <div className={styles.content}></div>
    </div>
  );
};
